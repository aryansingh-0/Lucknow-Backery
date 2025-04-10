'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '@/lib/cartSlice';
import CartItem from '@/Components/Cart/CartItem';
import BillSummary from '@/Components/Cart/BillSummary';

import Image from 'next/image';
import nocart from "@/public/images/nocart.png"
export default function CartsPage() {
  const [showBill, setShowBill] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
   
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const initialized = storedItems.map((item) => {
      const weightMultiplier = parseInt(item.weight) / 500;
      return {
        ...item,
        totalPrice: item.cakePrice * item.quantity * weightMultiplier,
      };
    });
    dispatch(setCart(initialized));
  }, [dispatch]);

  const totalSum = cartItems.reduce((acc, item) => acc + (item.totalPrice || 0), 0);

  return (
    <div className="min-h-screen mt-8 py-10 px-4">
      {/* Show the modular checkout flow */}
      {showBill && <BillSummary onClose={() => setShowBill(false)} />}

      {cartItems.length === 0 ? (
        <div className=" flex relative items-center justify-center  flex-col ">  
        <Image className='' src={nocart} alt='no cart image' />
          </div>
      
      ) : (
        <div className="max-w-5xl mx-auto pt-8 space-y-6">
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              index={index}
              cartItems={cartItems}
            />
          ))}

          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">Grand Total: ₹{totalSum.toFixed(2)}</h2>
            <button
              onClick={() => setShowBill(true)}
              className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
