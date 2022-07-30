import { BsCart3 } from 'react-icons/bs'
import "@fontsource/montserrat";

export const Header = () => {
  return (
    <div className="container flex max-w-[90%] pt-28 mx-auto justify-between">
        <h1 className="font-['Montserrat'] tracking-wider text-4xl text-white font-bold">CAR PARTS AND SERVICES</h1>
        <div className="flex font-['Montserrat']  text-3xl text-white gap-20">
            <a href='/shop'>Shop</a>
            <a href='/contacts'>Contacts</a>
            <BsCart3 className='h-[40px]'/>
        </div>
    </div>
  )
}
