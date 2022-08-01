

export const ProductCard = ({title, price}) => {
  return (
    <div className="container flex flex-col gap-2 text-2xl ">
        <div className="w-[100%] h-[100%] max-h-[250px] bg-blue-gray-200 hover:scale-110 transition transform shadow-xl">

        </div>
        <h1 className="max-w-[250px] text-center">{title}</h1>
        <h1 className="text-xl max-w-[250px] text-center">${price}</h1>
        
    </div>
  )
}
