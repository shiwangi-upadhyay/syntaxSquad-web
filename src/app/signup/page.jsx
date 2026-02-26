"use client";

import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ShoppingBag, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AuthLayout from '../../components/AuthLayout';
import InputField from '../../components/InputField';

export default function SignupPage() {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    // 1. Gather the data from the form
    const signupData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: e.target.role.value // This will now correctly be "BUYER" or "SELLER"
    };

    // --- MOCK API CALL ---
    // Later, you will send this to your backend (e.g., POST /auth/register)
    console.log("Sending to backend:", signupData);

    // 2. Route the user based on the role they selected
    if (signupData.role === "SELLER") {
      router.push('/seller/dashboard');
    } else {
      router.push('/');
    }
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join the network to start ordering or managing your store." 
      isLogin={false}
    >
      {/* Attached the submit handler to the form */}
      <form onSubmit={handleSignup} className="space-y-4 max-w-md">
        
        {/* Added name="name" */}
        <InputField name="name" label="Full Name" icon={User} type="text" placeholder="Shiwangi Upadhyay" required />
        
        {/* Added name="email" */}
        <InputField name="email" label="Email" icon={Mail} type="email" placeholder="name@example.com" required />
        
        {/* Added name="password" */}
        <InputField 
          name="password"
          label="Password" 
          icon={Lock} 
          type={showPass ? "text" : "password"} 
          placeholder="••••••••" 
          required
          rightElement={
            <button type="button" className="focus:outline-none text-slate-400 hover:text-red-600 transition-colors" onClick={() => setShowPass(!showPass)}>
              {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          }
        />
        
        {/* Retail Operations Role Selection */}
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Account Type</label>
          <div className="group relative">
            <ShoppingBag className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-red-600 transition-colors" size={18} />
            {/* Added name="role" and updated the value options */}
            <select name="role" className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 py-3.5 pl-12 pr-4 text-sm outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 focus:bg-white transition-all shadow-sm text-black cursor-pointer">
              <option value="BUYER">Customer (Order Food)</option>
              <option value="SELLER">Store Manager (Manage Menu)</option>
            </select>
          </div>
        </div>

        {/* Primary Action Button */}
        <button type="submit" className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-bold text-white transition-all hover:bg-red-700 active:scale-[0.98] shadow-lg shadow-red-600/25">
          Create Account
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </AuthLayout>
  );
}