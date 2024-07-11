import React from "react";
import { offer1, offer2 } from "../assets";

export default function OfferCard() {
  return (
    <div>
      <div className="container">
        <div>
            <img src={offer1} alt="" />
        </div>
        <div>
            <img src={offer2} alt="" />
        </div>
      </div>
    </div>
  );
}
