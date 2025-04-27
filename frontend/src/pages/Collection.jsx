import { useContext, useState } from 'react';
import Subscribe from '../components/Subscribe';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);

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
                <div className="flex-1">
                    {/* Your products listing would go here */}
                    <div className='flex flex-row gap-2'>
                        <h1 className='text-xl md:text3xl font-semibold text-gray-500'>
                            ALL 
                        </h1>
                        <span className='text-xl md:text3xl font-semibold text-blue-400'>
                                    COLLECTIONS
                        </span>
                        <p className='w-8 md:w-12 bg-gray-500 h-[1.6px] mt-[13px]'></p>
                    </div>
                </div>
            </div>
            
            {/* Centered Subscribe section */}
            <div className='flex justify-center mt-10'>
                <Subscribe />
            </div>
        </div>
    );
};

export default Collection;