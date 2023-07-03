import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, name, password } = req.body;
  const userExist = await User.findOne({ email });
  // console.log(email, name, password);
  if (userExist) {
    // console.log(userExist);
    return new NextResponse('User already exist', { status: 400 });
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  // console.log(user);

  return NextResponse.json('done');
}
