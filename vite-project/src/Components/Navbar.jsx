import { NavLink } from "react-router-dom";
import LOGO from "../assets/LOGO.png";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Search from "./Search";
import { useState } from "react";
import LoginModal from "./LoginModal";
import SignInModal from "./SignInModal";

const Navbar = ({ onCartClick }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  return (
    <div className="bg-orange-100">
      <header className="px-9 py-3 mx-5 flex items-center">
        <div className="container  mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center bg-white rounded-2xl">
            <a href="/" className="flex items-center space-x-2">
              <img src={LOGO} alt="Logo" className="h-12  w-40 object-fill" />
            </a>

            <ul className="flex space-x-8 px-10 py-3 font-[Staatliches]">
              {[
                { to: "/about", label: "ABOUT US" },
                { to: "/shop", label: "SHOP" },
                { to: "/contact", label: "CONTACT" },
                { to: "/blog", label: "BLOG" },
              ].map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-800 font-semibold border-b-4 border-orange-800 pb-1 text-xl"
                        : "text-orange-900 hover:text-orange-500 text-lg"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <button
          className="px-4 py-2 w-30 mx-4 border font-[Staatliches] border-orange-900 text-orange-900 font-semibold hover:bg-orange-50 transition rounded-2xl text-lg"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>

        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

        <button
          className="px-4 py-2 w-30 mx-4 border font-[Staatliches] border-orange-900 text-orange-900 font-semibold hover:bg-orange-50 transition rounded-2xl text-lg"
          onClick={() => setShowSignin(true)}
        >
          Sign In
        </button>
        <SignInModal isOpen={showSignin} onClose={() => setShowSignin(false)} />

        <button onClick={onCartClick} className="relative p-2">
          <PiShoppingCartSimpleFill className="text-orange-500 w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
      </header>
    </div>
  );
};

export default Navbar;
