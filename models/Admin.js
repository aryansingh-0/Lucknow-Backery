import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, match: [/^\S+@\S+\.\S+$/, "Invalid email"] },
    username: { type: String, required: true, trim: true },
    phone: { type: String, match: /^[0-9]{10}$/ },
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
