"use client";

import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Added Router

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  const handleBuyNow = () => {
    // Send the product details to our new checkout page via URL parameters
    const params = new URLSearchParams({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div className="flex flex-col rounded-3xl bg-white p-4 border border-slate-100 transition-transform hover:border-red-100 hover:shadow-sm">
      
      <div className="relative mb-3 flex h-32 items-center justify-center rounded-2xl bg-slate-50">
        <img src={product.image} alt={product.name} className="h-full w-full rounded-2xl object-cover mix-blend-multiply" />
        <button onClick={() => setIsFavorite(!isFavorite)} className="absolute top-2 right-2 rounded-full bg-white p-1.5 text-slate-300 transition-colors hover:text-red-500 shadow-sm">
          <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500" : "fill-transparent"} />
        </button>
      </div>

      <div className="mt-auto flex flex-col h-full justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">{product.category}</span>
          <h3 className="mt-1 font-bold text-slate-900 line-clamp-1">{product.name}</h3>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-black text-slate-900">₹{product.price}</span>
          
          {/* Direct Buy Button */}
          <button 
            onClick={handleBuyNow}
            className="flex h-9 items-center gap-2 rounded-xl bg-red-600 px-3 text-sm font-bold text-white transition-all hover:bg-red-700 active:scale-95"
          >
            Order <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}