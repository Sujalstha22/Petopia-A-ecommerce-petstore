import React from "react";
import { Facebook, Instagram, Twitter, PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white py-10 mt-10 relative rounded-t-4xl ">
      <div className="max-w-7xl mx-auto px-6 flex gap-14">
        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-[Staatliches] flex items-center gap-2">
            <PawPrint size={28} className="text-pink-400" />
            Petopia
          </h1>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Where every pet’s joy begins! 🐾 Your one-stop destination for
            pawsome products and happy tails.
          </p>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Your trusted pet store for food, toys, and love ❤️
          </p>

          <p className="mt-4 text-gray-400 text-sm absolute bottom-9">
            © {new Date().getFullYear()} Petopia. All rights reserved. Privacy
            Policy . Terms & Conditions
          </p>
          <div className="flex absolute bottom-9 right-9 space-x-4">
            <a href="#" className="hover:text-pink-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Instagram />
            </a>
            <a href="#" className="hover:text-pink-400">
              <Twitter />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-[Staatliches] font-semibold mb-4">
            Menu
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-pink-400">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-pink-400">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-pink-400">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-[Staatliches] font-semibold mb-4">
            Contact Info
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            📍 Bakhundol, Lalitpur, Nepal
          </p>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            📞 +977-9812345678
          </p>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            ✉️ support@pawsshop.com
          </p>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            🕒 Mon - Fri: 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
