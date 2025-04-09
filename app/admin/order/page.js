import React from 'react';

const dummyOrders = [
  {
    id: 1,
    customerName: 'Aman Singh',
    cakes: [
      { name: 'Chocolate Truffle', quantity: 1, price: 500 },
      { name: 'Red Velvet', quantity: 2, price: 700 },
    ],
  },
  {
    id: 2,
    customerName: 'Priya Verma',
    cakes: [
      { name: 'Butterscotch', quantity: 1, price: 450 },
    ],
  },
  {
    id: 3,
    customerName: 'Ravi Kumar',
    cakes: [
      { name: 'Black Forest', quantity: 3, price: 600 },
      { name: 'Pineapple Delight', quantity: 1, price: 400 },
    ],
  },
];

function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin: Order Details</h1>
      {dummyOrders.map((order) => (
        <div key={order.id} className="mb-6 border border-gray-200 rounded-xl p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-2">Order #{order.id} - {order.customerName}</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border-b">Cake Name</th>
                <th className="p-2 border-b">Quantity</th>
                <th className="p-2 border-b">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {order.cakes.map((cake, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2 border-b">{cake.name}</td>
                  <td className="p-2 border-b">{cake.quantity}</td>
                  <td className="p-2 border-b">{cake.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Page;
