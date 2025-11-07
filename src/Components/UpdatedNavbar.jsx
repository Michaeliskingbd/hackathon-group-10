import React, { useState } from 'react'
import logo from "../assets/Logo.svg"
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const UpdatedNavbar = () => {
    
        const [isMobileNav, setIsMobileNav ] = useState("false");
    
        const mobileNav = () => {
            setIsMobileNav(!isMobileNav);
        }
  return (
    <section>
        <nav className='flex justify-between lg:px-20 py-5'>
                    <img src={logo}></img>
                    <ul className='lg:flex gap-7 capitalize text-[#6EC1E4] text-lg font-["plus jakarta Sans, san serif"] cursor-pointer hidden'>
                        <li className='hover:text-orange-400'>home</li>
                        <li className='hover:text-orange-400'>about us</li>
                        <li className='hover:text-orange-400'>product</li>
                        <li className='hover:text-orange-400'>Features</li>
                        <li className='hover:text-orange-400'>contact</li>
                    </ul>
                    <button onClick={mobileNav} className='lg:hidden pr-2 bg-white text-[#31587c] px-3 py-2 text-xl border-[1px] border-[#6EC1E4]'>{isMobileNav? <IoClose/> :<GiHamburgerMenu />}</button>
                </nav>
                  {/* Mobile navbar */}

         {isMobileNav && <nav className='bg-[#ccf5ee] absolute top-0 w-[100%] mt-28 h-[400px] lg:hidden'>
           <ul className='capitalize flex flex-col gap-10 px-4 pt-12 text-base'>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>home</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>about us</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>product</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>features</li>
            <li className=' text-[#1ca6af] cursor-pointer hover:text-[#f2a341]'>contact</li>
            </ul> 
          </nav>}
    </section>
  )
}

export default UpdatedNavbar