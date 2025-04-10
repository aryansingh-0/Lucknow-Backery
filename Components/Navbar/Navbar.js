'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { updateSearch } from '@/lib/cakeSlice';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import { IoCloseSharp } from 'react-icons/io5';
import LogoutButton from '../Admin/Logout';

export default function Navbar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname !== '/cakes') {
      setSearch('');
    }
  }, [pathname]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (pathname === '/cakes') {
      dispatch(updateSearch(value));
    }
  };

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-lg fixed z-50 top-0 px-6 py-4 flex items-center justify-between w-full border-b border-white/20">
      {/* Brand */}
      <div className="text-2xl font-bold text-pink-700 drop-shadow-sm tracking-wide">
        <Link href="/">
          <Image src={Logo} width={60} height={60} alt="Lucknow Bakers Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 flex-1 justify-center text-gray-800 font-medium">
        <Link href="/" className="hover:text-pink-600 transition">Home</Link>
        <Link href="/carts" className="hover:text-pink-600 transition">Cart</Link>

        {pathname === '/cakes' ? (
          <form className="relative w-80" onSubmit={(e) => e.preventDefault()}>
            <input
              value={search}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search cakes..."
              className="w-full bg-white/60 border border-white/20 rounded-full px-4 py-2 pl-10 text-sm shadow-inner text-gray-700 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-600 text-sm">
              <CiSearch />
            </span>
          </form>
        ) : (
          <button
            onClick={() => router.push('/cakes')}
            className="text-pink-600 p-2 rounded-full hover:bg-white/40 transition"
            title="Search Cakes"
          >
            <CiSearch size={22} />
          </button>
        )}

        <Link href="/contactus" className="hover:text-pink-600 transition">Contact Us</Link>
        <Link href="/privacy-policy" className="hover:text-pink-600 transition">Privacy Policy</Link>
        <Link href="/shipping-delivery" className="hover:text-pink-600 transition">Shipping</Link>
        <Link href="/terms-conditions" className="hover:text-pink-600 transition">Terms</Link>
        <Link href="/cancellation-refund" className="hover:text-pink-600 transition">Refunds</Link>
        <Link href="/about" className="hover:text-pink-600 transition">About</Link>

        {
          pathname === '/admin/order' && (<LogoutButton/>)
        }
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-3">
        {pathname === '/carts' && (
          <p className="text-base font-semibold text-pink-700">Your Cart</p>
        )}

        {pathname === '/cakes' ? (
          <form className="relative w-48" onSubmit={(e) => e.preventDefault()}>
            <input
              value={search}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search..."
              className="w-full bg-white/60 border border-white/20 rounded-full px-4 py-2 pl-10 text-sm shadow-inner text-gray-700 backdrop-blur-sm"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-600 text-sm">
              <CiSearch />
            </span>
          </form>
        ) : (
          <button
            onClick={() => router.push('/cakes')}
            className="text-pink-600 p-2 rounded-full hover:bg-white/40 transition"
            title="Search Cakes"
          >
            <CiSearch size={20} />
          </button>
        )}

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-pink-700"
        >
          {isMobileMenuOpen ? <IoCloseSharp size={24} /> : <Menu size={24} />}
        </button>
      </div>

 
     {/* Mobile Dropdown */}
{isMobileMenuOpen && (
  <div className="absolute top-full left-0 w-full backdrop-blur-md bg-white shadow-lg border-t border-white/20 p-4 flex flex-col gap-3 text-gray-800 font-medium md:hidden z-50">
    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
    <Link href="/carts" onClick={() => setIsMobileMenuOpen(false)}>Cart</Link>
    <Link href="/contactus" onClick={() => setIsMobileMenuMenuOpen(false)}>Contact Us</Link>
    <Link href="/privacy-policy" onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link>
    <Link href="/shipping-delivery" onClick={() => setIsMobileMenuOpen(false)}>Shipping</Link>
    <Link href="/terms-conditions" onClick={() => setIsMobileMenuOpen(false)}>Terms</Link>
    <Link href="/cancellation-refund" onClick={() => setIsMobileMenuOpen(false)}>Refunds</Link>
    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

    {/* 👇 Add this conditionally for /admin/order route */}
    {pathname === '/admin/order' && (
      <div onClick={() => setIsMobileMenuOpen(false)}>
        <LogoutButton />
      </div>
    )}
  </div>
)}

    </nav>
  );
}
