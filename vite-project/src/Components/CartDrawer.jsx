import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CartDrawer = ({ isOpen, onClose, cartItems = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Drawer */}
            <motion.div
              className="absolute right-0 top-0 h-full w-[40%] bg-white shadow-xl z-50 flex flex-col"
              drag="x"
              dragConstraints={{ left: 0, right: 300 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.point.x > 100) onClose(); // close if dragged enough
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b-2 border-orange-400 ml-2 mr-2 ">
                <h2 className="text-lg font-semibold text-orange-400">
                  Your Cart
                </h2>
                <button onClick={onClose}>
                  <X size={20} color="orange" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">No items in your cart.</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Footer / Checkout */}
              <div className="p-4 border-t">
                <div className="flex justify-between text-black mb-3 border-t-2 border-gray-400 p-2">
                  <p className="text-black text-lg">
                    Total <br /> Shipping
                  </p>
                  <div>
                    <p className="font-bold text-xl text-center">Rs.988</p>
                    <br />
                    <p className="text-sm text-gray-500">
                      Total Cost will appear on checkout
                    </p>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                  Checkout
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
