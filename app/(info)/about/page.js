'use client';

import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto">
      {/* Intro Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4B2E2B] mb-4">
          About Lucknow Bakers
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Where tradition meets taste – handcrafted cakes made with love, right here in the heart of Lucknow.
        </p>
      </section>

      {/* Image & Story */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* 📸 Replace with a real image of your shop or cakes */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/our-bakery.jpg" // 👈 Place your image in `public/images/`
            alt="Our Bakery"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            At <strong>Lucknow Bakers</strong>, our passion for baking shines through every slice. What began as a small home kitchen dream is now a beloved cake destination for families across the city. We combine the rich culinary heritage of Lucknow with modern baking techniques to bring you cakes that are not only beautiful but unforgettable in flavor.
          </p>
          <p className="mt-4">
            Whether it’s a birthday, anniversary, wedding, or just a sweet craving, we craft every cake to perfection — using only the finest ingredients, no shortcuts, and a whole lot of love.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center text-[#4B2E2B] mb-8">What Makes Us Special</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-md rounded-lg border border-gray-100">
            <Image src="/icons/fresh.svg" alt="Fresh Ingredients" width={50} height={50} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Always Fresh</h3>
            <p className="text-gray-600">We bake fresh every day with locally sourced ingredients, ensuring quality in every bite.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg border border-gray-100">
            <Image src="/icons/custom.svg" alt="Custom Cakes" width={50} height={50} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Made to Order</h3>
            <p className="text-gray-600">From photo cakes to theme-based treats, we personalize every creation to suit your occasion.</p>
          </div>
          <div className="p-6 shadow-md rounded-lg border border-gray-100">
            <Image src="/icons/community.svg" alt="Local Love" width={50} height={50} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rooted in Community</h3>
            <p className="text-gray-600">Proud to be part of the Lucknow family — we celebrate every milestone with you.</p>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-[#4B2E2B] mb-4">Visit Us or Order Online</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          Experience the joy of fresh baking — walk into our store or browse our online collection to find your perfect treat.
        </p>
        <a
          href="/cakes"
          className="inline-block bg-[#4B2E2B] text-white px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-[#3a1f1e] transition"
        >
          Explore Cakes
        </a>
      </section>
    </div>
  );
}
