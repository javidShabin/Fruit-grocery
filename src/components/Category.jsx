
export default function Category({catItems}) {
    
  return (
    <>
      <article className="border-">
        <img src={catItems.imgSrc} alt="" />
        <h3>{catItems.name}</h3>
      </article>
    </>
  )
}
