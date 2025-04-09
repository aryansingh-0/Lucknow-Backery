'use client';
import Image from 'next/image';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { updateQuantity, setCart, removeItem } from '@/lib/cartSlice';

const weights = [500, 1000, 1500];

export default function CartItem({ item, index, cartItems }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, item.quantity + delta);
    dispatch(updateQuantity({ index, quantity: newQuantity }));
  };

  const handleWeightChange = (newWeight) => {
    const weightMultiplier = parseInt(newWeight) / 500;
    const updatedItem = {
      ...item,
      weight: newWeight,
      totalPrice: item.cakePrice * item.quantity * weightMultiplier,
    };
    const updatedCart = [...cartItems];
    updatedCart[index] = updatedItem;
    dispatch(setCart(updatedCart));
  };

  const handleRemove = () => {
    dispatch(removeItem(index));
  };

  return (
    <div className="bg-white relative shadow-md rounded-lg p-4 flex flex-col sm:flex-row items-center gap-6">
      <Image src={item.url} alt={item.cakeName} width={120} height={120} className="rounded-md" />
      <div className="flex-1 w-full">
        <h2 className="text-xl font-semibold">{item.cakeName}</h2>
        <p>Base Price (500gm): ₹{item.cakePrice}</p>

        <div className="flex flex-wrap gap-4 mt-3 items-center">
          <div className="flex items-center gap-2">
            <span>Qty:</span>
            <button onClick={() => handleQuantityChange(-1)} className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold">-</button>
            <span className="px-2 font-semibold">{item.quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 font-bold">+</button>
          </div>

          <div className="flex gap-2">
            {weights.map((w) => (
              <button
                key={w}
                onClick={() => handleWeightChange(w)}
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

        <button onClick={handleRemove} className="mt-2 absolute top-2 right-2 text-red-600 font-semibold hover:underline">
          <MdDeleteForever className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
