'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/lib/cartSlice'; // adjust path if different

export default function SubmitOrder({ onComplete ,setStep ,details}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const userDetails = details;

    if (cart.length === 0 || !userDetails?.name) {
      alert('Missing user details or cart data.');
      return;
    }

    const total = cart.reduce((sum, item) => sum + (item.totalPrice || 0), 0);

    const payload = {
      ...userDetails,
      product: cart.map(item => ({
        cakeName: item.cakeName,
        cakePrice: item.cakePrice,
        cakeWeight: item.cakeWeight,
        category: item.category,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
        url: item.url,
        weight: item.weight,
      })),
      totalPrice: total,
    };

    try {
      setLoading(true);

      const res = await fetch('/api/user/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setLoading(false);
      // const send = await fetch('/api/notify-shop', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ cart }),
      // });
      if (res.ok) {
        alert('🎉 Order successfully placed!');
        dispatch(clearCart()); // ✅ Clears cart in Redux and localStorage
        // localStorage.removeItem('userDetails');
        setStep('success');
        
      } else {
        const error = await res.json();
        alert(`Something went wrong: ${error.message || 'Unknown error'}`);
      }
    } catch (err) {
      setLoading(false);
      alert(`Error placing order: ${err.message}`);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="mt-8 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold text-lg shadow hover:opacity-90 transition"
      disabled={loading}
    >
      {loading ? 'Placing Order...' : 'Submit Final Order'}
    </button>
  );
}
