'use client';

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "@/lib/cakeSlice";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Home, User, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Login from "./Login";
import Account from './Account';
import navImage from '@/public/images/navbar.jpg'
export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();

  const cart = useSelector((state) => state.cart.cart);
  const allCakes = useSelector((state) => state.cake.allCakes);
  let numberOfItems = cart.length;

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  useEffect(() => {
    if (pathname !== "/cakes") setSearch("");
  }, [pathname]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (pathname === "/cakes") dispatch(updateSearch(value));

    if (!value.trim()) {
      setSuggestions([]);
    } else {
      const matches = allCakes.filter(cake =>
        cake.cakeName.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches.slice(0, 5));
    }
  };

  const handleSuggestionClick = (cakeName) => {
    setSearch(cakeName);
    setSuggestions([]);
    if (pathname !== "/cakes") router.push("/cakes");
    dispatch(updateSearch(cakeName));
  };

  return (
    <>
      <nav 
  style={{ backgroundImage: "url('https://res.cloudinary.com/dgp04dpun/image/upload/v1759683544/aktu%20brand/ms2ujujm1fgdfswfdofn.png')" }}
      className="backdrop-blur-md w-full bg-no-repeat bg-cover bg-center bg-red-600 shadow-lg fixed z-50 top-0 px-6 py-3 flex items-center justify-between   border-b border-white/20 rounded-b-xl md:rounded-none">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              width={40}
              height={40}
              alt="Lucknow Bakers Logo"
              className="scale-200 drop-shadow-md"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:grid grid-cols-4 items-center justify-end w-[40%] font-medium relative">
          {/* Search */}
          {pathname === "/cakes" && (
            <div className="relative w-80 justify-self-end">
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
              {suggestions.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                  {suggestions.map((cake, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 cursor-pointer hover:bg-pink-100"
                      onClick={() => handleSuggestionClick(cake.cakeName)}
                    >
                      {cake.cakeName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
            className={`flex relative flex-col items-center gap-1 text-white text-sm transition-all duration-200 ${
              pathname === "/carts" ? "font-bold" : "hover:font-bold"
            }`}
          >
            <div className="indicate text-red-600 bg-yellow-300 absolute px-1.5 -top-2 right-5 rounded-full">
              {numberOfItems > 9 ? '9+' : numberOfItems}
            </div>
            <ShoppingCart className="w-5 h-5" />
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

        {/* Mobile Menu */}
        <div className="md:hidden grid grid-cols-1 items-center justify-end w-[50%] font-medium relative">
          {/* Mobile Search */}
          {pathname === "/cakes" && (
            <div className="relative w-full">
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
              {suggestions.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                  {suggestions.map((cake, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 cursor-pointer hover:bg-pink-100"
                      onClick={() => handleSuggestionClick(cake.cakeName)}
                    >
                      {cake.cakeName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {/* Search button if not on cakes */}
          {pathname !== "/cakes" && (
            <button
              onClick={() => router.push("/cakes")}
              className="flex items-center gap-2 justify-self-end text-black bg-white px-4 py-2 rounded-full hover:bg-white/90 transition-all duration-200 text-sm font-medium shadow-sm"
            >
              <CiSearch size={18} />
              Search
            </button>
          )}
        </div>
      </nav>

      {/* Login / Account Modals */}
      {showAccount && <Account setShowAccount={setShowAccount} session={session} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </>
  );
}
