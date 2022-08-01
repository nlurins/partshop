import "@fontsource/montserrat";

export const CartItem = ({title, price}) => {
  return (
    <li className="mx-auto flex w-full h-28 gap-5 font-['Montserrat'] text-2xl font-bold text-black mt-10">
        <div className="w-40 bg-blue-gray-400"></div>
        <div className="flex flex-col mx-auto container">
            <div className="flex justify-between w-full">
                <h1>{title}</h1>
                <h2>${price}</h2>
            </div>
            <div>

            </div>
        </div>
    </li>
  )
}
