import { useContext, useEffect, useState } from 'react';
import Subscribe from '../components/Subscribe';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts,setfilterProducts] = useState([]);

    useEffect (() => {
        setfilterProducts(products);
    },[])

    return (
        <div className='flex flex-col'>
            {/* Main content area */}
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
                {/* Filter options */}
                <div className='w-min-60'>
                    <p 
                        className='my-2 text-xl flex items-center cursor-pointer gap-2 sm:cursor-default'
                        onClick={() => setShowFilter(!showFilter)}
                    >
                        FILTERS
                        <img 
                            src={assets.dropdown_icon} 
                            className={`h-3 ms:hidden ${showFilter ? 'rotate-90' : ''}`} 
                            alt="" 
                        />
                    </p>
                    
                    {/* Category filters - shown on sm: always, shown on mobile when showFilter is true */}
                    <div className={`border border-gray-300 px-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-lg font-medium text-left'>CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-base font-light text-gray-700 text-left'>
                            <p className='flex gap-2 items-center'>
                                <input className='w-4 h-4' type='checkbox' value={'Men'} /> Men
                            </p>
                            <p className='flex gap-2 items-center'>
                                <input className='w-4 h-4' type='checkbox' value={'Women'} /> Women
                            </p>
                            <p className='flex gap-2 items-center'>
                                <input className='w-4 h-4' type='checkbox' value={'Kids'} /> Kids
                            </p>
                        </div>
                    </div>

                    {/* Sub category filter - shown on sm: always, shown on mobile when showFilter is true */}
                    <div className={`border border-gray-300 px-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-lg font-medium text-left'>SUBCATEGORIES</p>
                        <div className='flex flex-col gap-2 text-base font-light text-gray-700 text-left'>
                            <p className='flex gap-2 items-center'>
                                <input className='w-4 h-4' type='checkbox' value={'Topwear'} /> Topwear
                            </p>
                            <p className='flex gap-2 items-center'>
                                <input className='w-4 h-4' type='checkbox' value={'Bottomwear'} /> Bottomwear
                            </p>
                            <p className='flex gap-2 items-center'>
                                <input className='w-4 h-4' type='checkbox' value={'Winterwear'} /> Winterwear
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Products section would go here */}
                <div className="flex justify-between items-start w-full text-base sm:text-2xl mb-4">
  
  {/* Left-aligned heading group */}
    <div className="flex items-center gap-2">
        <h1 className='text-xl md:text-3xl font-semibold text-gray-500'>
            ALL 
        </h1>
        <span className='text-xl md:text-3xl font-semibold text-blue-400'>
            COLLECTIONS
        </span>
    <div className='w-8 md:w-16 bg-gray-500 h-[1.8px]'></div>
    </div>

        {/* Right-aligned select */}
            <select 
                className='border border-gray-500 rounded-sm  px-4  py-1  focus:outline-none  focus:ring-1  focus:ring-blue-400  focus:border-blue-500 transition-colors cursor-pointer shadow-sm text-black font-light text-xl'>
                
                <option value="relevant">Sort by: Relevant</option>
                <option value="low-to-high">Sort by: Low to High</option>
                <option value="high-to-low">Sort by: High to Low</option>
            </select>
        </div>
    </div>

            {/**Products  */}

                <div className='grid grid-col-2 md:grid-col-3 lg:grid-col-4 gap-4 gap-y-4'>

                </div>

            {/* Centered Subscribe section */}
            <div className='flex justify-center mt-10'>
                <Subscribe />
            </div>
        </div>
    );
};

export default Collection;