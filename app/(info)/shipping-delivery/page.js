'use client';
import Image from 'next/image';
import deliveryImg from '@/public/images/delivery.png'; // Make sure this image exists or replace with your own
import React from 'react';

export default function ShippingAndDeliveryPage() {
  return (
    <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full rounded-2xl backdrop-blur-md bg-white/30 border border-white/50 p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-highlight mb-4">Shipping & Delivery</h1>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              At <span className="font-semibold text-highlight">Lucknow Bakers</span>, we promise to deliver happiness — straight from our oven to your doorstep.
              Whether you're ordering for a special celebration or just indulging yourself, our delivery team ensures freshness every time.
            </p>
            <ul className="list-disc pl-5 text-gray-800 text-sm md:text-base space-y-2">
              <li><strong>Delivery Timing:</strong> Same-day delivery within Lucknow if ordered before 6 PM.</li>
              <li><strong>Custom Cake Delivery:</strong> Please allow 24–48 hours for personalized designs.</li>
              <li><strong>Delivery Charges:</strong> Free on orders above ₹499, otherwise ₹40 flat rate.</li>
              <li><strong>Delivery Areas:</strong> Currently delivering across Lucknow city.</li>
              <li><strong>Pickup Option:</strong> Available from our Hazratganj store during business hours.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={deliveryImg}
              alt="Cake delivery illustration"
              width={400}
              height={400}
              className="rounded-xl shadow-md bg-white/40 backdrop-blur-md p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
