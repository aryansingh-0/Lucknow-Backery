'use client';

import { useEffect, useState } from 'react';
import OrderModal from '@/Components/Admin/OrderModal';
import StatusBadge from '@/Components/Admin/StatusBadge';

export default function AdminOrderPage() {
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    page: 1,
    user: '',
    date: '',
    status: '',
  });

  const fetchOrders = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters),
    });
    const data = await res.json();
    setOrders(data.orders);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, [filters]);

  const handleFilter = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const user = form.get('user') || '';
    const date = form.get('date') || '';
    setFilters((prev) => ({ ...prev, user, date, page: 1 }));
  };

  const changeStatus = (status) => {
    setFilters((prev) => ({ ...prev, status, page: 1 }));
  };

  const changePage = (page) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  return (
    <div className="p-4 pt-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-semibold">Manage Orders</h1>
        <div className="flex gap-2">
          <button
            onClick={() => changeStatus('')}
            className={`px-4 py-2 rounded ${
              filters.status === '' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => changeStatus('pending')}
            className={`px-4 py-2 rounded ${
              filters.status === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200'
            }`}
          >
            Pending Orders
          </button>
          <button
            onClick={() => changeStatus('accepted')}
            className={`px-4 py-2 rounded ${
              filters.status === 'accepted' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
          >
            Accepted Orders
          </button>
        </div>
      </div>

      <form onSubmit={handleFilter} className="flex gap-2 mb-6">
        <input
          name="user"
          placeholder="Filter by user"
          defaultValue={filters.user}
          className="border p-2 rounded w-1/2"
        />
        <input
          type="date"
          name="date"
          defaultValue={filters.date}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Filter
        </button>
      </form>

      {loading ? (
        <div className="text-center text-lg">Loading orders...</div>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => (
              <div key={order._id} className="border p-4 rounded-xl shadow-sm bg-white">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold">{order.username || 'Unknown'}</p>
                  <StatusBadge status={order.status || 'pending'} />
                </div>
                <p className="text-sm text-gray-600">
                  {order.deliveryDate} @ {order.deliveryTime}
                </p>
                <p className="text-lg font-semibold mt-2">₹{order.totalPrice}</p>
                <OrderModal reloadOrders={fetchOrders} order={order} />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => changePage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    i + 1 === filters.page ? 'bg-blue-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
