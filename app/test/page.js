'use client';

import { useEffect, useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    username: '',
    deliveryDate: '',
    deliveryTime: '',
    messageOnCake: '',
    mobileNumber: '',
    email: '',
    deliveryAddress: '',
    townCity: '',
    state: '',
    product: [],
    totalPrice: 0,
  });

  // Load products from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      const total = parsedCart.reduce((acc, item) => acc + item.totalPrice, 0);
      setFormData((prev) => ({
        ...prev,
        product: parsedCart.map(item => ({
          name: item.cakeName,
          quantity: item.quantity,
          price: item.cakePrice,
          weight: item.cakeWeight,
          image: item.url,
          category: item.category,
        })),
        totalPrice: total,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Order submitted!');
      console.log(data);
      setFormData("");
      localStorage.removeItem('cart');  
      
    } else {
      alert('Error submitting order');
      console.error(data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16 space-y-4 p-4 max-w-md mx-auto">
      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="date"
        name="deliveryDate"
        value={formData.deliveryDate}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="time"
        name="deliveryTime"
        value={formData.deliveryTime}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="messageOnCake"
        placeholder="Message on Cake"
        value={formData.messageOnCake}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="tel"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="deliveryAddress"
        placeholder="Delivery Address"
        value={formData.deliveryAddress}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="townCity"
        placeholder="Town/City"
        value={formData.townCity}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <div className="border p-2 rounded">
        <h3 className="font-semibold mb-2">Products</h3>
        {formData.product.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          formData.product.map((item, index) => (
            <div key={index} className="mb-2">
              <p>🍰 {item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
              <hr className="my-2" />
            </div>
          ))
        )}
        <p className="font-bold">Total: ₹{formData.totalPrice}</p>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Place Order
      </button>
    </form>
  );
}
