import db from '@/db';
import Product from '@/models/productModel';
import User from '@/models/userModel';
import { products } from '@/utils/product';
import { users } from '@/utils/users';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await db.connect();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    await Product.deleteMany();

    const sampleProducts = products.map((product) => {
      return { user: adminUser, ...product };
    });

    console.log(sampleProducts);

    await Product.insertMany(sampleProducts);
    return NextResponse.json({ message: 'seeded successfully' });
  } catch (err) {
    return new NextResponse(`${err}`, { status: 500 });
  }
}
