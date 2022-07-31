import { Header } from "../components/Header"
import "@fontsource/montserrat";
import { ShopSideBar } from "../components/ShopSideBar";
import { ProductCard } from "../components/ProductCard";
const Shop = () => {
  
  
  
    return (
    <div className=" bg-gradient-to-r  from-[#070707f3] to-[#070707e1] min-h-screen">
        <Header />
        <div className="mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat']">
            <ShopSideBar className="sticky" />
            <div className="container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 items-stretch py-16 mr-0 px-16">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default Shop