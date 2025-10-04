import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    street: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    pincode: {
      type: String,
      required: true,
      match: [/^[0-9]{6}$/, "Please enter a valid 6-digit pincode"],
    },
  },
  { _id: false }
);

// 🧁 Cart Item Schema
const CartItemSchema = new mongoose.Schema(
  {
    cakeName: { type: String, required: true, trim: true },
    cakePrice: { type: Number, required: true },
    cakeWeight: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    url: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    weight: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },
    username: { type: String, required: true, trim: true, minlength: 3 },
    phone: { type: String, required: true, match: /^[0-9]{10}$/ },
    address: { type: AddressSchema, required: true },

    otp: { type: String },
    otpExpires: { type: Date },

    // 🛒 Array of cart items
    cart: { type: [CartItemSchema], default: [] },

    // 📦 Order references
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
