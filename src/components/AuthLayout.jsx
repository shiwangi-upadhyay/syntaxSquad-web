import React from 'react';
import { Pizza, MapPin } from 'lucide-react';
import Link from 'next/link';

const AuthLayout = ({ children, title, subtitle, isLogin }) => (
  <div className="flex h-[100dvh] w-full bg-white font-sans text-slate-900 overflow-hidden">
    
    {/* LEFT SIDE: Form Container */}
    <div className="flex w-full md:w-1/2 flex-col justify-center overflow-y-auto px-6 py-8 md:px-16 lg:px-24 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
      <div className="mb-8 flex items-center justify-between mt-auto md:mt-0 pt-4 md:pt-0">
        <div className="flex items-center gap-2">
          {/* Vibrant Red for the food brand */}
          <div className="rounded-xl bg-red-600 p-2 text-white shadow-lg shadow-red-600/20">
            <Pizza size={20} />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">SliceDrop</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          <MapPin size={12} className="text-red-600" /> Delivery: Active
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      </div>

      {/* Toggle - Updated active state to Red */}
      <div className="mb-6 inline-flex w-full max-w-sm rounded-2xl bg-slate-100 p-1.5 shrink-0">
        <Link href="/signup" className={`flex-1 text-center rounded-xl py-2 text-sm font-bold transition-all ${!isLogin ? 'bg-red-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>
          Sign Up
        </Link>
        <Link href="/login" className={`flex-1 text-center rounded-xl py-2 text-sm font-bold transition-all ${isLogin ? 'bg-red-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>
          Login
        </Link>
      </div>

      <div className="mb-auto md:mb-0 pb-8 md:pb-0">
        {children}
      </div>
    </div>

    {/* RIGHT SIDE: Immersive Food Visual */}
    <div className="relative hidden w-1/2 p-4 lg:p-6 md:block">
      {/* High-quality Wood-fired Pizza Image */}
      <div className="h-full w-full overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-cover bg-center shadow-2xl relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')` }}>
        
        {/* Dark gradient so the white text pops perfectly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12 lg:p-16 text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-md w-max mb-6 border border-white/30">
             <span className="text-sm font-bold tracking-wider uppercase">🍕 Fast & Secure</span>
          </div>
          <h2 className="mb-4 text-4xl lg:text-5xl font-extrabold leading-tight">
            Hot pizza. Cold drinks. <br /> Delivered <span className="italic text-red-400">seamlessly.</span>
          </h2>
          <p className="text-base lg:text-lg text-white/80 max-w-md">
            Browse our fresh menu of artisanal breads, sides, and signature pies. Secure your order in seconds.
          </p>
        </div>
      </div>
    </div>
    
  </div>
);

export default AuthLayout;