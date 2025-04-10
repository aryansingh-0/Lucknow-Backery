'use client';

import { useEffect, useState } from 'react';

export default function UserDetailsForm({ onFilled }) {
  const [details, setDetails] = useState({
    username: '',
    deliveryDate: '',
    deliveryTime: '',
    messageOnCake: '',
    mobileNumber: '',
    email: '',
    deliveryAddress: '',
    townCity: '',
    state: '',
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('userDetails'));
    if (saved) setDetails(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(details));
    onFilled();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Enter Your Details</h2>

      <div>
        <label className="block text-sm mb-1">Your Name</label>
        <input
          name="username"
          placeholder="e.g. Aman Singh"
          value={details.username}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Delivery Date</label>
        <input
          type="date"
          name="deliveryDate"
          value={details.deliveryDate}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Delivery Time</label>
        <input
          type="time"
          name="deliveryTime"
          value={details.deliveryTime}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message on Cake</label>
        <input
          name="messageOnCake"
          placeholder="e.g. Happy Birthday!"
          value={details.messageOnCake}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Mobile Number</label>
        <input
          type="tel"
          name="mobileNumber"
          placeholder="e.g. 9876543210"
          value={details.mobileNumber}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="e.g. aman@example.com"
          value={details.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Delivery Address</label>
        <input
          name="deliveryAddress"
          placeholder="e.g. 123, Alambagh, Near Metro"
          value={details.deliveryAddress}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Town / City</label>
          <input
            name="townCity"
            placeholder="e.g. Lucknow"
            value={details.townCity}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">State</label>
          <input
            name="state"
            placeholder="e.g. Uttar Pradesh"
            value={details.state}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded mt-4 w-full hover:bg-blue-700 transition"
      >
        Save & Continue
      </button>
    </form>
  );
}
