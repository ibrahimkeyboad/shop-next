import connectDB from '@/db';
import Product from '@/models/productModel';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    console.log(searchParams);

    const pageQuer = searchParams.get('page');
    const page = +pageQuer || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const keyword = searchParams.get('keyword')
      ? {
          name: {
            $regex: searchParams.get('keyword'),
            $options: 'i',
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(limit)
      .skip(skip);
    return NextResponse.json({
      products,
      pages: Math.ceil(count / limit),
      page,
    });
  } catch (error) {
    return new NextResponse(`${error}`, { status: 500 });
  }
}
