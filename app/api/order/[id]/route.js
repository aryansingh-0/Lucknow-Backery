import connectMongoDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function PATCH(req, { params }) {
  const { id } = params;
  const { status } = await req.json();

  await connectMongoDB();
  const updated = await Order.findByIdAndUpdate(id, { status }, { new: true });

  if (!updated) {
    return Response.json({ message: 'Order not found' }, { status: 404 });
  }

  return Response.json({ message: `Order ${status}` });
}
