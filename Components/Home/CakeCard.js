'use client';
import React, { useEffect, useState } from 'react';
import AddToCartModal from './AddToCartModal';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';
import { Star } from "lucide-react";

export default function CakeCard({ cake }) {

  const [selectedCake, setSelectedCake] = useState(null);
  return (
    <div onClick={() => setSelectedCake(cake)} className="w-[150px]  md:w-[200px]    md:mb-0 flex flex-col transition duration-300 ">

      {/* Image Section */}
      <div className="relative  w-full h-[150px]">
        <Image
          src={cake.url}
          alt={cake.cakeName}
          fill
          className="object-cover rounded-2xl transition-transform hover:scale-105 duration-300"
        />
      </div>

      {/* Content Section */}
      <div  className="w-full px-3 flex flex-col justify-between text-gray-800">
        <div>
          <h2 className="text-lg font-semibold tracking-wide line-clamp-1">
            {cake.cakeName}
          </h2>
          <div className='flex items-center flex-col md:flex-row justify-between w-full'>
            <p className="text-sm  w-full md:w-auto mt-1 text-gray-600">
              <p className="text-pink-600 font-bold"><span className='text-black'> Price:</span> ₹{cake.cakePrice}</p>
              <span className=' flex items-center gap-1 '>{cake.rating}<Star fill='orange' className='w-5 h-5 text-yellow-300' /></span>
            </p>
            
          </div>

        </div>


      </div>
      {selectedCake && (
        <AddToCartModal cake={selectedCake} onClose={() => setSelectedCake(null)} />
      )}
    </div>
  );
}
