
import "@fontsource/montserrat";
import Link from 'next/link';
import { useState } from 'react';
export const HeaderLand = () => {
  const [active, setActive] = useState('hidden');
  
  return (
    <div>
      
      <div className="container flex flex-col md:flex-row max-w-[90%] pt-5 xl:pt-28 mx-auto justify-between ">
          <Link href="/"><a className="font-['Montserrat'] tracking-wider text-4xl text-white font-bold hover:text-blue-gray-200 text-center md:text-start pb-5 md:first-letter:pb-0">CAR PARTS AND SERVICES</a></Link>
          <div className="flex font-['Montserrat']  text-3xl text-white justify-around md:justify-start gap-20">
              <Link href="/shop"><a className='hover:text-blue-gray-200'>Shop</a></Link>
              <a className='hover:text-blue-gray-200'>Contacts</a>
              
          </div>
      </div>
     
    </div>
  )
}
