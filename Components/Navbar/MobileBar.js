"use client"
import React, { useEffect, useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaRegHeart, FaWhatsapp } from "react-icons/fa"; import { FaShoppingBag } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs";
import { useSelector } from 'react-redux';
 
import Link from 'next/link';
function MobileBar() {

 
  const cart = useSelector((state) => state.cart.cart);
  
  let numberOfItems = cart.length;
  function openWhatsApp() {
    const phoneNumber = '9711724100';
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }


  return (
    <div className='w-full md:hidden z-50 h-16 bg-red-50 sticky bottom-0 flex items-center justify-evenly rounded-t-2xl'>
   <Link href={"/"}>
   
      <div className="button ">
        <div className="logo flex items-center justify-center w-full">
          <IoHomeSharp className='text-2xl' />
        </div>

        Home</div></Link>
     
      <Link href={"/carts"}> 
      <div className="button relative">
        <div className="indicate   bg-red-300 absolute px-1.5 -top-2 -right-3 rounded-full">  {numberOfItems > 9 ? '9+' : numberOfItems}</div>
        <div className="logo flex items-center justify-center w-full">
          <FaShoppingBag className='text-2xl' />
        </div>Carts
      </div></Link>
      <Link href={"/cakes"}> 
      <div className="button relative">
         
        <div className="logo flex items-center justify-center w-full">
          <BsCake2  className='text-2xl' />
        </div>Cakes
      </div></Link>
      <div onClick={openWhatsApp} className="button">
        <div className="logo flex items-center justify-center w-full">
          <FaWhatsapp className='text-2xl text-green-600 ' />
        </div>WhatsApp</div>

    </div>
  )
}

export default MobileBar
