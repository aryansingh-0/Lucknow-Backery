import Razorpay from 'razorpay';

export async function POST(request) {
  const body = await request.json();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const options = {
    amount: body.amount * 100, // convert ₹ to paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return Response.json(order);
  } catch (err) {
    console.error("Order creation failed:", err);
    return new Response("Order creation failed", { status: 500 });
  }
}
