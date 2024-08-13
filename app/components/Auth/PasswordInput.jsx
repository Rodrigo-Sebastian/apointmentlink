'use client';

import { useState } from "react";

const PasswordInput = ({ label, value, onChange}) => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
        <label className="text-xl">
            {label}
        </label>
        <div className="flex flex-row items-center gap-4">
            <input 
                className='border rounded-md h-[40px] w-[430px] outline-none'
                type={showPassword ? 'text' : 'password'} 
                value={value}
                onChange={onChange}
            />
            <button
                className="border p-2 rounded-md bg-slate-500 text-white"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? 'Hide' : 'Show'}
            </button>
        </div>
    </div>
  )
}

export default PasswordInput