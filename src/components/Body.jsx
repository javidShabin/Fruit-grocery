import Category from "./Category";
import Header from "./Header";
import Hero from "./Hero";
import categoriData from "./CategoriData";

export default function Body() {

    const catData = categoriData.map(items => {
        return(
            <Category key={items.id} catItems={items} />
        )
    })

  return (
    <>
      <Header />
      <Hero />
      <div className="category w-full flex justify-center items-center mt-10">
        <div className="container grid grid-cols-1 w-[90%]  md:grid-cols-7">
        {catData}
        </div>
      </div>
    </>
  );
}
