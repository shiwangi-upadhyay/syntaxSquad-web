"use client";

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ChevronRight } from 'lucide-react';
import AuthLayout from '../../components/AuthLayout';
import InputField from '../../components/InputField';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Continue your adventure." 
      isLogin={true}
    >
      <form className="space-y-5 max-w-md">
        
        {/* Email */}
        <InputField 
          label="Email Address" 
          icon={Mail} 
          type="email" 
          placeholder="name@example.com" 
        />
        
        {/* Password */}
        <InputField 
          label="Password" 
          icon={Lock} 
          type={showPass ? "text" : "password"} 
          placeholder="••••••••" 
          rightElement={
            <button 
              type="button" 
              onClick={() => setShowPass(!showPass)}
              className="focus:outline-none"
            >
              {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          }
        />

        {/* Forgot Password Link */}
        <div className="flex justify-end pt-1">
          <a href="#" className="text-xs font-bold text-slate-400 hover:text-black transition-colors">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 font-bold text-white transition-all hover:bg-slate-800 active:scale-[0.98] shadow-xl shadow-black/10">
          Login to Account
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
      </form>
    </AuthLayout>
  );
}