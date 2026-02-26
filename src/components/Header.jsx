"use client"; // Must add this to use hooks

import React from 'react';
import { Menu, Pizza, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; // Import your hook

export default function Header() {
  const { cartCount } = useCart(); // Get the live count

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-6 py-4 border-b border-slate-100 shadow-sm">
      <button className="rounded-full bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-red-600">
        <Menu size={20} />
      </button>
      
      <Link href="/home" className="flex items-center gap-2">
        <Pizza className="text-red-600" size={24} />
        <span className="text-xl font-black tracking-tight text-slate-900">SliceDrop</span>
      </Link>
      
      {/* Make the cart button a Link to the cart page */}
      <Link href="/cart" className="relative rounded-full bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-red-600">
        <ShoppingCart size={20} />
        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white shadow-sm">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
}