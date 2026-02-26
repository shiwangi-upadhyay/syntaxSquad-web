"use client";

import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ShoppingBag, ChevronRight } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';
import InputField from '../../components/InputField';

export default function SignupPage() {
  const [showPass, setShowPass] = useState(false);

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Your next great meal is just a few clicks away." 
      isLogin={false}
    >
      <form className="space-y-4 max-w-md">
        
        <InputField label="Full Name" icon={User} type="text" placeholder="Shiwangi Upadhyay" />
        <InputField label="Email" icon={Mail} type="email" placeholder="name@example.com" />
        
        <InputField 
          label="Password" 
          icon={Lock} 
          type={showPass ? "text" : "password"} 
          placeholder="••••••••" 
          rightElement={
            <button type="button" className="focus:outline-none" onClick={() => setShowPass(!showPass)}>
              {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          }
        />
        
        {/* Retail Operations Role Selection */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Account Type</label>
          <div className="group relative">
            <ShoppingBag className="absolute left-4 top-3 text-slate-400 group-focus-within:text-red-600 transition-colors" size={18} />
            <select className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-12 pr-4 text-sm outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 focus:bg-white transition-all shadow-sm text-black cursor-pointer">
              <option value="CUSTOMER">Customer (Order Food)</option>
              <option value="STAFF">Store Staff / Delivery Partner</option>
            </select>
          </div>
        </div>

        {/* Primary Action Button */}
        <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-bold text-white transition-all hover:bg-red-700 active:scale-[0.98] shadow-lg shadow-red-600/25">
          Start Ordering
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </AuthLayout>
  );
}