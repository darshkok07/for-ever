/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$"; 
    const deliverfee = 10;

    const value = {
        products,
        currency,
        deliverfee
    };
    
    return (
        <ShopContext.Provider value={value}> 
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;