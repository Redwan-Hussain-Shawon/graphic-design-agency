
"use client"
import React, { createContext, useState } from "react"

export const CartContext = createContext(null);
function CartProvider ({children}){
    const [cart,setCart] = useState([]);
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;