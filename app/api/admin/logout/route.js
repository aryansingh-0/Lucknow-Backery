import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('admin-token');
  return Response.json({ success: true });
}
