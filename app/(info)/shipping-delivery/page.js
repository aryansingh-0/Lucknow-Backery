'use client';
import React from 'react';

export default function ShippingDelivery() {
  return (
    <div className="min-h-screen pt-24 px-4 flex justify-center items-start">
      <div className="max-w-4xl w-full rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-highlight mb-6">
          Shipping & Delivery Policy
        </h1>

        <p className="text-gray-800 mb-6 text-sm md:text-base">
          Last updated on <span className="font-medium">Sep 8, 2025</span>
        </p>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          At <span className="font-semibold">ARYAN SINGH</span>, we ensure timely
          dispatch of your orders through reliable courier and postal services. 
          Please review our shipping and delivery terms below:
        </p>

        <div className="space-y-6 text-gray-700 text-sm md:text-base">
          <div>
            <h2 className="font-semibold text-lg text-highlight">
              1. International Shipping
            </h2>
            <p>
              For international buyers, orders are shipped and delivered through 
              registered international courier companies and/or International Speed 
              Post only.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              2. Domestic Shipping
            </h2>
            <p>
              For domestic buyers, orders are shipped through registered domestic 
              courier companies and/or Speed Post only.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              3. Dispatch Timelines
            </h2>
            <p>
              Orders are shipped within <span className="font-medium">0–7 days</span> 
              from the date of order and payment, or as per the delivery date agreed 
              at the time of order confirmation. Delivery is subject to courier company 
              or postal service norms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              4. Delivery Responsibility
            </h2>
            <p>
              <span className="font-semibold">ARYAN SINGH</span> is not liable for 
              delays caused by courier companies or postal authorities. Our guarantee 
              is limited to handing over the consignment to the courier/postal 
              authorities within the stipulated time.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              5. Delivery Address
            </h2>
            <p>
              All orders will be delivered to the shipping address provided by the 
              buyer at checkout. It is the buyer’s responsibility to ensure that the 
              provided address is accurate and accessible.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              6. Confirmation of Services
            </h2>
            <p>
              Delivery of our services will be confirmed via the email ID specified 
              during registration. Please ensure your contact details are correct at 
              the time of placing the order.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              7. Customer Support
            </h2>
            <p>
              For any issues related to shipping or delivery, please contact our 
              helpdesk at <a href="tel:9628222001" className="text-link font-medium">+91 9628222001</a> 
              or email us at{" "}
              <a
                href="mailto:aryan03aryansingh@gmail.com"
                className="text-link font-medium"
              >
                aryan03aryansingh@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
