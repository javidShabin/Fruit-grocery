import React from "react";

export default function Fproducts(props) {
  const { images, productName } = props;
  return (
    <>
      <div className="wrapper border flex justify-center h-[200px] mt-10 ">
        <div className="">
          <img className="w-[150px]" src={images} alt="" />
          <h3>{productName}</h3>
        </div>
      </div>
    </>
  );
}
