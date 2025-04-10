// app/api/admin/orders/route.js
import connectMongoDB from '@/lib/mongodb';
import Order from '@/models/Order';

export async function POST(req) {
  const body = await req.json();
  const { page = 1, user = '', date = '', status = '' } = body;

  const limit = 6;
  const skip = (page - 1) * limit;

  const query = {};
  if (user) query.username = { $regex: new RegExp(user, 'i') };
  if (date) query.deliveryDate = date;
  if (status) query.status = status;

  await connectMongoDB();

  const orders = await Order.find(query).skip(skip).limit(limit).sort({ createdAt: -1 });
  const total = await Order.countDocuments(query);
  const totalPages = Math.ceil(total / limit);

  return Response.json({ orders, totalPages });
}
