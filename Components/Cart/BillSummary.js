'use client';
import { useEffect, useState } from 'react';

import UserDetailsForm from './UserDetailsForm ';
import QRPaymentStep from './QRPaymentStep';
import SubmitOrder from './SubmitOrder';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/lib/cartSlice'; // adjust path if different
import { X, CheckCircle2, Phone, User, MessageSquare } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from 'next-auth/react';
export default function BillSummary({ onClose }) {
  const { data: session } = useSession();
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState('details');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.totalPrice || 0), 0);

  const handleCashOnDelivery = async () => {
    const res = await fetch('/api/notify-shop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    });
    const data = await res.json();
    alert('Cash on Delivery order placed!\nShop notified via WhatsApp.');
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-8 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Cake Order Bill</h1>

      {step === 'details' && <UserDetailsForm onClose={onClose} session={session} setStep={setStep} onFilled={() => setStep('options')} />}
      {step === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center text-center mt-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
            >
              <CheckCircle2 className="text-green-500 w-24 h-24 mb-4" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold mb-2"
            >
              Order Placed Successfully!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-6"
            >
              Thank you for ordering with <span className="font-medium">Lucknow Bakers</span> 🎂
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Done
            </motion.button>
          </motion.div>
        )}
<AnimatePresence/>
   
      <button
  onClick={onClose}
  className="absolute rounded-full p-3 top-3 hover:text-2xl right-3 text-red-800 bg-red-100 hover:text-red-500 transition-colors duration-200"
  aria-label="Close"
>
  <X/>
</button>

    </div>
  );
}
