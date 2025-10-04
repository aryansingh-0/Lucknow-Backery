'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/cartSlice';

export default function AddToCartModal({ cake, onClose }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(500); // grams
  const weights = [500, 1000, 1500];

  const handleAddToCart = () => {
    const totalPrice = ((weight / 500) * cake.cakePrice) * quantity;

    const newItem = {
      ...cake,
      quantity,
      weight,
      totalPrice,
    };

    dispatch(addToCart(newItem));
    onClose();
  };

  const handleWeightChange = (value) => setWeight(value);

  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-2xl flex items-center justify-center z-50">
      <div className="bg-background rounded-2xl p-6 w-[90%] max-w-lg relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-2 md:top-3 md:right-4 text-4xl text-gray-500 hover:text-red-500 transition"
        >
          ×
        </button>

        <Image
          src={cake.url}
          alt={cake.cakeName}
          width={300}
          height={200}
          className="mx-auto rounded-lg object-cover"
        />

        <h2 className="text-2xl font-bold text-center mt-4">{cake.cakeName}</h2>
        <p className="text-center text-gray-500 mb-4">₹{cake.cakePrice} per 500gm</p>

        <div className="flex justify-between items-center gap-4 mb-4">
          {/* Quantity */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium mb-1">Quantity:</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-xl"
              >−</button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-xl"
              >+</button>
            </div>
          </div>

          {/* Weight */}
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium mb-1">Weight:</label>
            <div className="flex gap-2">
              {weights.map(w => (
                <button
                  key={w}
                  onClick={() => handleWeightChange(w)}
                  className={`px-3 py-1.5 rounded-full border ${
                    weight === w
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {w >= 1000 ? `${w / 1000}kg` : `${w}g`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-lg font-bold mt-2">
          Total Price: ₹{((weight / 500) * cake.cakePrice * quantity).toFixed(2)}
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}