import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {
    const { Products } = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        if (Products && Products.length > 0) {
            const bestProducts = Products.filter(item => item.bestSeller || item.BestSeller); 
            setBestSellers(bestProducts.slice(0, 5));
        }
    }, [Products]);

    if (!bestSellers.length) return null; 

    return (
        <section className="text-center py-12 px-4">
            <h1 className="font-bold text-3xl mb-2">
                <span className="text-red-600">BEST</span> SELLERS
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base mb-8">
                Our most popular items loved by customers. These best sellers combine quality and style for your perfect look.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 max-w-6xl mx-auto">
                {bestSellers.map((item,index) => (
                    <ProductItem key={index} id={item.id} name={item.name} price={item.price} />
                ))}
            </div>
        </section>
    );
};

export default BestSeller;