import React from 'react';
import { Home, Grid, ShoppingBag, User } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Grid, label: 'Menu', active: false },
    { icon: ShoppingBag, label: 'Cart', active: false },
    { icon: User, label: 'Profile', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-20 w-full bg-white border-t border-slate-100 px-6 py-3 md:hidden">
      <div className="flex items-center justify-between max-w-sm mx-auto">
        {navItems.map((item, index) => (
          <button key={index} className={`flex flex-col items-center gap-1 ${item.active ? 'text-red-600' : 'text-slate-400 hover:text-slate-600'}`}>
            <item.icon size={24} className={item.active ? 'fill-current' : ''} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}