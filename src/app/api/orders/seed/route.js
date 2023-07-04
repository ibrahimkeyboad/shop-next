import db from '@/db';
import Product from '@/models/productModel';
import User from '@/models/userModel';
import { users } from '@/utils/users';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(users);
    await Product.deleteMany();
    await Product.insertMany(data.products);
    return NextResponse.json({ message: 'seeded successfully' });
  } catch (err) {
    return new NextResponse(`${err}`, { status: 500 });
  }
}
