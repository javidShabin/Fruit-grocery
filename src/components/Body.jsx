import { useState } from "react";
import Category from "./Category";
import Header from "./Header";
import Hero from "./Hero";
import categoriData from "./CategoriData";
import Product from "./Product";
import OfferCard from "./OfferCard";
import Social from "./Social";

export default function Body() {

    let [cartItems, setCartItems] = useState([])

  const catData = categoriData.map((items) => {
    return <Category key={items.id} catItems={items} />;
  });

  const addToCart = (props) => {
    setCartItems([...cartItems, props])
  }

  return (
    <>
      <Header cartItems={cartItems}/>
      <div className="overflow-hidden">
        <Hero />
        <div className="category w-full flex justify-center items-center mt-10">
          <div className="container grid grid-cols-2 w-[90%]  md:grid-cols-7">
            {catData}
          </div>
        </div>
        <Product addToCart={addToCart}/>
        <OfferCard />
      </div>
      <Social/>
    </>
  );
}
