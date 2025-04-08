'use client';

import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCakes } from '@/lib/cakeSlice';
import cakeData from '@/public/JsonData/cake.json';
import CakeCard from '@/Components/Home/CakeCard';
import AddToCartModal from '@/Components/Home/AddToCartModal';


export default function CakesPage() {
  const dispatch = useDispatch();
const [selectedCake, setSelectedCake] = useState(null);
  // Optional chaining to avoid crash if `cake` isn't ready
  const filteredCakes = useSelector((state) => state.cake?.filteredCakes || []);
  const handleAddToCartClick = (cake) => {
    setSelectedCake(cake);
};
  useEffect(() => {
    dispatch(setCakes(cakeData));
  }, [dispatch]);

  return (
    <div className="pt-24 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredCakes.map((cake, index) => (
           <CakeCard key={index} cake={cake} onAddToCart={handleAddToCartClick} />
        ))}
      </div>
       {selectedCake && (
                      <AddToCartModal cake={selectedCake} onClose={() => setSelectedCake(null)} />
                  )}
    </div>
  );
}
