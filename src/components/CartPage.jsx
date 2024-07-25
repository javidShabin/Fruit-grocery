import React from "react";

export default function CartPage({ cartItems }) {

    console.log(cartItems)

    const orderNowFunc = () => {
        if (!cartItems) {
            alert("Redy")
        }else{
            alert("Not Redy")
        }
    }

  return (
    <>
      <div className="w-[450px] h-[610px] bg-[#3c3c3c] text-center rounded-sm relative">
        <h1 className="text-[20px] font-semibold border w-[200px] mx-auto bg-[#ffffff] text-black rounded-md">
          Cart Page
        </h1>
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
        <button onClick={orderNowFunc}
          className="absolute bottom-3 left-3 bg-yellow-500 
        text-white rounded-md text-[15px] py-1 px-4"
        >
          Order Now
        </button>
      </div>
    </>
  );
}
