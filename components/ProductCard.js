

export const ProductCard = ({title, price, click, inStock}) => {
  return (
    <div className="container flex flex-col gap-2 text-2xl ">
        <div className="flex justify-between">
            <h1 className="max-w-[250px] text-center overflow-clip">{title}</h1>
            <h1 className="text-xl max-w-[250px] text-center">${price}</h1>
        </div>
        <div className="w-[100%] h-[100%] min-h-[250px] max-h-[250px] bg-blue-gray-200 hover:scale-110 transition transform shadow-xl mx auto flex flex-col justify-center items-center">
            
        </div>
        {inStock && <button onClick={click} id={title} className="hover:scale-110 transition transform border bg-green-500 p-5 border-green-500 shadow-xl">ADD TO CART</button>}
        {!inStock && <button id={title} className=" border bg-red-700 p-5 border-red-700 shadow-xl">OUT OF STOCK</button>}
        
        
        
    </div>
  )
}
