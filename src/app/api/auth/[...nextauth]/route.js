import db from '@/db';
import bcryptjs from 'bcryptjs';
import User from '@/models/userModel';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import validator from 'validator';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentials) {
        await db.connect();
        if (!credentials?.email || !credentials.password) {
          throw new Error('Invalid crendential.');
        }

        if (!validator.isEmail(credentials.email)) {
          throw new Error('Invalid crendential.');
        }

        const user = await User.findOne({
          email: credentials.email.trim().toLowerCase(),
        });

        if (!user) {
          throw new Error('Account not found');
        }
        const isCorrectPassword = await bcryptjs.compare(
          credentials.password,
          user.password
        );

        if (!user || !isCorrectPassword) {
          throw new Error('Invalid crendential.');
        }

        await db.disconnect();
        return user;
      },
    }),
  ],

  callbacks: {
    async signIn(params) {
      console.log('params', params);
      return true;
    },
  },

  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
