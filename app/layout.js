
import MobileBar from "@/Components/Navbar/MobileBar";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import ReduxProvider from './provider';
import Footer from "@/Components/Footer";

export const metadata = {
  title: "Lucknow Bakers",
  description: "Where tradition meets taste – handcrafted cakes made with love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body

      >
      <ReduxProvider>
          <Navbar />
          {children}
          <Footer/>
          <MobileBar/>
          </ReduxProvider>
      </body>
    </html>
  );
}
