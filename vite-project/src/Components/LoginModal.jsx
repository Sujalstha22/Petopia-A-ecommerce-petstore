import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, X } from "lucide-react";

const LoginModal = ({ isOpen, onClose }) => {
  const [type, setType] = useState("password");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 🐾 Soft transparent overlay with blur */}
          <motion.div
            className="fixed inset-0 bg-[rgba(255,255,255,0.3)] backdrop-blur-sm z-40 flex justify-center items-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* 🐾 Floating paw prints */}
            <motion.div
              className="absolute top-10 left-20 text-orange-200 text-4xl select-none"
              animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🐾
            </motion.div>

            <motion.div
              className="absolute bottom-10 right-16 text-orange-300 text-3xl select-none"
              animate={{ y: [0, 15, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              🐕
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/3 text-orange-100 text-2xl select-none"
              animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              🐾
            </motion.div>

            {/* 🐾 Modal Box */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-6 w-[400px] z-50 border border-orange-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute right-3 top-3 text-gray-500 hover:text-orange-600"
                onClick={onClose}
              >
                <X size={20} />
              </button>

              <h2 className="text-center text-2xl font-[Staatliches] text-orange-700 mb-5">
                Login to PetoPIa 🐾
              </h2>

              <form className="space-y-5 font-[Poppins]">
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="false"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 rounded-md p-2 outline-none text-orange-500 focus:border-orange-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-gray-600 text-sm mb-1">
                    Password
                  </label>
                  <input
                    type={type}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-md p-2 pr-10 outline-none text-orange-500 focus:border-orange-400"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setType(type === "password" ? "text" : "password")
                    }
                    className="absolute right-3 top-8 text-orange-500 hover:text-orange-700"
                  >
                    {type === "password" ? (
                      <Eye size={18} />
                    ) : (
                      <EyeOff size={18} />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white rounded-md py-2 font-semibold hover:bg-orange-600 transition"
                >
                  Login 🐶
                </button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
