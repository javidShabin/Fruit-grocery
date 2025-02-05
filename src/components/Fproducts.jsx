import React from "react";

export default function Fproducts(props) {
const addToCart = props.addToCart
  const { images, productName, productPrice } = props;

  return (
    <>
      <div className="wrapper border flex justify-center h-[280px] mt-10 ">
        <div className="">
          <img className="w-[200px] mt-2" src={images} alt="" />
          <h3 className="mt-5">{productName}</h3>
          <ul className="flex text-[20px]">
            <li>
              <i className="ri-star-s-fill text-yellow-400"></i>
            </li>
            <li>
              <i className="ri-star-s-fill  text-yellow-400"></i>
            </li>
            <li>
              <i className="ri-star-s-fill  text-yellow-400"></i>
            </li>
            <li>
              <i className="ri-star-s-fill  text-yellow-400"></i>
            </li>
            <li>
              <i className="ri-star-s-fill  text-yellow-400"></i>
            </li>
          </ul>
          <span>By:Mfood</span>
          <div className="flex justify-between mt-2">
            <p>{productPrice}$</p>
            <button onClick={()=>{addToCart({
                proImg : images, 
                proName: productName, 
                proPrice: productPrice})}} className="bg-blue-400 py-1 px-2 rounded-md pointer duration-150 ease-in-out hover:bg-blue-500">
              <i className="ri-shopping-cart-2-line hover:text-gray-800"></i>Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
