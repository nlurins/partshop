import { BsCart3 } from 'react-icons/bs'
import "@fontsource/montserrat";
import Link from 'next/link';

export const Header = () => {
  return (
    <div>
      <div className="container flex max-w-[90%] pt-28 mx-auto justify-between">
          <Link href="/"><a className="font-['Montserrat'] tracking-wider text-4xl text-white font-bold">CAR PARTS AND SERVICES</a></Link>
          <div className="flex font-['Montserrat']  text-3xl text-white gap-20">
              <Link href="/shop"><a>Shop</a></Link>
              <a>Contacts</a>
              <BsCart3 className='h-[40px]'/>
          </div>
      </div>
    </div>
  )
}
