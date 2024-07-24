
export default function Category({catItems}) {
    
  return (
    <>
      <article className="bg-white flex flex-col justify-center items-center gap-10 shadow-2xl ml-2 mr-2 rounded-lg mb-10 h-[200px] overflow-hidden hover:scale-125">
        <img className="hover:w-[110px]" src={catItems.imgSrc}/>
        <h3>{catItems.name}</h3>
      </article>
    </>
  )
}
