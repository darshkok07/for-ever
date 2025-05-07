/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [SEARCH_VISIBLE, setSearchVisible] = useState(false);  // Changed to uppercase
    const [search, setSearch] = useState("");
    const currency = "$"; 
    const deliverfee = 10;

    const value = {
        products,
        currency,
        deliverfee,
        SEARCH_VISIBLE,  // Updated to match
        setSearchVisible,  // Updated to match
        search,
        setSearch
    };
    
    return (
        <ShopContext.Provider value={value}> 
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;