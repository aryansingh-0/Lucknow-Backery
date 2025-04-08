import React from 'react'

function ContactUs() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center   px-4 py-10">
      {/* Location Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4 text-highlight ">📍 Our Location</h2>
        <p className="mb-4 text-gray-600">
          Lucknow Bakers, Hazratganj, Lucknow, Uttar Pradesh - 226001
        </p>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md  ">
          <iframe
            title="Lucknow Bakers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.401831301345!2d80.94615921438338!3d26.850640768053567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c5d7cc85f7%3A0x9fcbfa5a3d2caa18!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1685093749694!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 p-6 border border-highlight rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-highlight ">📬 Contact Us</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-highlight rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border border-highlight rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border border-highlight rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="p-3 border border-highlight rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 border border-highlight rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-highlight hover:bg-green-700 text-white py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
