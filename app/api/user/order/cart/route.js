import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// ✅ Add / Replace Cart Items (if same item exists, merge quantity)
export async function POST(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { cart } = await req.json();
    if (!Array.isArray(cart)) {
      return Response.json({ success: false, message: "Invalid cart format" }, { status: 400 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // ✅ Merge or add new cart items by cakeName
    for (const newItem of cart) {
      const existingItem = user.cart.find(
        (item) => item.cakeName === newItem.cakeName && item.weight === newItem.weight
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice = existingItem.cakePrice * existingItem.quantity;
      } else {
        user.cart.push({
          ...newItem,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.cakePrice * (newItem.quantity || 1),
        });
      }
    }

    await user.save();
    return Response.json(
      { success: true, message: "Cart updated successfully", cart: user.cart },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding to cart:", error);
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

// ✅ Get Cart
export async function GET() {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    return Response.json({ success: true, cart: user.cart }, { status: 200 });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

// ✅ Update Quantity
export async function PUT(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { cakeName, weight, quantity } = await req.json();
    if (!cakeName || !weight || quantity < 1) {
      return Response.json({ success: false, message: "Invalid data" }, { status: 400 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    const item = user.cart.find((item) => item.cakeName === cakeName && item.weight === weight);
    if (!item) {
      return Response.json({ success: false, message: "Item not found" }, { status: 404 });
    }

    item.quantity = quantity;
    item.totalPrice = item.cakePrice * quantity;

    await user.save();
    return Response.json(
      { success: true, message: "Cart item updated", cart: user.cart },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating cart:", error);
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}

// ✅ Delete Cart Item
export async function DELETE(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { cakeName, weight } = await req.json();
    if (!cakeName || !weight) {
      return Response.json({ success: false, message: "Invalid request" }, { status: 400 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return Response.json({ success: false, message: "User not found" }, { status: 404 });
    }

    user.cart = user.cart.filter(
      (item) => !(item.cakeName === cakeName && item.weight === weight)
    );

    await user.save();
    return Response.json(
      { success: true, message: "Item removed successfully", cart: user.cart },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting from cart:", error);
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}
