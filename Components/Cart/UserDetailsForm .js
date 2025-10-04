'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Phone, User, MessageSquare } from 'lucide-react';

import SubmitOrder from './SubmitOrder';
export default function UserDetailsForm({ setStep,onFilled, onClose}) {
  const [details, setDetails] = useState({
    name: '',
    deliveryDate: '',
    messageOnCake: '',
    mobileNumber: '',
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
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl rounded-2xl p-8 max-w-2xl mx-auto my-10"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        🎂 Delivery Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          label="Your Name"
          name="name"
          placeholder="Aman Singh"
          value={details.name}
          onChange={handleChange}
          icon={<User className="w-4 h-4 text-gray-500" />}
          required
        />

        <InputField
          label="Mobile Number"
          type="tel"
          name="mobileNumber"
          placeholder="9876543210"
          value={details.mobileNumber}
          onChange={handleChange}
          icon={<Phone className="w-4 h-4 text-gray-500" />}
          required
        />

        <InputField
          label="Delivery Date"
          type="date"
          name="deliveryDate"
          value={details.deliveryDate}
          onChange={handleChange}
          icon={<Calendar className="w-4 h-4 text-gray-500" />}
          required
        />
 <InputField
          label="Message on Cake"
          name="messageOnCake"
          placeholder="Happy Birthday, Ananya!"
          value={details.messageOnCake}
          onChange={handleChange}
          icon={<MessageSquare className="w-4 h-4 text-gray-500" />}
        />

        <InputField
          label="Town / City"
          name="townCity"
          placeholder="Lucknow"
          value={details.townCity}
          onChange={handleChange}
          icon={<MapPin className="w-4 h-4 text-gray-500" />}
          required
        />

        <InputField
          label="State"
          name="state"
          placeholder="Uttar Pradesh"
          value={details.state}
          onChange={handleChange}
          icon={<MapPin className="w-4 h-4 text-gray-500" />}
          required
        />
      </div>

      <div className="mt-6 space-y-4">
        <InputField
          label="Delivery Address"
          name="deliveryAddress"
          placeholder="123, Alambagh, Near Metro Station"
          value={details.deliveryAddress}
          onChange={handleChange}
          icon={<MapPin className="w-4 h-4 text-gray-500" />}
          required
        />
              </div>

      <SubmitOrder setStep={setStep} details={details} onComplete={onClose} />
    </motion.form>
  );
}

/* ------------------ InputField Component ------------------ */
function InputField({ label, icon, ...props }) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-3">{icon}</span>}
        <input
          {...props}
          className="w-full border border-gray-300 rounded-lg py-2.5 px-10 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition placeholder-gray-400"
        />
      </div>
    </div>
  );
}
