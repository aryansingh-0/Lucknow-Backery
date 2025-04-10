'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function QRPaymentStep({ onNext }) {
  const [screenshotConfirmed, setScreenshotConfirmed] = useState(false);

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-bold">Scan QR Code to Pay</h2>
      <Image
        src="/qr.jpg" // put your QR code image in public folder
        alt="QR Code"
        width={300}
        height={300}
        className="mx-auto"
      />
      <p className="text-gray-600">
        Please take a screenshot of your payment and click below to send it on WhatsApp.
      </p>
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_SHOP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded"
      >
        Send Screenshot on WhatsApp
      </a>
      <button
        onClick={onNext}
        className="block mx-auto mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        I’ve Sent Screenshot
      </button>
 
    </div>
  );
}
