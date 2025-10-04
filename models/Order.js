// models/Order.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  cakeName: { type: String, required: true },
  cakePrice: { type: Number, required: true },
  cakeWeight: { type: String },
  category: { type: String },
  quantity: { type: Number, default: 1 },
  totalPrice: { type: Number, required: true },
  url: { type: String },
  weight: { type: Number },
});

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    deliveryDate: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    messageOnCake: { type: String },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    townCity: { type: String, required: true },
    state: { type: String, required: true },
    products: [ProductSchema],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
