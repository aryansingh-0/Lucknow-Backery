// app/api/user/auth/signup/route.js
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/User";
import nodemailer from "nodemailer";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req) {
  await connectMongoDB();
  const { email, name } = await req.json();

  if (!email || !name) {
    return new Response(JSON.stringify({ success: false, message: "Email and name are required" }), { status: 400 });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ success: false, message: "User already exists. Please login." }), { status: 400 });
  }

  // Create new user
  const user = new User({
    email,
    name,
    username: email.split("@")[0],
    phone: "0000000000",
    address: {
      street: "N/A",
      city: "N/A",
      state: "N/A",
      pincode: "000000",
    },
  });

  // Generate OTP
  const otp = generateOTP();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

  user.otp = otp;
  user.otpExpires = otpExpires;
  await user.save();

  // Send OTP email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Lucknow Bakers" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your OTP for Signup",
    html: `<p>Welcome! Your OTP is <b>${otp}</b>. Expires in 5 minutes.</p>`,
  });

  return new Response(
    JSON.stringify({ success: true, message: "OTP sent for signup" }),
    { status: 200 }
  );
}
