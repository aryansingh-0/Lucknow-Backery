import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/User";
import Admin from "@/models/Admin";

export const authOptions = {
  providers: [
    // Customer login (OTP)
    CredentialsProvider({
      id: "user-otp",
      name: "Customer OTP",
      credentials: { email: { label: "Email" }, otp: { label: "OTP" } },
      async authorize(credentials) {
        await connectMongoDB();
        const { email, otp } = credentials;
        const user = await User.findOne({ email });
        if (!user || user.otp !== otp || new Date() > user.otpExpires)
          throw new Error("Invalid or expired OTP");

        user.otp = null;
        user.otpExpires = null;
        await user.save();

        return { id: user._id.toString(), name: user.name, email: user.email, role: "customer" };
      },
    }),

    // Admin login (email OTP)
    CredentialsProvider({
      id: "admin-otp",
      name: "Admin OTP",
      credentials: { email: { label: "Email" }, otp: { label: "OTP" } },
      async authorize(credentials) {
        await connectMongoDB();
        const { email, otp } = credentials;
        const admin = await Admin.findOne({ email });
        if (!admin || admin.otp !== otp || new Date() > admin.otpExpires)
          throw new Error("Invalid or expired OTP");

        admin.otp = null;
        admin.otpExpires = null;
        await admin.save();

        return { id: admin._id.toString(), name: admin.name, email: admin.email, role: "admin" };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.role = token.role;
      return session;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
