import React from "react";
import { offerBg } from "../assets";

export default function Social() {
  return (
    <>
      <div
        className="w-full bg-green-300 h-[550px] mt-[50px]"
        style={{ backgroundImage: `url(${offerBg})` }}
      >
        <h1>Redy</h1>
      </div>
    </>
  );
}
