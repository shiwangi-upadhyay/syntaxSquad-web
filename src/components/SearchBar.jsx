import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

// Accept the onSearch function as a prop
export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="group relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-red-600" size={20} />
        <input 
          type="text" 
          placeholder="Search for pizza, drinks..." 
          // Fire the onSearch function every time the user types
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition-all focus:border-red-600 focus:ring-2 focus:ring-red-600/10"
        />
      </div>
      <button className="rounded-2xl bg-red-600 p-3.5 text-white transition-transform active:scale-95">
        <SlidersHorizontal size={20} />
      </button>
    </div>
  );
}