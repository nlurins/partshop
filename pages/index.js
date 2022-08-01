import Head from 'next/head'
import { Background } from '../components/Background'
import { Header } from '../components/Header'
import Link from 'next/link'
import { HeaderLand } from '../components/HeaderLand'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Car Parts Shop</title>
        <meta name="description" content="Buy parts for your car online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <Background />
        <div className='w-[100%] h-[100vh] fixed backdrop-filter backdrop-blur'>
          <HeaderLand />

          <div className='flex flex-col max-w-[90%] mx-auto text-white pt-[10%]'>
            <h1 className='text-white font-bold text-6xl max-w-[40%]'>Every car part you might ever need right at your finger tips.</h1>
            <Link href="/shop"><button size="large" className='hover:bg-blue-gray-200 transition-transform  hover:scale-110 max-w-[15%] h-16 mt-24 text-center font-bold text-2xl  bg-white text-black border shadow-inner'>SHOP NOW!</button></Link>
          </div>
        </div>
        
      </main>

      
    </div>
  )
}
