'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Home, ShoppingCart, Cake } from 'lucide-react';
import { motion } from 'framer-motion';

function MobileBar() {
  const pathname = usePathname();
  const cart = useSelector((state) => state.cart.cart);
  const numberOfItems = cart.length;

  const navItems = [
    { name: 'Home', href: '/', icon: <Home /> },
    { name: 'Carts', href: '/carts', icon: <ShoppingCart />, badge: numberOfItems },
    { name: 'Cakes', href: '/cakes', icon: <Cake /> },
  ];

  const indicatorColor = 'bg-red-500';
  const inactiveColor = 'text-gray-600  ';
  const textActiveColor = 'text-white hidden z-20 -mt-2 ';

  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 z-50 h-16 flex items-center justify-around bg-[#fffbf6] rounded-t-3xl shadow-2xl border-t border-gray-100">
      {navItems.map((item, idx) => {
        const isActive = item.href && pathname === item.href;

        return item.href ? (
          <Link
            key={idx}
            href={item.href}
            className="relative flex flex-col items-center justify-center px-4 pt-2"
          >
            {/* Animated Circle */}
        {isActive && (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1.2 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`absolute -top-10 w-16 h-16 rounded-full ${indicatorColor}
      shadow-[0_2px_12px_rgba(0,0,0,0.6),0_12px_20px_rgba(0,0,0,0.3)]
      
      flex items-center justify-center`}
  >
    {React.cloneElement(item.icon, { className: 'w-7 h-7 text-white' })}
  </motion.div>
)}



            {/* Inactive Icon */}
            {!isActive && (
              <div className="flex flex-col items-center justify-center pt-3">
                {React.cloneElement(item.icon, { className: `w-6 h-6 ${inactiveColor}` })}
              </div>
            )}

            {/* Text */}
            <span
              className={`text-xs  transition-colors duration-200 ${
                isActive ? `font-bold ${textActiveColor}` : inactiveColor
              }`}
            >
              {item.name}
            </span>

            {/* Badge */}
            {item.badge > 0 && item.name === 'Carts' && (
              <div className="absolute top-0 right-0 bg-yellow-300 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center p-0.5 z-10">
                {item.badge > 9 ? '9+' : item.badge}
              </div>
            )}
          </Link>
        ) : (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center px-4 pt-2 cursor-pointer"
          >
            {React.cloneElement(item.icon, { className: `w-6 h-6 ${inactiveColor}` })}
            <span className={`text-xs mt-1 ${inactiveColor}`}>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MobileBar;
