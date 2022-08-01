import "@fontsource/montserrat";

export const ShopSideBar = ({categories, onClick}) => {
    console.log(categories)
  
    return (
    <div className="max-w-[15%] flex flex-col font-['Montserrat'] text-white text-4xl font-semibold self-start sticky top-20">
        <h1 onClick={onClick} className="mb-[40%] text-6xl hover:cursor-pointer hover:text-blue-gray-200">All Products</h1>
        <ul className="gap-5 flex flex-col">
            {categories.map(unique => {
                console.log(categories)
                return <li className="hover:cursor-pointer hover:text-blue-gray-200" key={unique} onClick={onClick}>{unique}</li>
            })}
            
        </ul>
        
    </div>
  )
}
