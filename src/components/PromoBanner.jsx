import React from 'react';

export default function PromoBanner() {
  return (
    <div className="mb-8 relative overflow-hidden rounded-3xl bg-red-600 px-6 py-8 sm:px-10 sm:py-10 lg:py-12 text-white shadow-sm">
      <div className="relative z-10 max-w-[55%] sm:max-w-[50%]">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
          Limited Time
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight mb-2">
          Best deals on <br /> crispy crusts!
        </h2>
        <p className="text-xs sm:text-sm font-medium text-red-100 mb-5 lg:mb-6">
          Flat 30% OFF on all large pies. Use code <strong>SLICE30</strong>.
        </p>
        <button className="rounded-xl bg-white px-5 py-2 sm:px-6 sm:py-2.5 text-sm font-bold text-red-600 transition-transform active:scale-95 hover:bg-red-50">
          Order Now
        </button>
      </div>
      {/* Decorative Pizza Image */}
      <img
        src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=300&auto=format&fit=crop"
        alt="Pizza"
        className="absolute -right-4 top-1/2 -translate-y-1/2 h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 object-cover rotate-12 drop-shadow-md"
      />
    </div>
  );
}