// models/Order.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  cakeName: String,
  cakePrice: Number,
  cakeWeight: String,
  category: String,
  quantity: Number,
  totalPrice: Number,
  url: String,
  weight: Number,
});

const OrderSchema = new mongoose.Schema({
  username: String,
  deliveryDate: String,
  deliveryTime: String,
  messageOnCake: String,
  mobileNumber: String,
  email: String,
  deliveryAddress: String,
  townCity: String,
  state: String,
  product: [ProductSchema],
  totalPrice: Number,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined'],
    default: 'pending',
  },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
