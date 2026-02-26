"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { ArrowLeft, Mail, Plus, Minus, CheckCircle2, AlertCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Wrap the content in a component that uses SearchParams
function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [qty, setQty] = useState(1);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // Extract product from URL
  const product = {
    id: searchParams.get('id'),
    name: searchParams.get('name'),
    price: parseFloat(searchParams.get('price') || 0),
    image: searchParams.get('image'),
  };

  const grandTotal = product.price * qty;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // THIS MATCHES YOUR TEAMMATE'S SPRING BOOT ENDPOINT EXACTLY
      // POST /seller/order?productId=X&qty=Y&email=Z
      const response = await fetch(`http://localhost:8080/seller/order?productId=${product.id}&qty=${qty}&email=${encodeURIComponent(email)}`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Order failed');
      
      setStatus('success');
      // Redirect back to home after 2 seconds
      setTimeout(() => router.push('/home'), 2000);
      
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (!product.id) return <div className="p-8 text-center">Loading product...</div>;

  return (
    <div className="min-h-[100dvh] bg-slate-50 font-sans text-slate-900 pb-12">
      <header className="sticky top-0 z-20 flex items-center border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
        <button onClick={() => router.back()} className="rounded-full bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-red-600">
          <ArrowLeft size={20} />
        </button>
        <h1 className="ml-4 text-lg font-black tracking-tight text-slate-900">Direct Checkout</h1>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-6 sm:px-6">
        
        {/* Selected Item Summary */}
        <div className="mb-6 flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm border border-slate-100">
          <img src={product.image} alt={product.name} className="h-24 w-24 rounded-2xl object-cover bg-slate-50 mix-blend-multiply" />
          <div className="flex-1">
            <h2 className="font-bold text-slate-900 text-lg leading-tight">{product.name}</h2>
            <p className="text-xl font-black text-red-600 mt-1">₹{product.price}</p>
          </div>
        </div>

        {/* Order Form */}
        <form onSubmit={handlePlaceOrder} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100 space-y-6">
          
          {/* Quantity Adjuster */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <label className="text-sm font-bold text-slate-900">Select Quantity</label>
            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-2 py-1 border border-slate-200">
              <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} className="rounded-xl bg-white p-2 text-slate-600 shadow-sm hover:text-red-600">
                <Minus size={16} />
              </button>
              <span className="text-lg font-black w-6 text-center text-slate-900">{qty}</span>
              <button type="button" onClick={() => setQty(qty + 1)} className="rounded-xl bg-white p-2 text-slate-600 shadow-sm hover:text-red-600">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Email Field (Required by Backend) */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase ml-1">Contact Email</label>
            <div className="group relative">
              <Mail className="absolute left-4 top-3.5 text-slate-400 transition-colors group-focus-within:text-red-600" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Where should we send the receipt?"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10"
              />
            </div>
            <p className="text-xs text-slate-400 ml-1">Required to confirm your order.</p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className={`mt-4 flex w-full items-center justify-between rounded-2xl p-4 font-bold text-white transition-all shadow-lg ${
              status === 'success' ? 'bg-green-500 shadow-green-500/25' : 
              status === 'error' ? 'bg-slate-800' : 'bg-red-600 hover:bg-red-700 shadow-red-600/25 active:scale-95'
            }`}
          >
            {status === 'success' ? (
              <span className="flex w-full items-center justify-center gap-2 text-lg"><CheckCircle2 size={24} /> Order Confirmed!</span>
            ) : status === 'error' ? (
              <span className="flex w-full items-center justify-center gap-2 text-lg"><AlertCircle size={24} /> Try Again</span>
            ) : status === 'loading' ? (
              <span className="flex w-full items-center justify-center text-lg">Processing...</span>
            ) : (
              <>
                <span className="flex flex-col items-start">
                  <span className="text-[10px] text-red-200 uppercase tracking-widest">Pay Total</span>
                  <span className="text-xl leading-none">₹{grandTotal.toFixed(2)}</span>
                </span>
                <span className="rounded-xl bg-white/20 px-4 py-2 backdrop-blur-sm">Confirm Order</span>
              </>
            )}
          </button>

        </form>
      </main>
    </div>
  );
}

// Next.js 14 requires Suspense boundaries for components using useSearchParams()
export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}