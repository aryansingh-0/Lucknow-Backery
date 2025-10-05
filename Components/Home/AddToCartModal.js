'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/cartSlice';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddToCartModal({ cake, onClose }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(500);
  const weights = [500, 1000, 1500];

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAddToCart = () => {
    toast.success(`${cake.cakeName} added to cart`);
    const totalPrice = ((weight / 500) * cake.cakePrice) * quantity;
    const newItem = { ...cake, quantity, weight, totalPrice };
    dispatch(addToCart(newItem));
    onClose();
  };

  const handleWeightChange = (value) => setWeight(value);

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xl flex justify-center md:items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="relative md:bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 md:rounded-3xl p-[2px] w-full md:w-[70vw]     shadow-2xl h-[100vh] md:h-auto flex flex-col justify-center"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="bg-white md:rounded-3xl p-6 relative flex flex-col md:flex-row md:items-center  w-full h-full">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-3xl bg-red-700 rounded-2xl text-white p-1 z-50 hover:text-red-600 transition"
            >
              <X />
            </button>

            {/* Cake Image */}
            <div className="relative rounded-2xl bg-red-100 overflow-hidden w-full md:w-1/2 h-[40vh] md:h-[300px] flex-shrink-0">
              <Image
                src={cake.url}
                alt={cake.cakeName}
                width={320}
                height={200}
                className="w-full h-full rounded-2xl object-contain shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/40 to-transparent rounded-2xl"></div>
            </div>

            {/* Right Content */}
            <div className=" md:pl-6 mt-4 md:mt-0 flex flex-col md:justify-between md:h-[300px] ">
               <h2 className="text-2xl font-extrabold text-center md:text-left text-red-700">
                  {cake.cakeName}
                </h2>


                {/* Quantity & Weight */}
                <div className="flex flex-row justify-between gap-6 mb-2 flex-wrap">
                  {/* Quantity */}
                  <div className="flex flex-col items-start">
                    <label className="text-sm font-semibold text-gray-600 mb-1">Quantity</label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg font-semibold text-gray-700">{quantity}</span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Weight */}
                  <div className="flex flex-col items-start">
                    <label className="text-sm font-semibold text-gray-600 mb-1">Weight</label>
                    <div className="flex gap-2 flex-wrap">
                      {weights.map((w) => (
                        <button
                          key={w}
                          onClick={() => handleWeightChange(w)}
                          className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${weight === w
                            ? 'bg-red-600 text-white border-red-600 shadow-md'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-yellow-100'
                            }`}
                        >
                          {w >= 1000 ? `${w / 1000}kg` : `${w}g`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Total */}

                <div className='flex items-center justify-between gap-1 '>
                  <div className="text-center md:text-left text-lg font-bold text-gray-800 ">
                    Total Price:{' '}
                    <span className="text-red-600">
                      ₹{((weight / 500) * cake.cakePrice * quantity).toFixed(2)}
                    </span>

                  </div>
                  <p className="text-center md:text-left text-gray-500  text-sm font-medium">
                    ₹{cake.cakePrice} per 500gm
                  </p>
                </div>
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="mt-2 w-full md:w-auto bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 group text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-transform duration-200 transform hover:scale-[1.02]"
              >
                <ShoppingCart className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Add to Cart
              </button>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
