'use client';
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen pt-24 px-6 flex items-center justify-center bg-gray-50">
      <div className="max-w-5xl w-full rounded-2xl bg-white shadow-lg p-8">
        <h1 className="text-4xl font-bold text-highlight mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          We’d love to hear from you! Whether you have a question about our cakes, 
          a special custom order, or feedback about your experience, our team is here to help. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-4 text-gray-800 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <Phone className="text-highlight" />
              <div>
                <h2 className="font-semibold text-lg text-highlight">Phone</h2>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-highlight" />
              <div>
                <h2 className="font-semibold text-lg text-highlight">Email</h2>
                <p>hello@lucknowbakers.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-highlight" />
              <div>
                <h2 className="font-semibold text-lg text-highlight">Address</h2>
                <p>123 Sweet Street, Hazratganj, Lucknow, Uttar Pradesh - 226001</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-highlight" />
              <div>
                <h2 className="font-semibold text-lg text-highlight">Working Hours</h2>
                <p>Mon – Sat: 9:00 AM – 9:00 PM</p>
                <p>Sunday: 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-highlight"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-highlight"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-highlight"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-highlight text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
