 "use client"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminLayout({ children }) {
  // ✅ Make the layout async
  const session = await getServerSession(authOptions);

  // Protect admin routes
  if (!session || session.user.role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600 text-lg font-semibold">
          Access denied. Only admins can view this page.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Admin content */}
      <main className="flex-1">{children}</main>
      
    </div>
  );
}
