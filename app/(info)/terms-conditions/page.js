'use client';
import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-24 px-4   flex items-center justify-center">
      <div className="max-w-5xl w-full rounded-2xl    p-8 ">
        <h1 className="text-4xl font-bold text-highlight mb-6">Terms & Conditions</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-link">Lucknow Bakers</span>. By accessing our website and placing an order, you agree to the terms and conditions mentioned below.
        </p>

        <div className="space-y-4 text-gray-800 text-sm md:text-base">
          <div>
            <h2 className="font-semibold text-lg text-highlight">1. Order Acceptance</h2>
            <p>
              All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including pricing errors or issues with availability.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">2. Payment</h2>
            <p>
              We accept payments via Google Pay and Cash on Delivery (COD). All online payments must be verified before dispatch. COD is available within Lucknow only.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">3. Delivery</h2>
            <p>
              Delivery timelines are estimates and not guaranteed. Delays may occur due to weather, traffic, or other unforeseen circumstances. Please refer to our Shipping & Delivery page for more.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">4. Custom Orders</h2>
            <p>
              For custom cakes, all design specifications must be confirmed 24–48 hours in advance. We are not liable for discrepancies if full details were not provided.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">5. Refunds & Cancellations</h2>
            <p>
              Once an order is confirmed, cancellations are allowed only within 1 hour. Refunds will be processed within 5–7 business days for eligible cases.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">6. Product Images</h2>
            <p>
              Images shown on the website are for reference. Actual product may slightly vary in appearance, as everything is freshly handmade.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">7. Privacy</h2>
            <p>
              We respect your privacy. Please read our Privacy Policy to understand how your personal information is handled.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-highlight">8. Contact Us</h2>
            <p>
              For any questions or issues, feel free to reach out via our <span className="text-link font-medium">Contact Us</span> page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
