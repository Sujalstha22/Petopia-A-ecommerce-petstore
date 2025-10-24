import { NavLink } from "react-router-dom";
import LOGO from "../assets/LOGO.png";
import Search from "./Search";

const Navbar = () => {
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
                { to: "/cart", label: "CART" },
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
        {/* <Search /> */}
        <NavLink to={"/login"}>
          <button className="px-4 py-2 w-30 border font-[Staatliches] border-orange-900 text-orange-900 font-semibold hover:bg-orange-50 transition rounded-2xl text-lg">
            Log in
          </button>
        </NavLink>

        <button className="px-4 py-2 w-30 mx-4 border font-[Staatliches] border-orange-900 text-orange-900 font-semibold hover:bg-orange-50 transition rounded-2xl text-lg">
          Sign In
        </button>
      </header>
    </div>
  );
};

export default Navbar;
