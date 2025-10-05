'use client';
import React, { useEffect, useState } from 'react';
import CakeCard from './CakeCard';
import Link from 'next/link';

export default function Cake({cakes}) {

    const [selectedCategory, setSelectedCategory] = useState('All');
   
    const categories = ['All', ...new Set(cakes.map(cake => cake.category))];

    const filteredCakes =
        selectedCategory === 'All'
            ? cakes
            : cakes.filter(cake => cake.category === selectedCategory);

 
    return (
        <div   className="w-full min-h-screen py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#4B2E2B]">
                Our Delicious Cakes
            </h1>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                {categories.map((category, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 cursor-pointer py-2 rounded-full text-sm font-semibold flex items-center gap-1 transition duration-200 ${selectedCategory === category
                            ? 'bg-[#4B2E2B] text-white'
                            : 'bg-white text-[#4B2E2B] border border-[#4B2E2B]'
                            }`}
                    >

                        {category}
                    </button>
                ))}
            </div>

            {/* Cake Cards */}
            <div className="flex gap-3 md:gap-8 max-w-7xl mx-auto overflow-x-auto scroll-smooth py-4">
  {filteredCakes.slice(0, 16).map((cake) => (
    <div key={cake._id} className="flex-shrink-0">
      <CakeCard cake={cake} />
    </div>
  ))}
</div>


            <div className="viewmore flex items-center justify-center mt-8">
                <Link href={"/cakes"}>
                    <button
                        className="bg-link cursor-pointer  text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
                    >
                        View More Products
                    </button></Link>
            </div>


        </div>
    );
}
