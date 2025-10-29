import React from 'react'

const ProductCard_TextLast = () => {
  return (
    <div className='mt-10 flex lg:flex-row flex-col gap-16 justify-center items-center'>
      <img src={image} alt="" />
      <div className='flex flex-col gap-5 text-left px-6'>
        <p className='text-xl text-orange-500 uppercase'>{title}</p>
        <p className='lg:text-3xl text-[#31587c] font-plus-jakarta text-xl hover:cursor-pointer'>{description}</p>
        <ul className='flex flex-col text-[#1CA6AF] gap-2 hover:text-orange-500'>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
      </div>
    </div>
  )
}

export default ProductCard_TextLast