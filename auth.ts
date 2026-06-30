import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcryptjs';
import postgres from 'postgres';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
// simple helper to fetch a user by email from Postgres
async function getUser(email: string): Promise<User | null> {
  if (!email) return null;
  try {
    const rows = await sql`select * from users where email = ${email} limit 1`;
    const row = rows[0] as any;
    if (!row) return null;
    // adapt fields as needed; assume row contains id, email, password, name
    const user: User = {
      id: row.id,
      email: row.email,
      name: row.name,
      password: row.password,
    } as unknown as User;
    return user;
  } catch (err) {
    console.error('getUser error', err);
    return null;
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== 'string' || typeof credentials.password !== 'string') {
          console.log('Invalid credentials');
          return null;
        }

        const { email, password } = credentials;
        const user = await getUser(email);
        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (passwordsMatch) return user;

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});