import React from "react";
import { offer1, offer2, offerBg } from "../assets";

export default function OfferCard() {
  return (
    <div className="mt-9">
      <div className="container grid grid-cols-2">
        <div
          className="bg-cover bg-center w-[600px] bg-orange-200 flex justify-between items-center px-5 rounded-md"
          style={{ backgroundImage: `url(${offerBg})` }}
        >
          <div>
            <label>Free Delivery</label>
            <h2>Free delivery over $50</h2>
            <p>
              Shop $50 product and get free <br />
              delivery anywhere.
            </p>
            <button>Shop Now</button>
          </div>
          <div>
            <img src={offer1} alt="" />
          </div>
        </div>

        <div
          className="bg-cover bg-center w-[600px] bg-green-200 flex justify-between items-center ounded-md"
          style={{ backgroundImage: `url(${offerBg})` }}
        >
          <div className="ml-5">
            <label>60% Off</label>
            <h2>Organic Food</h2>
            <p>
              Save up to 60% off on your <br />
              first order
            </p>
            <button>Shop Now</button>
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
