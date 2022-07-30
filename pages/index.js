import Head from 'next/head'
import { Background } from '../components/Background'
import { Header } from '../components/Header'

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
        <div className='w-[100%] h-[100vh] fixed'>
          <Header />

          <div className='flex flex-col max-w-[90%] mx-auto text-white pt-[10%]'>
            <h1 className='text-white font-bold text-6xl max-w-[40%]'>Every car part you might ever need right at yoor finger tips</h1>
            <button size="large" className='max-w-[15%] h-16 mt-24 text-center font-bold text-2xl pt-4 bg-white text-black'>SHOP NOW!</button>
          </div>
        </div>
        
      </main>

      
    </div>
  )
}
