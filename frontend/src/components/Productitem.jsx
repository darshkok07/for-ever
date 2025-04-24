import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    
    return (
        <div className="product-item">
            <Link to={`/product/${id}`}>
                <img src={image} className='hover:scale-[1.05] transition-all ease-in-out' alt={name} />
                <h3 className='text-gray-700 font-[500] text-base lg:font-2xl pt-2 font-sans'>{name}</h3>
                <p className='text-blue-500'>{currency}{price}</p>
            </Link>
        </div>
    );
};

export default ProductItem;