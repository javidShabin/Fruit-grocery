import React from 'react'
import productData from './ProductData'
import Fproducts from './Fproducts'

export default function Product() {
    const product = productData.map((items) => {
        return <Fproducts key={items.id} images={items.imgSrc} productName={items.name} />
    })
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

<div className="product w-full flex justify-center text-justify">
    <div className="container w-[90%] grid grid-cols-5 gap-6">
        {product}
    </div>
</div>

   </div>
  )
}
