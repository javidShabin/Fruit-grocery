import React from "react";
import { offer1, offer2, offerBg } from "../assets";

export default function OfferCard() {
  return (
    <div className="mt-9 px-[50px] ">
      <div className="container flex justify-around">
        <div
          className="bg-cover bg-center w-[650px] bg-orange-200 flex justify-between items-center px-5 rounded-md"
          style={{ backgroundImage: `url(${offerBg})` }}
        >
          <div>
            <label className="py-1 px-2 bg-orange-400 text-white leading-[50px]">Free Delivery</label>
            <h2 className="text-[30px] text-blue-950">Free delivery over $50</h2>
            <p className="text-gray-600">
              Shop $50 product and get free <br />
              delivery anywhere.
            </p>
            <button className="py-1 px-2 bg-blue-600 text-white">Shop Now</button>
          </div>
          <div>
            <img src={offer1} alt="" />
          </div>
        </div>

        <div
          className="bg-cover bg-center w-[650px] bg-green-200 flex justify-between items-center ounded-md"
          style={{ backgroundImage: `url(${offerBg})` }}
        >
          <div className="ml-5">
            <label className="py-1 px-2 bg-green-400 text-white leading-[50px]">60% Off</label>
            <h2 className="text-[30px] text-blue-950">Organic Food</h2>
            <p className="text-gray-600">
              Save up to 60% off on your <br />
              first order
            </p>
            <button className="py-1 px-2 bg-blue-600 text-white">Shop Now</button>
          </div>
          <div className="mt-8">
            <img src={offer2} alt="" />
          </div>
        </div>
      </div>
    </div>
    // <div className="mx-auto">
    //   <div className="container grid grid-cols-2">
    //     <div
    //       className="hero bg-cover bg-center w-[600px] bg-orange-200"
    //       style={{  }}
    //     >

    //       <img src={offer1} alt="" />
    //     </div>

    //     <div
    //       className="hero bg-cover bg-center w-[600px] bg-green-200"
    //       style={{ backgroundImage: `url(${offerBg})` }}
    //     >
    //       <img src={offer2} alt="" />
    //     </div>
    //   </div>
    // </div>
  );
}
