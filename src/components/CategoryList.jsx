import React from 'react';
import { ArrowRight } from 'lucide-react';

// Accept activeCategory and onSelectCategory as props
export default function CategoryList({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-lg font-bold text-slate-900">Shop by category</h2>
        <button className="flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-700">
          View All <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* The "All" Button */}
        <div 
          onClick={() => onSelectCategory('All')}
          className="group flex shrink-0 cursor-pointer flex-col items-center gap-2"
        >
          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300 ${activeCategory === 'All' ? 'bg-red-600 text-white shadow-md shadow-red-600/20' : 'bg-slate-50 text-slate-400 group-hover:bg-red-50 group-hover:text-red-600'}`}>
              <span className="text-sm font-black">All</span>
          </div>
          <span className={`text-xs font-bold transition-colors ${activeCategory === 'All' ? 'text-red-600' : 'text-slate-500 group-hover:text-red-600'}`}>Everything</span>
        </div>

        {/* The Dynamic Categories */}
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          
          return (
            <div 
              key={cat.id} 
              onClick={() => onSelectCategory(cat.name)}
              className="group flex shrink-0 cursor-pointer flex-col items-center gap-2"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${isActive ? 'bg-red-600 shadow-md shadow-red-600/20 ring-2 ring-red-600 ring-offset-2' : 'bg-slate-50 group-hover:bg-red-50'}`}>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className={`h-10 w-10 rounded-lg object-cover ${isActive ? 'mix-blend-normal' : 'mix-blend-multiply'}`}
                />
              </div>
              <span className={`text-xs font-bold transition-colors ${isActive ? 'text-red-600' : 'text-slate-500 group-hover:text-red-600'}`}>{cat.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}