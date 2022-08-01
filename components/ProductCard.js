

export const ProductCard = ({title, price, click}) => {
  return (
    <div className="container flex flex-col gap-2 text-2xl ">
        <div className="flex justify-between">
            <h1 className="max-w-[250px] text-center">{title}</h1>
            <h1 className="text-xl max-w-[250px] text-center">${price}</h1>
        </div>
        <div className="w-[100%] h-[100%] max-h-[250px] bg-blue-gray-200 hover:scale-110 transition transform shadow-xl mx auto flex flex-col justify-center items-center">
            
        </div>
        <button onClick={click} id={title} className="border bg-green-500 p-5 border-green-500 shadow-xl">ADD TO CART</button>
        
        
        
    </div>
  )
}
