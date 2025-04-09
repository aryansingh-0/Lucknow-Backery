import crypto from 'crypto';

export async function POST(request) {
  const body = await request.json();
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, cart } = body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(sign)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // Only notify the shop after verification
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notify-shop`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    return Response.json({ success: true });
  }

  return new Response("Invalid payment signature", { status: 400 });
}
