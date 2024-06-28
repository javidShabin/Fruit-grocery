import React from "react";
import { heroImg } from "../assets";
import { bg } from "../assets";

export default function Hero() {
  return (
    <div
      className="hero bg-cover bg-center w-full h-[70vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container flex justify-between items-center overflow-hidden">
        <div className="left ml-10 mt-10">
          <h1 className="text-[#60b8fc] text-[60px]">
            Dont miss our daily <br /> amazing deal
          </h1>
          <p className="text-[#7f7f7f] text-[20px]">
            Save up to 60% off on your first order
          </p>
          <div>
            <input type="text" />
            <button>Search</button>
          </div>
        </div>
        <div className="right">
          <img src={heroImg} className="w-[37rem]" />
        </div>
      </div>
    </div>
  );
}
