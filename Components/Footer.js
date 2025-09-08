'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-highlight text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Lucknow Bakers</h2>
          <p className="text-sm mb-2">
            Freshly baked happiness from the heart of Lucknow 🍰
          </p>
          <div className="flex flex-col gap-2 text-sm mt-4">
            <span className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} /> hello@lucknowbakers.com
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/cakes" className="hover:underline">Cakes</Link></li>
            <li><Link href="/carts" className="hover:underline">Cart</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contactus" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/cancellation-refund" className="hover:underline">Cancellation & Refund</Link></li>
            <li><Link href="/shipping-delivery" className="hover:underline">Shipping & Delivery</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200"
            >
              <Instagram />
            </a>
          </div>
          <p className="text-sm mt-4">Stay sweet with our latest updates!</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-10 border-t border-white/20 pt-6 px-4">
        &copy; {new Date().getFullYear()} Lucknow Bakers. All rights reserved.
      </div>
    </footer>
  );
}
