import { signToken } from '@/utils/jwt';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, password } = await request.json();
  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (email === validEmail && password === validPassword) {
    const token = signToken({ email });
    cookies().set('admin-token', token, { httpOnly: true, maxAge: 60 * 60 * 24 });
    return Response.json({ success: true });
  }

  return Response.json({ error: 'Invalid credentials' }, { status: 401 });
}
