import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './Productitem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products?.length > 0) {
            // Get latest 10 products (add sorting if needed)
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);

    return (
        <div className="latest-collection px-3 py-8 mt-15">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {latestProducts.map(product => (
              <ProductItem 
              key={product.id}
               {...product} />
              ))}
            </div>
        </div>
    );
};

export default LatestCollection;