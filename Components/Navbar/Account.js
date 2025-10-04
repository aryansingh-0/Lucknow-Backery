"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { IoCloseSharp } from "react-icons/io5";

function Account({ session, setShowAccount }) {
  if (!session) return null;

  const handleLogout = async () => {
    await signOut({ redirect: false });
    setShowAccount(false);
  };

  return (
    <div className="absolute top-18 right-4 z-50 w-60 bg-white rounded-xl shadow-lg p-4 flex flex-col items-start">
      {/* Close button */}
      <button
        onClick={() => setShowAccount(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <IoCloseSharp size={20} />
      </button>

      <h2 className="text-lg font-bold mb-2 w-full text-center border-b border-gray-200 pb-2">
        Account Info
      </h2>

      <div className="mt-2 w-full text-center">
        <p className="text-gray-700 font-medium">{session.user.name}</p>
        <p className="text-gray-500 text-sm">{session.user.email}</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Account;
