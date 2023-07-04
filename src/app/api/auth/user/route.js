import db from '@/db';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export async function GET(req) {
  await db.connect();

  const users = await User.find();

  return NextResponse.json(users);
}
