import { IoMenu, IoClose } from "react-icons/io5";


import React, { useState } from "react";




const Navbar = () => {
    const [isMobileNav, setIsMobileNav ] = useState("false");

    const mobileNav = () => {
        setIsMobileNav(!isMobileNav);
    }
  return (
    <nav className='flex justify-between lg:px-20 py-5'>
            {/* <img src={logo}></img> */}
            <ul className='lg:flex gap-7 capitalize text-[#6EC1E4] text-lg font-["plus jakarta Sans, san serif"] cursor-pointer hidden'>
                <li className='hover:text-orange-400'>home</li>
                <li className='hover:text-orange-400'>about us</li>
                <li className='hover:text-orange-400'>product</li>
                <li className='hover:text-orange-400'>Features</li>
                <li className='hover:text-orange-400'>contact</li>
            </ul>
            <button onClick={mobileNav} className='lg:hidden pr-2 bg-white text-[#31587c] px-3 py-2 text-xl border-[1px] border-[#6EC1E4]'>{isMobileNav? <IoClose /> :<GiHamburgerMenu />}</button>
        </nav>
  );
};

export default Navbar;
