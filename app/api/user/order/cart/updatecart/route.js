// /api/user/order/cart/updatecart/route.js
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new Response(
        JSON.stringify({ success: false, message: "User not authenticated" }),
        { status: 401 }
      );
    }

    const { cart } = await req.json();
    if (!cart || !Array.isArray(cart)) {
      return new Response(
        JSON.stringify({ success: false, message: "Cart array is required" }),
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    // Replace user's cart completely
    user.cart = cart.map(item => ({
      ...item,
      totalPrice: item.cakePrice * item.quantity * (item.weight / 500),
    }));

    await user.save();

    return new Response(
      JSON.stringify({ success: true, cart: user.cart }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Update cart error:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500 }
    );
  }
}
