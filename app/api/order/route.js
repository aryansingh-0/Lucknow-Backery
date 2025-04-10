// app/api/order/route.js
import connectMongoDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(request) {
  try {
    await connectMongoDB();
    const data = await request.json();
    const newOrder = await Order.create(data);
    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return new Response(JSON.stringify({ error: 'Failed to create order' }), { status: 500 });
  }
}
