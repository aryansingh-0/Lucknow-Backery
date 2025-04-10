"use client"
import React from 'react'
import Image from 'next/image'

function WhatsaAppIcon() {
    function openWhatsApp() {
        const phoneNumber = '9711724100';
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
      }
      
  return (
    <div onClick={openWhatsApp} className="whatsapp hidden md:block cursor-pointer border-highlight border-2 z-50 fixed bottom-2 right-2 p-3.5  rounded-full bg-clean">
    <Image src={"https://res.cloudinary.com/dgp04dpun/image/upload/v1744113946/648b04dc-08bf-4e4a-8ee1-5d329084639d.png"}
      width={50}
      height={50}
      alt="whatsapp"
    />
    
  </div>
  )
}

export default WhatsaAppIcon
