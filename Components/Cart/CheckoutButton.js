'use client';
import Script from "next/script";

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const amount = cart.reduce((sum, item) => sum + item.totalPrice, 0);

    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Lucknow Bakers",
      description: "Cake Order",
      order_id: order.id,
      handler: async function (response) {
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...response, cart }),
        });

        const verifyData = await verifyRes.json();
        if (verifyData.success) {
          alert("Payment successful & verified! Shop notified.");
        } else {
          alert("Payment failed. Please try again.");
        }
      },
      theme: { color: "#3399cc" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button onClick={handleCheckout} className="btn bg-green-600 rounded-md font-bold hover:bg-green-700 text-white text-clean cursor-pointer px-2">
        Pay with Google Pay
      </button>
    </>
  );
}
