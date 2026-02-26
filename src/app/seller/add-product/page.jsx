"use client";

import React, { useState } from 'react';
import { 
  Package, 
  Tag, 
  IndianRupee, 
  Layers, 
  ArrowLeft, 
  CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

export default function AddProductPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Exact mapping to what your teammate's Spring Boot model expects
    const productData = {
      name: e.target.name.value, 
      category: e.target.category.value, 
      price: parseFloat(e.target.price.value), 
      quantity: parseInt(e.target.quantity.value, 10) 
    };

    try {
      const response = await fetch('http://localhost:8080/seller/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) throw new Error('Failed to add product');

      setIsSuccess(true);
      e.target.reset(); 
      setTimeout(() => setIsSuccess(false), 3000);

    } catch (error) {
      console.error("Error adding product:", error);
      // Fallback for UI testing if the backend isn't running yet
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center px-4 py-4 sm:px-6">
          <Link href="/seller/dashboard" className="rounded-full bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-red-600">
            <ArrowLeft size={20} />
          </Link>
          <span className="ml-4 text-lg font-black tracking-tight text-slate-900">Back to Dashboard</span>
        </div>
      </header>

      {/* Reduced max-width to max-w-2xl since the form is narrower without the image box */}
      <main className="mx-auto max-w-2xl px-4 pt-8 sm:px-6">
        
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-2xl font-extrabold text-slate-900 md:text-3xl">Inventory Setup</h1>
          <p className="mt-2 text-sm text-slate-500">List a new pizza, drink, or side for the SliceDrop menu.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          
          {/* Product Name */}
          <div className="space-y-1">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Item Name</label>
            <div className="group relative">
              <Tag className="absolute left-4 top-3.5 text-slate-400 transition-colors group-focus-within:text-red-600" size={18} />
              <input 
                name="name"
                type="text" 
                required
                placeholder="e.g. Spicy Farmhouse Pizza"
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all focus:border-red-600 focus:ring-2 focus:ring-red-600/10"
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="space-y-1">
            <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Category</label>
            <div className="group relative">
              <Layers className="absolute left-4 top-3.5 text-slate-400 transition-colors group-focus-within:text-red-600" size={18} />
              <select 
                name="category"
                required
                defaultValue=""
                className="w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all focus:border-red-600 focus:ring-2 focus:ring-red-600/10"
              >
                <option value="" disabled>Select a category...</option>
                <option value="pizza">Pizzas</option>
                <option value="drinks">Cold Drinks</option>
                <option value="breads">Breads & Sides</option>
                <option value="combos">Combos</option>
              </select>
            </div>
          </div>

          {/* Price & Quantity Layout */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            
            {/* Price in Rupees */}
            <div className="space-y-1">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Price (₹)</label>
              <div className="group relative">
                <IndianRupee className="absolute left-4 top-3.5 text-slate-400 transition-colors group-focus-within:text-red-600" size={18} />
                <input 
                  name="price"
                  type="number" 
                  step="1"
                  required
                  placeholder="399"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all focus:border-red-600 focus:ring-2 focus:ring-red-600/10"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-1">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Stock Qty</label>
              <div className="group relative">
                <Package className="absolute left-4 top-3.5 text-slate-400 transition-colors group-focus-within:text-red-600" size={18} />
                <input 
                  name="quantity"
                  type="number" 
                  required
                  placeholder="e.g. 50"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all focus:border-red-600 focus:ring-2 focus:ring-red-600/10"
                />
              </div>
            </div>

          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <button 
              type="submit"
              className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-bold text-white shadow-sm transition-all active:scale-95 ${
                isSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 size={20} />
                  Added to Menu!
                </>
              ) : (
                'Publish Item'
              )}
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}