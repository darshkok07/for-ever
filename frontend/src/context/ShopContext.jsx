/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    const currency = "$"; 
    const deliverfee = 10;

    const value = {
        products,
        currency,
        deliverfee,
        showSearch,
        setShowSearch,
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