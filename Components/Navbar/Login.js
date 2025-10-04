'use client';
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { signIn } from "next-auth/react";

export default function AuthModal({ setShowLogin }) {
  const [step, setStep] = useState(1); // 1: enter email/name, 2: enter OTP
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // only for signup
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    if (!email) {
      setMessage("Email is required");
      return;
    }
    if (mode === "signup" && !name) {
      setMessage("Name is required for signup");
      return;
    }

    try {
      const endpoint = mode === "login" 
        ? "/api/user/auth/login" 
        : "/api/user/auth/signup";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (data.success) {
        setStep(2);
        setMessage("OTP sent to your email!");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Failed to send OTP");
      console.error(err);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const result = await signIn("user-otp", {
        redirect: false,
        email,
        otp,
      });

      if (result?.error) {
        setMessage(result.error);
      } else {
        setMessage(`${mode === "login" ? "Login" : "Signup"} successful!`);
        setShowLogin(false);
        setStep(1);
        setEmail("");
        setOtp("");
        setName("");
      }
    } catch (err) {
      setMessage("Failed to verify OTP");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl w-80 relative">
        <button
          onClick={() => {
            setShowLogin(false);
            setStep(1);
            setEmail("");
            setOtp("");
            setName("");
            setMessage("");
          }}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <IoCloseSharp size={24} />
        </button>

        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-3 py-1 rounded-md ${mode === "login" ? "bg-red-600 text-white" : "bg-gray-200"}`}
            onClick={() => { setMode("login"); setMessage(""); }}
          >
            Login
          </button>
          <button
            className={`px-3 py-1 rounded-md ${mode === "signup" ? "bg-red-600 text-white" : "bg-gray-200"}`}
            onClick={() => { setMode("signup"); setMessage(""); }}
          >
            Signup
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4 text-center">
          {step === 1 ? (mode === "login" ? "Login" : "Signup") : "Verify OTP"}
        </h2>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            )}
            <button
              onClick={handleSendOtp}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Verify OTP
            </button>
          </>
        )}

        {message && (
          <p className="text-center text-sm mt-2 text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
}
