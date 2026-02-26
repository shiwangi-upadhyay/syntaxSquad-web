"use client";

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Receipt, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import BottomNav from '../../components/BottomNav';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch both the Order History and the Total Spent concurrently
    const fetchOrderData = async () => {
      try {
        const [ordersRes, totalRes] = await Promise.all([
          fetch('http://localhost:8080/buyer/orders'),
          fetch('http://localhost:8080/buyer/total')
        ]);

        if (ordersRes.ok) setOrders(await ordersRes.json());
        if (totalRes.ok) setTotalSpent(await totalRes.json());
      } catch (error) {
        console.error("Failed to load order history", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrderData();
  }, []);

  return (
    <div className="min-h-[100dvh] bg-slate-50 font-sans text-slate-900 pb-24">
      
      <header className="sticky top-0 z-20 flex items-center border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
        <Link href="/home" className="rounded-full bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-red-600">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="ml-4 text-lg font-black tracking-tight text-slate-900">Order History</h1>
      </header>

      <main className="mx-auto max-w-md px-4 pt-6 sm:px-6">
        
        {/* Total Spent Dashboard Widget */}
        <div className="mb-8 rounded-3xl bg-red-600 p-6 text-white shadow-lg shadow-red-600/20">
          <div className="flex items-center gap-2 text-red-200 mb-1">
            <Receipt size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Total Lifetime Spend</span>
          </div>
          <p className="text-4xl font-black">₹{totalSpent.toFixed(2)}</p>
        </div>

        <h2 className="mb-4 text-lg font-bold text-slate-900">Recent Orders</h2>

        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 rounded-3xl bg-slate-200/50"></div>
            ))}
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-12">
            <Receipt className="mx-auto h-12 w-12 text-slate-300 mb-3" />
            <p className="text-slate-500 font-medium">No orders found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, index) => (
              <div key={index} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-red-200 hover:shadow-md">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Clock size={14} /> Order #{order.id || (1000 + index)}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                    <CheckCircle2 size={14} /> Completed
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    {/* Assuming the DTO has product details. Adjust if needed based on backend response */}
                    <h3 className="font-bold text-slate-900">Product ID: {order.productId}</h3>
                    <p className="text-sm text-slate-500">Qty: {order.qty}</p>
                  </div>
                  <div className="text-right">
                    {/* Fallback to 0 if total isn't provided directly on the order object yet */}
                    <p className="text-lg font-black text-slate-900">₹{order.total || (order.qty * 399)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}