'use client';
import React from 'react';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';

export default function CakeCard({ cake, onAddToCart }) {
  return (
    <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
      <div className="relative w-full h-60">
        <Image
          src={cake.url}
          alt={cake.cakeName}
          fill
          className="object-cover transition-transform hover:scale-110 duration-300"
        />
      </div>

      <div className="p-4 text-[#4B2E2B]">
        <h2 className="text-xl font-bold mb-1">{cake.cakeName}</h2>
        <p className="text-lg mb-2">
          Price: <span className="text-2xl font-bold">₹{cake.cakePrice}</span>
        </p>
        <button
          onClick={() => onAddToCart(cake)}
          className="mt-2 cursor-pointer bg-highlight text-white font-semibold px-4 py-2 rounded flex items-center gap-2 transition"
        >
          <FaCartPlus className="text-lg" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
