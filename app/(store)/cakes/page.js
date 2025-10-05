'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCakes, updateCategory } from '@/lib/cakeSlice';
import cakeData from '@/public/JsonData/cake.json';
import CakeCard from '@/Components/Home/CakeCard';
import AddToCartModal from '@/Components/Home/AddToCartModal';

export default function CakesPage() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCake, setSelectedCake] = useState(null);

  const filteredCakes = useSelector((state) => state.cake?.filteredCakes || []);

  const categories = ['All', ...new Set(cakeData.map(cake => cake.category))];

  const handleAddToCartClick = (cake) => {
    setSelectedCake(cake);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);        // update selected category for UI
    dispatch(updateCategory(category));   // filter cakes in Redux
  };

  useEffect(() => {
    dispatch(setCakes(cakeData));
  }, [dispatch]);

  return (
    <div className="pt-24 px-4">
      {/* Category Buttons */}
      <div className="flex sticky top-20 z-20 flex-wrap gap-3 justify-center mb-8">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 cursor-pointer py-2 rounded-full text-sm font-semibold flex items-center gap-1 transition duration-200 ${
              selectedCategory === category
                ? 'bg-[#4B2E2B] text-white'
                : 'bg-white text-[#4B2E2B] border border-[#4B2E2B]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cake Cards */}
      <div className="flex flex-wrap justify-evenly items-center gap-3 md:gap-8 max-w-7xl mx-auto">
        {filteredCakes.map((cake, index) => (
          <CakeCard key={index} cake={cake} onAddToCart={handleAddToCartClick} />
        ))}
      </div>

      {/* Add to Cart Modal */}
      {selectedCake && (
        <AddToCartModal cake={selectedCake} onClose={() => setSelectedCake(null)} />
      )}
    </div>
  );
}
