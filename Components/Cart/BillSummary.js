'use client';
import { useEffect, useState } from 'react';
import CheckoutButton from './CheckoutButton';
import UserDetailsForm from './UserDetailsForm ';
import QRPaymentStep from './QRPaymentStep';
import SubmitOrder from './SubmitOrder';

export default function BillSummary({ onClose }) {
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
    localStorage.removeItem('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-8 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Cake Order Bill</h1>

      {step === 'details' && <UserDetailsForm onFilled={() => setStep('options')} />}
      {step === 'options' && (
        <>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Cake Name</th>
                <th className="p-3 border">Qty</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3 border">{item.cakeName}</td>
                  <td className="p-3 border">{item.quantity}</td>
                  <td className="p-3 border">₹{item.cakePrice}</td>
                  <td className="p-3 border font-semibold">₹{item.totalPrice?.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right font-bold mb-4">Total: ₹{total.toFixed(2)}</div>

          <div className="flex justify-center gap-6">
            <button
              onClick={handleCashOnDelivery}
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
            >
              Cash on Delivery
            </button>
            <button
              onClick={() => setStep('qr')}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
            >
              Online Payment
            </button>
          </div>
        </>
      )}

      {step === 'qr' && <QRPaymentStep onNext={() => setStep('submit')} />}
      {step === 'submit' && <SubmitOrder onComplete={onClose} />}

      <button
        onClick={onClose}
        className="mt-6 self-center px-4 py-2 text-sm text-gray-500 hover:underline"
      >
        Close
      </button>
    </div>
  );
}
