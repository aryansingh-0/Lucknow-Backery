import connectMongoDB from "@/lib/mongodb";
import User from "@/models/User";
import nodemailer from "nodemailer";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req) {
  await connectMongoDB();
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ success: false, message: "Email is required" }), { status: 400 });
  }

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ success: false, message: "User not found. Please signup." }), { status: 404 });
  }

  // Generate OTP
  const otp = generateOTP();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

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
    subject: `${otp}Your OTP for Login`,
    html: `<p>Your OTP is <b>${otp}</b>. Expires in 5 minutes.</p>`,
  });

  return new Response(
    JSON.stringify({ success: true, message: "OTP sent" }),
    { status: 200 }
  );
}
