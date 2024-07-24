import React from "react";

export default function CartPage({ cartItems }) {
  return (
    <>
      <div className="w-[450px] h-[600px] bg-[#3c3c3c] text-center">
        <h1 className="text-[20px] text-[#d2d2d2] font-semibold">Cart Page</h1>

        <div className="mt-10 w-full px-1 relative">
          {cartItems.map((items) => {
        
            return (
              <div className="flex justify-between items-center mt-3 py-3 px-2 shadow-xl bg-[#3b3b3b] w-full rounded-lg">
                <img
                  className="w-[80px] rounded-lg"
                  src={items.proImg}
                  alt=""
                />
                <h3 className="text-white">{items.proName}</h3>
                <h6 className="text-white">${items.proPrice}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
