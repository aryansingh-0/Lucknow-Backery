// app/api/user/order/route.js
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    await connectDB();

    // 🔒 Check Authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(
        JSON.stringify({ success: false, message: "Unauthorized" }),
        { status: 401 }
      );
    }

    // 👤 Find the User
    const userEmail = session.user.email;
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    // 🧾 Extract order details from body
    const body = await req.json();
    const {
      name,
      deliveryDate,
      deliveryTime,
      messageOnCake,
      mobileNumber,
      email,
      deliveryAddress,
      townCity,
      state,
      product, // 👈 frontend sends this as `product`
      totalPrice,
    } = body;

    if (!product || product.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No products found" }),
        { status: 400 }
      );
    }

    // 🛍️ Create new Order
    const newOrder = new Order({
      user: user._id,
      deliveryDate,
      deliveryTime: deliveryTime || "Not specified",
      messageOnCake,
      mobileNumber,
      email: user.email,
      deliveryAddress,
      townCity,
      state,
      products: product, // ✅ match your schema field
      totalPrice,
      status: "pending",
    });

    const savedOrder = await newOrder.save();

    // 🔗 Link order to user
    user.orders.push(savedOrder._id);
    await user.save();

    return new Response(
      JSON.stringify({ success: true, order: savedOrder }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Order Creation Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: err.message || "Internal Server Error",
      }),
      { status: 500 }
    );
  }
}
