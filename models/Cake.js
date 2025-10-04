// models/Cake.js
import mongoose from "mongoose";

const CakeSchema = new mongoose.Schema(
  {
    cakeName: {
      type: String,
      required: [true, "Cake name is required"],
      trim: true,
      maxlength: 200,
    },
    cakePrice: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    cakeWeight: {
      type: String,
      trim: true,
      default: "500 gm",
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["Birthday", "Wedding", "Anniversary", "Custom", "Other"],
      default: "Other",
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    // Add createdAt/updatedAt if you like
    timestamps: true,
  }
);

// Prevent model overwrite upon hot-reload in development
export default mongoose.models.Cake || mongoose.model("Cake", CakeSchema);
