import React from 'react'
import logo from "../assets/Logo.svg"
import logo2 from "../assets/logo2.png"
const Productpage = () => {
  return (
    <section>
        <nav className='flex justify-between px-20 py-5'>
            <img src={logo}></img>
            <ul className='flex gap-7 capitalize text-[#6EC1E4] text-lg font-["plus jakarta Sans, san serif"] cursor-pointer'>
                <li className='hover:text-orange-400'>home</li>
                <li className='hover:text-orange-400'>about us</li>
                <li className='hover:text-orange-400'>product</li>
                <li className='hover:text-orange-400'>features</li>
                <li className='hover:text-orange-400'>contact</li>
            </ul>
        </nav>
        <div className=' h-40 flex flex-col gap-7 mt-[82px] justify-center w-full'>
          <h1 className='text-[68px] text-[#31587c] font-[600] text-center capitalize font-["plus jakarta Sans, san serif"]'>products</h1>
          <h3 className='text-center text-[17px] text-[#32597dc4] font-["poppins, san serif"]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br/> ullamcorper mattis, pulvinar dapibus leo.</h3>
          </div>
       {/* Herosection */}
        <section className='flex px-12 mt-24 items-center'>
         <div className='w-[25%] flex flex-col gap-2'>
          <img 
          className='h-[150px] w-[150px] rounded-full'
          src={logo2}></img>
          <h1 className='text-xl capitalize text-[#31587c] font-semibold ml-5'>marketing bot</h1>
         </div>
         <div className='w-[75%] items-center'>
          <div className='w-[100%]'>
            <h1 className='text-3xl font-[700] font-["plus jakarta Sans, san serif"] text-[#31587c]'>Easily automate your marketing campaigns, track leads<br/> and conversions, and optimize your ROI with powerful analytics<br/> and reporting.</h1>
          </div>
         </div>
        </section>
    </section>
  )
}

export default Productpage