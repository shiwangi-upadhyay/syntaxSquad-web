import React from 'react';

const InputField = ({ label, icon: Icon, type, placeholder, rightElement, ...props }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">
      {label}
    </label>
    <div className="group relative">
      <Icon className="absolute left-4 top-3 text-slate-400 group-focus-within:text-red-600 transition-colors" size={18} />
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 py-3 pl-12 pr-12 text-sm outline-none focus:border-red-600 focus:ring-4 focus:ring-red-600/10 focus:bg-white transition-all shadow-sm text-black"
        {...props}
      />
      {rightElement && (
        <div className="absolute right-4 top-3 text-slate-400 hover:text-red-600 transition-colors">
          {rightElement}
        </div>
      )}
    </div>
  </div>
);

export default InputField;