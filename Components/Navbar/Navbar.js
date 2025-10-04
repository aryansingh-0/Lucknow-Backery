"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { updateSearch } from "@/lib/cakeSlice";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Home, Truck, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Login from "./Login";
import Account from './Account'
export default function Navbar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [search, setSearch] = useState("");

  // Login / Account modal states
  const [showLogin, setShowLogin] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (pathname !== "/cakes") setSearch("");
  }, [pathname]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (pathname === "/cakes") dispatch(updateSearch(value));
  };

  const handleSendOtp = async () => {
    try {
      const res = await fetch("/api/user/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStep(2);
        setMessage("OTP sent to your email!");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const result = await signIn("user-otp", {
        redirect: false,
        email,
        otp,
      });
      if (result?.error) {
        setMessage(result.error);
      } else {
        setMessage("Login successful!");
        setShowLogin(false);
        setStep(1);
        setEmail("");
        setOtp("");
      }
    } catch (err) {
      setMessage("Failed to verify OTP");
    }
  };

  return (
    <>
      <nav className="backdrop-blur-md   bg-red-600 shadow-lg fixed z-50 top-0 px-6 py-3 flex items-center justify-between w-full border-b border-white/20">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="Lucknow Bakers Logo"
              className="scale-200 drop-shadow-md"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:grid grid-cols-4 items-center justify-end w-[40%] font-medium">
          {/* Search */}
          {pathname === "/cakes" ? (
            <form className="relative w-80 justify-self-end" onSubmit={(e) => e.preventDefault()}>
              <input
                value={search}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search cakes..."
                className="w-full bg-white/70 border border-white/20 rounded-full px-4 py-2 pl-10 text-sm shadow-inner text-gray-700 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-600 text-base">
                <CiSearch />
              </span>
            </form>
          ) : (
            <button
              onClick={() => router.push("/cakes")}
              className="flex items-center gap-2 justify-self-end text-black bg-white px-4 py-2 rounded-full hover:bg-white/90 transition-all duration-200 text-sm font-medium shadow-sm"
            >
              <CiSearch size={18} />
              Search
            </button>
          )}

          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 text-white text-sm transition-all duration-200 ${
              pathname === "/" ? "font-bold" : "hover:font-bold"
            }`}
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          {/* Cart */}
          <Link
            href="/carts"
            className={`flex flex-col items-center gap-1 text-white text-sm transition-all duration-200 ${
              pathname === "/carts" ? "font-bold" : "hover:font-bold"
            }`}
          >
            <Truck className="w-5 h-5" />
            Cart
          </Link>

          {/* Login / Account */}
          {!session ? (
            <button
              onClick={() => setShowLogin(true)}
              className="flex cursor-pointer flex-col items-center gap-1 text-white text-sm hover:font-bold transition-all duration-200"
            >
              <User className="w-5 h-5" />
              Login
            </button>
          ) : (
            <button
              onClick={() => setShowAccount(true)}
              className="flex flex-col items-center gap-1 text-white text-sm hover:font-bold transition-all duration-200"
            >
              <User className="w-5 h-5" />
              Account
            </button>
          )}
        </div>
      </nav>
  {(showAccount) && (
    <Account setShowAccount={setShowAccount}  session={session}/>
        )}
      {/* Login / Account Modal */}
      {(showLogin) && (
        <Login 
          
          setShowLogin={setShowLogin}
          
        />
      )}
    </>
  );
}
