'use client';
import React from 'react';

export default function CancellationRefund() {
  return (
    <div className="min-h-screen pt-24 px-4   flex justify-center items-start">
      <div className="max-w-4xl w-full rounded-2xl  p-8 ">
        <h1 className="text-4xl font-bold text-highlight mb-6">Cancellation & Refund Policy</h1>

        <p className="text-gray-800 mb-4">
          At <span className="font-semibold text-green-600">Lucknow Bakers</span>, we take pride in baking fresh, handcrafted cakes and desserts just for you. Due to the nature of our products, we follow a strict cancellation and refund policy as outlined below:
        </p>

        <div className="space-y-6 text-sm md:text-base text-gray-700">
          <div>
            <h2 className="font-semibold text-lg text-green-800">1. Order Cancellation</h2>
            <p>
              Orders can only be cancelled within <span className="font-medium">1 hour</span> of placing them. Once we start preparing your order, we won’t be able to cancel it due to the fresh, perishable nature of our products.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-green-800">2. Custom Cake Orders</h2>
            <p>
              Customized or made-to-order cakes cannot be cancelled once confirmed. Please double-check all design, flavor, and size specifications before confirming.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-green-800">3. Refund Eligibility</h2>
            <p>
              Refunds are only issued if:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>You cancel within the allowed time.</li>
              <li>You receive the wrong item or your order is incomplete.</li>
              <li>The item is damaged or spoiled upon delivery.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-green-800">4. Refund Process</h2>
            <p>
              If your refund is approved, it will be processed to your original payment method within <span className="font-medium">5–7 business days</span>. You’ll be notified by email or WhatsApp once it’s done.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-green-800">5. No Refund Cases</h2>
            <p>
              We do not offer refunds for:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Customer not available to receive delivery.</li>
              <li>Change of mind after the order is prepared.</li>
              <li>Delayed delivery due to circumstances beyond our control (traffic, weather, etc.).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-green-800">6. Contact Support</h2>
            <p>
              For any questions, issues, or complaints, please contact our support team via the{' '}
              <a href="/contactus" className="text-green-600 underline font-medium">Contact Us</a> page. We’ll do our best to resolve it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
