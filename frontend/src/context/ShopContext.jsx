import { createContext, useState } from "react";
import all_products from "../assets/all_products";



export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for (let index = 0; index < all_products.length + 1 ; index++) {
        cart[index] = 0;
        
    }
    return cart
}


const ShopContextProvider = (props) =>{
    
    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] + 1}))
        console.log(cartItems);
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] - 1}))
    }
    
    const getTotalCartAmount = () =>{
        let total = 0
        all_products.forEach((product) => {
            total += product.new_price * cartItems[product.id]
        });
        return total
    }

    const getTotalCartItems = () =>{
        let total = 0
        all_products.forEach((product) => {
            total += cartItems[product.id]
        });
        return total   
    }
    
    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider