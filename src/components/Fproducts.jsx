import React from "react";

export default function Fproducts(props) {
  const { images, productName } = props;
  return (
    <>
      <div className="wrapper border flex justify-center h-[200px] mt-10 ">
        <div className="">
          <img className="w-[150px]" src={images} alt="" />
          <h3>{productName}</h3>
          <ul className="flex">
            <li>
              <i class="ri-star-s-fill"></i>
            </li>
            <li>
              <i class="ri-star-s-fill"></i>
            </li>
            <li>
              <i class="ri-star-s-fill"></i>
            </li>
            <li>
              <i class="ri-star-s-fill"></i>
            </li>
            <li>
              <i class="ri-star-s-fill"></i>
            </li>
          </ul>
          <span>By:Mfood</span>
          <div className="flex justify-between">
            <p>2$</p>
            <button>
              <i class="ri-shopping-cart-2-line"></i>Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
