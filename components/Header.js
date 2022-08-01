import { BsCart3 } from 'react-icons/bs'
import "@fontsource/montserrat";
import Link from 'next/link';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import { useState } from 'react';
import { CartItem } from './CartItem';

export const Header = ({cart, handleMinus, handlePlus}) => {
  const [active, setActive] = useState('hidden');

  
  const checkLength = cart.filter(item => item.quantity > 0)
  
 
  
  return (
    <div>
       <div className= {`${active} font-["Montserrat"] text-6xl text-black font-bold z-50`}>
         <div className='fixed min-h-[100vh] min-w-[100%] bg-black opacity-40 z-20'>
          </div>
          <div className='fixed h-[100vh] top-0 bottom-0 overflow-y-scroll w-[30%] bg-white right-0 border shadow-xl z-50'>
          <div className='container flex flex-col w-[90%] mx-auto pt-[5%]'>
            <AiOutlineCloseSquare className='self-end mb-10 cursor-pointer hover:text-blue-gray-200' onClick={() => {
              setActive('hidden')
            }}/>
            <h1 className='underline text-center'>Shopping Cart</h1>
            <ul>
              {cart.map(item => {
                return <CartItem key={item.title} title={item.title} price={item.price} quantity={item.quantity} 
                onPlusClick={() => handlePlus(item.title)} onMinusClick={() => handleMinus(item.title)}/>
              })}
            </ul>
          </div>
          </div>
       </div>
      <div className="container flex max-w-[90%] pt-28 mx-auto justify-between ">
          <Link href="/"><a className="font-['Montserrat'] tracking-wider text-4xl text-white font-bold hover:text-blue-gray-200">CAR PARTS AND SERVICES</a></Link>
          <div className="flex font-['Montserrat']  text-3xl text-white gap-20">
              <Link href="/shop"><a className='hover:text-blue-gray-200'>Shop</a></Link>
              <a className='hover:text-blue-gray-200'>Contacts</a>
              {checkLength.length > 0 && 
                <div className='text-xl bg-white border rounded-md text-black font-bold w-8 h-8 text-center self-center mr-[-75px]'>
                  {checkLength.length}
                </div>}
              <BsCart3 className='h-[40px] hover:text-blue-gray-200 cursor-pointer' onClick={() => {
                setActive('')
              }}/>
          </div>
      </div>
     
    </div>
  )
}
