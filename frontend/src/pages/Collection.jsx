import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem'

const Collection = () => {
    const { products } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedSubcategories, setSelectedSubcategories] = useState([])

    useEffect(() => {
        setFilterProducts(products)
    }, [products])

    useEffect(() => {
        if (!products) return

        let filtered = [...products]
        
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product => 
                selectedCategories.includes(product.category)
            )
        }
        
        if (selectedSubcategories.length > 0) {
            filtered = filtered.filter(product => 
                selectedSubcategories.includes(product.subcategory)
            )
        }

        setFilterProducts(filtered)
    }, [selectedCategories, selectedSubcategories, products])

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    const handleSubcategoryChange = (subcategory) => {
        setSelectedSubcategories(prev => 
            prev.includes(subcategory)
                ? prev.filter(s => s !== subcategory)
                : [...prev, subcategory]
        )
    }

    const handleSortChange = (e) => {
        const value = e.target.value
        let sorted = [...filterProducts]
        
        if (value === 'low-to-high') {
            sorted.sort((a, b) => a.price - b.price)
        } else if (value === 'high-to-low') {
            sorted.sort((a, b) => b.price - a.price)
        }
        
        setFilterProducts(sorted)
    }

    return (
        <div className='flex flex-col sm:flex-row sm:gap-10 mt-5'>

            {/** Filter options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} 
                   className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
                </p>

                {/** category filters */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
                        {['Men', 'Women', 'Kids'].map(category => (
                            <p key={category} className='flex gap-2'>
                                <input 
                                    type="checkbox" 
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                    className='w-[14px]' 
                                /> 
                                {category}
                            </p>
                        ))}
                    </div>
                </div>

                {/** subcategory */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
                        {['Topwear', 'Bottomwear', 'Innerwear'].map(type => (
                            <p key={type} className='flex gap-2'>
                                <input 
                                    type="checkbox" 
                                    checked={selectedSubcategories.includes(type)}
                                    onChange={() => handleSubcategoryChange(type)}
                                    className='w-[14px]'
                                /> 
                                {type}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/** Right side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <div className='flex flex-row text-gray-500 gap-2 font-semibold'>
                        <h1>ALL</h1>
                        <h1 className='text-blue-400'>COLLECTIONS</h1>
                        <div className='bg-gray-400 w-8 lg:w-16 mt-[15px] h-[1.9px]'></div>
                    </div>

                    {/** Products Sort */}
                    <select onChange={handleSortChange} className='border border-gray-300 text-sm px-2'>
                        <option value="relevant">Sort by: Relevent</option>
                        <option value="low-to-high">Sort by: Low-High</option>
                        <option value="high-to-low">Sort by: High-Low</option>
                    </select>
                </div>

                {/** Map Products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {filterProducts.map((item) => (
                        <ProductItem 
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collection