import React from 'react'

export default function Product() {
  return (
   <div className='w-full'>
    <div className="container flex justify-between px-[50px] mt-6">
    <h2 className='text-[30px] text-gray-600'>Featured Products</h2>
    <ul className='flex gap-6 font-medium text-gray-500'>
        <li>All</li>
        <li>Vegtables</li>
        <li>Fruits</li>
        <li>Cofee&Tea</li>
        <li>Meat</li>
    </ul>
    </div>
   </div>
  )
}
