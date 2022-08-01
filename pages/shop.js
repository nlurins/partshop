import { Header } from "../components/Header"
import "@fontsource/montserrat";
import { ShopSideBar } from "../components/ShopSideBar";
import { ProductCard } from "../components/ProductCard";
import { useEffect } from "react";
import { useState } from "react";

const Shop = () => {
    const [mainActive, setMainActive] = useState(-1);
    const products = [
        {
            id: 0,
            title: 'Michelin tires',
            category: 'Tires',
            categoryId: 0,
            price: 299.9,
            inStock: true,
            picture: ''
        },
        {
            id: 1,
            title: 'Some oil',
            category: 'Oils',
            categoryId: 1,
            price: 39.9,
            inStock: true,
            picture: ''
        }
    ]
    let [categories, setCategories] = useState([]);
    
    useEffect(() => {
        products.forEach(product => {
            if(!categories.includes(product.category)){
                setCategories([...categories, product.category])
            }
        })
    }, [categories])


    if(mainActive === -1){
        return (
            <div className=" bg-gradient-to-r  from-[#070707f3] to-[#070707e1] min-h-screen">
                <Header />
                <div className="mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat']">
                    <ShopSideBar categories = {categories}/>
                    <div className="container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 py-16 mr-0 px-16">
                        {products.map(product => {
                            return <ProductCard key={product.id} title={product.title} price={product.price}/>;
                        })}
                        
                        
                    
                    </div>
                </div>
            </div>
          )
    }
}

export default Shop