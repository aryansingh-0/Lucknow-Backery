'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '@/lib/cartSlice';
import CartItem from '@/Components/Cart/CartItem';
import BillSummary from '@/Components/Cart/BillSummary';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import nocart from "@/public/images/nocart.png";
import Login from '@/Components/Navbar/Login';
export default function CartsPage() {
  const [showBill, setShowBill] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCart = async () => {
      const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
      const initialized = storedItems.map((item) => {
        const weightMultiplier = parseInt(item.weight) / 500;
        return {
          ...item,
          totalPrice: item.cakePrice * item.quantity * weightMultiplier,
        };
      });
      dispatch(setCart(initialized));

    };

    fetchCart();
  }, [dispatch, session]);

  const totalSum = cartItems.reduce((acc, item) => acc + (item.totalPrice || 0), 0);
  const handleCheckout = async () => {
    if (session?.user) {
      setShowBill(true);
    } else {
      setShowLogin(true);
    }
  }
  return (
    <div className="min-h-screen mt-8 py-10 px-4">
      {/* Modular Checkout Flow */}
      {showBill && <BillSummary onClose={() => setShowBill(false)} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center relative">
          <Image src={nocart} alt="No cart image" />
          <p className="mt-4 text-gray-500 font-medium">Your cart is empty!</p>
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
              onClick={handleCheckout}
              className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
