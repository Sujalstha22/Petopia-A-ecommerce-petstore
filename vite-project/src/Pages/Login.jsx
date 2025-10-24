import React, { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [type, setType] = useState("password");

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[500px] bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
      >
        {/* Decorative Paw Print */}
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute -top-6 right-6 text-orange-200 text-[100px] select-none"
        >
          🐾
        </motion.div>

        {/* Header */}
        <div className="text-center mb-6">
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-800 font-[Staatliches] text-3xl tracking-wide"
          >
            Login to PetoPia
          </motion.h3>
          <p className="text-gray-500 text-sm font-[Poppins] mt-1">
            Welcome back, friend 🐶
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 font-[Poppins]">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 focus:border-orange-400 outline-none rounded-md p-2 transition text-orange-600"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type={type}
              placeholder="••••••••"
              className="w-full border border-gray-300 focus:border-orange-400 outline-none rounded-md p-2 transition text-orange-600"
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setType(type === "password" ? "text" : "password");
              }}
              className="absolute right-3 top-8 text-orange-500 hover:text-orange-700"
            >
              {type === "password" ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md py-2 font-semibold tracking-wide transition"
          >
            🐾 Login
          </motion.button>

          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <a href="#" className="hover:text-orange-600 transition">
              Forgot Password?
            </a>
            <a href="#" className="hover:text-orange-600 transition">
              Create Account
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
