import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useState } from "react";
import CartDrawer from "./Components/CartDrawer";

function App() {
  console.log("APP.jsx loded");
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* background overlay when the cart is opened */}

      <div
        className={`transition-all duration-300 ${
          isCartOpen ? "blur-sm pointer-events-none " : ""
        }`}
      >
        <Navbar onCartClick={() => setIsCartOpen(true)} />

        <main className="min-h-screen">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
