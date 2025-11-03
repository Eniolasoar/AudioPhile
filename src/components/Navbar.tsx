import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#131313] text-white   relative z-50">
      <div className="max-w-7xl w-full sm:w-[80%] mx-auto px-6 flex justify-between items-center border-b border-white/20 py-6">
        {/* Left Section: Mobile Menu + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger (visible on mobile/tablet only) */}
          <button
            className="block lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src="/assets/hamburger.svg"
              alt="menu"
              className="h-5 w-5"
            />
          </button>

          {/* Logo */}
          <img
            src="/assets/logo.svg"
            alt="Audiophile logo"
            className="h-6 cursor-pointer"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 uppercase text-sm tracking-widest">
          {["Home", "Headphones", "Speakers", "Earphones"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[var(--color-primary)] transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Cart */}
        <div className="cursor-pointer">
          <img src="/assets/carts.svg" alt="Cart" className="h-5 w-5" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-sm bg-white text-black transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-8 mt-20 uppercase text-sm tracking-widest font-bold">
          {["Home", "Headphones", "Speakers", "Earphones"].map((item) => (
            <li
              key={item}
              className="list-none cursor-pointer hover:text-[var(--color-primary)] transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
