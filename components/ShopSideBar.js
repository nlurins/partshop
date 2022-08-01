import "@fontsource/montserrat";

export const ShopSideBar = ({categories, onClick}) => {
    console.log(categories)
  
    return (
    <div className="md:max-w-[15%] flex flex-col font-['Montserrat'] text-white text-xl lg:text-3xl font-semibold  text-center lg:self-start lg:text-start lg:sticky top-20 items-center mx-auto">
        <h1 onClick={onClick} className="md:mb-[40%] mb-[5%] text-2xl lg:text-4xl xl:text-5xl hover:cursor-pointer hover:text-blue-gray-200">All Products</h1>
        <ul className="gap-5 flex flex-row lg:flex-col justify-center lg:justify-start lg:self-start mb-10 lg:mb-0">
            {categories.map(unique => {
                console.log(categories)
                return <li className="hover:cursor-pointer hover:text-blue-gray-200" key={unique} onClick={onClick}>{unique}</li>
            })}
            
        </ul>
        
    </div>
  )
}
