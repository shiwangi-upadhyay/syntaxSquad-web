"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PromoBanner from '../components/PromoBanner';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';
import { categories, topPicks } from '../lib/dummyData';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  // 1. Setup state for searching and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // 2. The Filter Logic
  const filteredProducts = topPicks.filter((product) => {
    // Check if it matches the category
    // (Note: using .includes() or rough matching in case dummyData categories have an 's' like 'Pizzas' vs 'Pizza')
    const matchesCategory = activeCategory === 'All' || product.category.toLowerCase().includes(activeCategory.toLowerCase().replace('s', ''));
    
    // Check if it matches the search bar text
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-[100dvh] bg-slate-50 pb-24 font-sans text-slate-900 md:pb-10">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        
        {/* Pass the state setter to the SearchBar */}
        <SearchBar onSearch={setSearchTerm} />

        <PromoBanner />

        {/* Pass the state and setter to the CategoryList */}
        <CategoryList 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        {/* Top Picks Section */}
        <div className="mb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              {searchTerm ? `Search results for "${searchTerm}"` : activeCategory === 'All' ? 'Top picks for you' : `${activeCategory} Menu`}
            </h2>
            {!searchTerm && (
              <button className="flex items-center gap-1 text-sm font-bold text-red-600 transition-colors hover:text-red-700">
                View All <ArrowRight size={16} />
              </button>
            )}
          </div>

          {/* Display logic: Grid if items exist, Empty state if nothing matches */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 py-16 text-center">
              <div className="mb-3 rounded-full bg-slate-100 p-4 text-slate-400">
                <SearchX size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No items found</h3>
              <p className="mt-1 text-sm text-slate-500">Try searching for something else or clear your filters.</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
                className="mt-4 rounded-xl bg-red-50 px-6 py-2 text-sm font-bold text-red-600 transition-colors hover:bg-red-100"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </main>

      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}