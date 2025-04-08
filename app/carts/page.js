'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setCart, updateQuantity, removeItem } from '@/lib/cartSlice';
import { MdDeleteForever } from "react-icons/md";
export default function CartsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const weights = [500, 1000, 1500];

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const initialized = storedItems.map(item => {
      const weightMultiplier = parseInt(item.weight) / 500;
      return {
        ...item,
        totalPrice: item.cakePrice * item.quantity * weightMultiplier,
      };
    });
    dispatch(setCart(initialized));
  }, [dispatch]);

  const handleQuantityChange = (index, delta) => {
    const item = cartItems[index];
    const newQuantity = Math.max(1, item.quantity + delta);
    dispatch(updateQuantity({ index, quantity: newQuantity }));
  };

  const handleWeightChange = (index, newWeight) => {
    const item = cartItems[index];
    const weightMultiplier = parseInt(newWeight) / 500;
    const updatedItem = {
      ...item,
      weight: newWeight,
      totalPrice: item.cakePrice * item.quantity * weightMultiplier,
    };

    const updatedCart = [...cartItems];
    updatedCart[index] = updatedItem;
    dispatch(setCart(updatedCart)); // full cart update
  };

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  const totalSum = cartItems.reduce((acc, item) => acc + (item.totalPrice || 0), 0);

  return (
    <div className="min-h-screen mt-8 py-10 px-4   ">
      {/* <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1> */}

      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white relative shadow-md rounded-lg p-4 flex flex-col sm:flex-row items-center gap-6">
              <Image src={item.url} alt={item.cakeName} width={120} height={120} className="rounded-md" />
              <div className="flex-1 w-full  ">
                <h2 className="text-xl font-semibold">{item.cakeName}</h2>
                <p>Base Price (500gm): ₹{item.cakePrice}</p>

                <div className="flex flex-wrap gap-4 mt-3 items-center">
                  <div className="flex items-center gap-2">
                    <span>Qty:</span>
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                    >
                      -
                    </button>
                    <span className="px-2 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex gap-2">
                    {weights.map(w => (
                      <button
                        key={w}
                        onClick={() => handleWeightChange(index, w)}
                        className={`px-3 py-1.5 rounded-full border transition ${
                          parseInt(item.weight) === w
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {w >= 1000 ? `${w / 1000}kg` : `${w}g`}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="mt-2 font-bold text-lg">Total: ₹{item.totalPrice.toFixed(2)}</p>
                <button
                  onClick={() => handleRemove(index)}
                  className="mt-2 absolute top-2 right-2 text-red-600 font-semibold hover:underline"
                >
                  <MdDeleteForever className='text-3xl'/>
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">Grand Total: ₹{totalSum.toFixed(2)}</h2>
            <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
