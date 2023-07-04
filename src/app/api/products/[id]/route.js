import db from '@/db';
import Product from '@/models/productModel';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    await db.connect();
    console.log(params.id);
    const product = await Product.findById({ _id: params.id }).populate(
      'reviews'
    );

    await db.disconnect();
    return NextResponse.json(product);
  } catch (err) {
    return new NextResponse(`${err}`, { status: 500 });
  }
}
