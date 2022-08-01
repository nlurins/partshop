import "@fontsource/montserrat";

export const ShopSideBar = ({categories}) => {
    console.log(categories)
  
    return (
    <div className="max-w-[15%] flex flex-col font-['Montserrat'] text-white text-4xl font-semibold self-start sticky top-20">
        <h1 className="mb-[40%] text-6xl">All Products</h1>
        <ul className="gap-5 flex flex-col">
            {categories.map(unique => {
                console.log(categories)
                return <li key={unique}>{unique}</li>
            })}
            
        </ul>
    </div>
  )
}
