import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import ReduxProvider from "./provider";
import Footer from "@/Components/Footer";
import MobileBar from "@/Components/Navbar/MobileBar";
import { ToastContainer } from "react-toastify";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SessionProviderWrapper from "./SessionProviderWrapper"; // import wrapper

import { AuthProvider } from "@/lib/auth";
export const metadata = {
  title: "Lucknow Bakers",
  description: "Where tradition meets taste – handcrafted cakes made with love.",
};

export default async function RootLayout({ children }) {
  // fetch session server-side
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head></head>
      <body>

        <ReduxProvider>
          <AuthProvider>
          <SessionProviderWrapper session={session}>
            <Navbar /> {/* client component can now use useSession */}
            <ToastContainer />
            {children}
            <Footer />
            <MobileBar />
          </SessionProviderWrapper>
        </AuthProvider>
         </ReduxProvider>


      </body>
    </html>
  );
}
