import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi"; // ✅ import the hamburger icon

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const mobileNav = () => {
    setIsMobileNav(!isMobileNav);
  };

  return (
    <nav className="absolute right-0 flex items-center justify-end lg:px-20 py-5 z-20 w-full">
      {/* Desktop Menu */}
      <ul className="lg:flex gap-7 capitalize text-[#6EC1E4] text-lg font-['Plus Jakarta Sans', sans-serif] cursor-pointer hidden">
        <li className="hover:text-orange-400">Home</li>
        <li className="hover:text-orange-400">About Us</li>
        <li className="hover:text-orange-400">Product</li>
        <li className="hover:text-orange-400">Features</li>
        <li className="hover:text-orange-400">Contact</li>
      </ul>

      {/* Mobile view Button */}
      <button
        onClick={mobileNav}
        className="lg:hidden pr-2 bg-white text-[#31587c] px-3 py-2 text-xl border border-[#6EC1E4] rounded-md"
      >
        {isMobileNav ? <IoClose /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
