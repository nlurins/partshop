import { Header } from "../components/Header"
import "@fontsource/montserrat";
import { ShopSideBar } from "../components/ShopSideBar";
import { ProductCard } from "../components/ProductCard";
import { useEffect } from "react";
import { useState } from "react";

const Shop = () => {
    const [cart, setCart] = useState([]);
    
    
    const [mainActive, setMainActive] = useState('All Products');
    const [products,setProducts] = useState([
        {
            id: 0,
            title: 'Michelin tires',
            category: 'Tires',
            categoryId: 0,
            quantity: 1,
            price: 299.99,
            inStock: true,
            picture: ''
        },
        {
            id: 1,
            title: 'Some oil',
            category: 'Oils',
            categoryId: 1,
            quantity: 1,
            price: 39.99,
            inStock: true,
            picture: ''
        },
        {
            id: 3,
            title: 'Some part',
            category: 'Parts',
            categoryId: 2,
            quantity: 1,
            price: 89.99,
            inStock: false,
            picture: ''
        }
    ])
    let [categories, setCategories] = useState([]);
    
    useEffect(() => {
        products.forEach(product => {
            if(!categories.includes(product.category)){
                setCategories([...categories, product.category])
            }
        })
    }, [categories])

    const handleActive = (e) => {
        setMainActive(e.target.innerHTML)
    }

    const addToCart = (e) => {
        let addedItem = products.filter(product => {
            
            return product.title === e.target.id;
        })
        
        if(!cart.includes(addedItem[0])){
            
            setCart([...cart, addedItem[0]])
        
            
        }
        else {
            if(cart.length > 0){
            let newCart = [...cart]
            newCart.forEach(item => {
                if(item.id === addedItem[0].id){
                    item.quantity++
                }
            })
            setCart([...newCart]);}
            console.log(cart);
        }
        
    }
    const handlePlus = (e) => {
        let newCart = [...cart]
    }

    return (
    <div className=" bg-gradient-to-r  from-[#070707f3] to-[#070707e1] min-h-screen">
        <Header cart={cart}/>
        <div className="mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat'] z-10">
            <ShopSideBar categories = {categories} onClick={(e) => {handleActive(e)}}/>
            <div className="container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 py-16 mr-0 px-16 border shadow-2xl">
                {products.map(product => {
                   if(mainActive === 'All Products'){
                    return <ProductCard key={product.id} inStock={product.inStock} title={product.title} price={product.price} click = {(e) => addToCart(e)}/>;
                   }
                   else{
                    if(product.category === mainActive) {
                        return <ProductCard key={product.id} inStock={product.inStock} title={product.title} price={product.price} click = {(e) => addToCart(e)}/>;
                    }
                   }
                })}
                
                
            
            </div>
        </div>
    </div>
  )
}

export default Shop