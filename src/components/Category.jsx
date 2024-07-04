
export default function Category({catItems}) {
    
  return (
    <>
      <article className="flex flex-col justify-center items-center gap-6 shadow-2xl ml-2 mr-2 rounded-lg">
        <img src={catItems.imgSrc}/>
        <h3>{catItems.name}</h3>
      </article>
    </>
  )
}
