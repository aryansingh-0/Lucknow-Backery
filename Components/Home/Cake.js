'use client';
import React, { useState } from 'react';
import CakeData from '@/public/JsonData/cake.json';
import AddToCartModal from './AddToCartModal';
import CakeCard from './CakeCard';
 
export default function Cake() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCake, setSelectedCake] = useState(null);

    const categories = ['All', ...new Set(CakeData.map(cake => cake.category))];

    const filteredCakes =
        selectedCategory === 'All'
            ? CakeData
            : CakeData.filter(cake => cake.category === selectedCategory);

    const handleAddToCartClick = (cake) => {
        setSelectedCake(cake);
    };

    return (
        <div className="w-full min-h-screen py-10 px-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {filteredCakes.slice(0, 8).map((cake, index) => (
                    <CakeCard key={index} cake={cake} onAddToCart={handleAddToCartClick} />
                ))}
            </div>

            <div className="viewmore flex items-center justify-center mt-8">
                <button
                    className="bg-link cursor-pointer  text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
                >
                    View More Products
                </button>
            </div>

            {selectedCake && (
                <AddToCartModal cake={selectedCake} onClose={() => setSelectedCake(null)} />
            )}
        </div>
    );
}
