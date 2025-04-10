'use client';
import { useState } from 'react';

export default function OrderModal({ reloadOrders, order }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(order.status || 'pending');

  const updateStatus = async (newStatus) => {
    const res = await fetch('/api/order/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: order._id, status: newStatus }),
    });

    if (res.ok) {
      setStatus(newStatus);
      alert(`Order ${newStatus}`);
      setOpen(false);
      reloadOrders(); // ✅ Trigger refresh after closing
    } else {
      alert('Failed to update order status');
    }
  };

  const closeModal = () => {
    setOpen(false);
    reloadOrders(); // ✅ Even on close without update
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-3 text-sm text-blue-600 underline"
      >
        View Details
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow max-w-md w-full relative">
            <button className="absolute top-2 right-3 text-gray-500" onClick={closeModal}>✕</button>
            <h2 className="text-xl font-semibold mb-2">Order Details</h2>
            <p><strong>Username:</strong> {order.username}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Phone:</strong> {order.mobileNumber}</p>
            <p><strong>Delivery:</strong> {order.deliveryDate} @ {order.deliveryTime}</p>
            <p><strong>Address:</strong> {order.deliveryAddress}, {order.townCity}, {order.state}</p>
            <p><strong>Message on Cake:</strong> {order.messageOnCake}</p>
            <p><strong>Total:</strong> ₹{order.totalPrice}</p>
            <div className="mt-4">
              {order.product.map((p, i) => (
                <div key={i}>
                  🍰 {p.cakeName} - {p.quantity} × ₹{p.cakePrice}
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button onClick={() => updateStatus('accepted')} className="bg-green-600 text-white px-4 py-1 rounded">Accept</button>
              <button onClick={() => updateStatus('declined')} className="bg-red-500 text-white px-4 py-1 rounded">Decline</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
