"use client";

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation'; // 1. Import the Next.js router
import AuthLayout from '../../components/AuthLayout';
import InputField from '../../components/InputField';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter(); // 2. Initialize the router

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission page reload

    // Grab the email value directly from the form for this quick test
    const email = e.target.email.value;

    // --- MOCK API CALL ---
    // Later, replace this with your Spring Boot fetch/axios call:
    // const response = await axios.post('http://localhost:8080/api/login', { email, password });
    // const userRole = response.data.role;
    
    // For testing: If email is staff@example.com, make them STAFF. Otherwise, CUSTOMER.
    const userRole = email === "staff@example.com" ? "BUYER" : "SELLER"; 

    // 3. The Routing Logic
    if (userRole === "STAFF") {
      router.push('/seller/dashboard'); 
    } else {
      router.push('/'); // Or just '/' if your main page is there
    }
  };

  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Your next great meal is just a few clicks away." 
      isLogin={true}
    >
      {/* Attach the submit handler to the form */}
      <form onSubmit={handleLogin} className="space-y-4 max-w-md">
        
        {/* Email */}
        <InputField 
          label="Email Address" 
          icon={Mail} 
          type="email" 
          name="email" // Added name attribute to easily grab the value
          placeholder="name@example.com" 
          required
        />
        
        {/* Password */}
        <InputField 
          label="Password" 
          icon={Lock} 
          type={showPass ? "text" : "password"} 
          name="password"
          placeholder="••••••••" 
          required
          rightElement={
            <button 
              type="button" 
              onClick={() => setShowPass(!showPass)}
              className="focus:outline-none text-slate-400 hover:text-red-600 transition-colors"
            >
              {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
            </button>
          }
        />

        {/* Forgot Password Link */}
        <div className="flex justify-end pt-1">
          <a href="#" className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button - Updated to SliceDrop Red */}
        <button 
          type="submit" 
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-4 font-bold text-white transition-all hover:bg-red-700 active:scale-[0.98] shadow-lg shadow-red-600/25"
        >
          Login to Account
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
      </form>
    </AuthLayout>
  );
}