'use client';
import React from 'react';

export default function CancellationRefund() {
  return (
    <div className="min-h-screen pt-24 px-4 flex justify-center items-start">
      <div className="max-w-4xl w-full rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-highlight mb-6">
          Cancellation & Refund Policy
        </h1>

        <p className="text-gray-800 mb-6 text-sm md:text-base">
          Last updated on <span className="font-medium">Sep 8, 2025</span>
        </p>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          <span className="font-semibold">ARYAN SINGH</span> believes in helping its
          customers as far as possible, and has therefore adopted a liberal
          cancellation and refund policy. Please review the terms below:
        </p>

        <div className="space-y-6 text-gray-700 text-sm md:text-base">
          <div>
            <h2 className="font-semibold text-lg text-highlight">
              1. Order Cancellations
            </h2>
            <p>
              Cancellations will be considered only if the request is made within
              the <span className="font-medium">same day</span> of placing the order.
              However, once the order has been communicated to our vendors or
              merchants and the shipping process has been initiated, cancellation
              requests may not be entertained.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              2. Perishable Goods
            </h2>
            <p>
              Orders for perishable items such as flowers, eatables, etc., cannot
              be cancelled. However, refunds or replacements may be provided if the
              customer establishes that the quality of the product delivered was
              not satisfactory.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              3. Damaged or Defective Products
            </h2>
            <p>
              If you receive a damaged or defective item, please report it to our
              Customer Service team on the same day of receipt. The request will be
              entertained only after verification by the merchant at their end.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              4. Product Mismatch or Dissatisfaction
            </h2>
            <p>
              If you feel that the product delivered is not as shown on the site or
              does not meet your expectations, notify our Customer Service team
              within the same day of receiving the product. After reviewing your
              complaint, our team will take an appropriate decision regarding a
              refund or replacement.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              5. Manufacturer Warranty Products
            </h2>
            <p>
              For products that come with a manufacturer’s warranty, complaints
              should be directed to the manufacturer as per their policies.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">
              6. Refund Processing
            </h2>
            <p>
              In case of refunds approved by <span className="font-semibold">ARYAN
              SINGH</span>, the refund will be processed within the{" "}
              <span className="font-medium">same day</span> to the original payment
              method of the customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
