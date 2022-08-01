import "@fontsource/montserrat";
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
export const CartItem = ({title, price, quantity}) => {


    

    if(quantity > 0) {
        return (
            <li className="mx-auto flex w-full h-28 gap-5 font-['Montserrat'] text-2xl font-bold text-black mt-10">
                <div className="w-40 bg-blue-gray-400"></div>
                <div className="flex flex-col mx-auto container">
                    <div className="flex justify-between w-full">
                        <h1>{title}</h1>
                        <h2>${price * quantity}</h2>
                    </div>
                    <div className="flex align-center justify-center gap-4 mt-6 text-4xl font-bold">
                        <AiOutlinePlus className="cursor-pointer" onClick={() => {
                            
                            quantity++
                            
                        }}/>
                        {quantity}
                        <AiOutlineMinus className="cursor-pointer" onClick={() => {
                            
                            quantity--
                            
                        }} />
                    </div>
                </div>
            </li>
          )
    }
  }

