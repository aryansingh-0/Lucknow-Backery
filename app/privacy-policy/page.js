'use client';

import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto text-gray-700">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4B2E2B] mb-4">Privacy Policy</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Your trust is the secret ingredient in everything we bake.
        </p>
      </section>

      {/* Policy Content */}
      <div className="space-y-10">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#4B2E2B] mb-2">1. Introduction</h2>
          <p>
            At <strong>Lucknow Bakers</strong>, we value your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website and services.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#4B2E2B] mb-2">2. What We Collect</h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Your name and contact details</li>
            <li>Order and transaction history</li>
            <li>Delivery addresses</li>
            <li>Feedback or reviews</li>
            <li>Browser data via cookies (non-personal)</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#4B2E2B] mb-2">3. How We Use Your Information</h2>
          <p>
            The information we collect helps us to:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Process and deliver your orders</li>
            <li>Improve our products and services</li>
            <li>Personalize your experience</li>
            <li>Send order updates and relevant offers</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#4B2E2B] mb-2">4. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience. These small files help us understand website traffic and preferences so we can serve you better.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#4B2E2B] mb-2">5. Data Security</h2>
          <p>
            We implement standard security measures to protect your data. Your personal information is never sold or shared with third parties without your consent.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#4B2E2B] mb-2">6. Your Rights</h2>
          <p>
            You have the right to access, update, or request deletion of your personal data. Feel free to contact us for any concerns at <a href="mailto:hello@lucknowbakers.com" className="text-green-700 underline">hello@lucknowbakers.com</a>.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#4B2E2B] mb-2">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. All changes will be reflected on this page with the revised date at the top.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-600 mb-4">Thank you for choosing Lucknow Bakers!</p>
        <a
          href="/"
          className="inline-block bg-link text-white px-6 py-3 rounded-full text-lg font-medium shadow transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
