import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(req) {
  const { orderId, status } = await req.json();

  if (!orderId || !status) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  try {
    await connectMongoDB();
    await Order.findByIdAndUpdate(orderId, { status });
    return NextResponse.json({ message: 'Status updated' });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
