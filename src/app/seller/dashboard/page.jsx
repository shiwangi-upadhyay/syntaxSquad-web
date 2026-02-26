"use client";

import React from 'react';
import { 
  ShoppingBag, 
  PlusCircle, 
  Package, 
  Store, 
  ChevronRight,
  Bell,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function SellerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Responsive Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-600 p-2.5 text-white shadow-sm shadow-red-600/20">
              <Store size={22} />
            </div>
            <div>
              <h1 className="text-base font-black leading-none tracking-tight text-slate-900 md:text-lg">SliceDrop</h1>
              <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase md:text-xs">Store Portal</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden text-right md:block">
              <p className="text-sm font-bold text-slate-900">Store Manager</p>
              <p className="text-xs text-slate-500">Connaught Place Branch</p>
            </div>
            <button className="relative rounded-full bg-slate-100 p-2.5 text-slate-600 transition-colors hover:bg-slate-200 hover:text-red-600">
              <Bell size={20} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-red-600 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Responsive Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Quick Stats - Expands from 1 column (mobile) to 4 columns (desktop) */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">Today's Orders</span>
              <ShoppingBag size={18} className="text-slate-400" />
            </div>
            <p className="mt-2 text-3xl font-black text-slate-900">42</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-bold text-green-600">
              <TrendingUp size={14} /> <span>+12% from yesterday</span>
            </div>
          </div>

          <div className="rounded-3xl border border-red-500 bg-red-600 p-6 text-white shadow-lg shadow-red-600/20 transition-transform hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold tracking-wider text-red-200 uppercase">Today's Revenue</span>
              <TrendingUp size={18} className="text-red-200" />
            </div>
            <p className="mt-2 text-3xl font-black">₹14,250</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-red-100">
              <span>Next payout: Tomorrow</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">Pending Prep</span>
              <Bell size={18} className="text-orange-500" />
            </div>
            <p className="mt-2 text-3xl font-black text-slate-900">8</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-bold text-orange-500">
              <span>Requires immediate action</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">Low Stock Alerts</span>
              <AlertCircle size={18} className="text-red-500" />
            </div>
            <p className="mt-2 text-3xl font-black text-slate-900">2</p>
            <div className="mt-2 flex items-center gap-1 text-xs font-bold text-slate-500">
              <span>Coke (250ml), Garlic Bread</span>
            </div>
          </div>

        </div>

        {/* Store Management Actions - 1 column (mobile) to 3 columns (desktop) */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-slate-900">Store Management</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          
          <Link href="/seller/add-product" className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-2xl bg-red-50 p-4 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <PlusCircle size={28} />
              </div>
              <ChevronRight size={24} className="text-slate-300 transition-transform group-hover:translate-x-2 group-hover:text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Add New Item</h3>
              <p className="mt-1 text-sm text-slate-500">List a new pizza, drink, or combo to your menu.</p>
            </div>
          </Link>

          <button className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg text-left">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-2xl bg-slate-50 p-4 text-slate-600 transition-colors group-hover:bg-slate-100">
                <ShoppingBag size={28} />
              </div>
              <ChevronRight size={24} className="text-slate-300 transition-transform group-hover:translate-x-2 group-hover:text-slate-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Active Orders</h3>
              <p className="mt-1 text-sm text-slate-500">Accept, prepare, and dispatch incoming deliveries.</p>
            </div>
          </button>

          <button className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg text-left">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-2xl bg-slate-50 p-4 text-slate-600 transition-colors group-hover:bg-slate-100">
                <Package size={28} />
              </div>
              <ChevronRight size={24} className="text-slate-300 transition-transform group-hover:translate-x-2 group-hover:text-slate-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Inventory Sync</h3>
              <p className="mt-1 text-sm text-slate-500">Update stock quantities and adjust item pricing.</p>
            </div>
          </button>

        </div>
      </main>
    </div>
  );
}