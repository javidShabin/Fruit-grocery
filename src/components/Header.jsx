import { useState } from "react";
import { logo } from "../assets";
import CartPage from "./CartPage";

function Header({cartItems}) {
   console.log(cartItems)
  let [showBar, setShowBar] = useState(false);

  const showToggleBar = (event) => {
    const postionClick = event.target.className;
    if (postionClick === "ri-shopping-cart-2-fill") {
      setShowBar((prevShowBar) => !prevShowBar);
    }
  };

  return (
    <>
      <header
        className="flex bg-white justify-center items-center w-full h-[90px] shadow-lg sticky top-0 left-0"
        onClick={showToggleBar}
      >
        <div className="container w-[90%] flex justify-between items-center relative">
          <div className="logo flex items-center">
            <img src={logo} className="w-10" />
            <span>
              <b>Groce</b>
            </span>
          </div>
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Items</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="icons hidden md:flex gap-5 text-xl">
            <i className="ri-user-fill"></i>
            <i className="ri-shopping-cart-2-fill"></i>
          </div>

          <div
            className={`absolute top-[75px] bg-[#020202c7] w-full h-[50vh] rounded-lg flex justify-center items-center md:hidden`}
          >
            <ul className="text-lg text-[#fff]">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="mt-8">
                <a href="#">About</a>
              </li>
              <li className="mt-8">
                <a href="#">Items</a>
              </li>
              <li className="mt-8">
                <a href="#">Contact</a>
              </li>
              <div className="icons mt-8">
                <i className="ri-user-fill mr-5 text-xl"></i>
                <i className="ri-shopping-cart-2-fill text-xl"></i>
              </div>
            </ul>
          </div>

          <div className="toggle-icon text-2xl font-semibold md:hidden">
            {/* Toggle menu button */}
            <i className="ri-menu-fill cursor-pointer"></i>
          </div>

          {/* Toggle bar */}
          <div className="absolute top-[65px] right-[-75px] ">
            {showBar && <CartPage  cartItems={cartItems} />}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
