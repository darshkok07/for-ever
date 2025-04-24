import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-6 md:gap-4 lg:gap-8 p-4 md:p-6 lg:p-10 font-sans'>
        <div className='flex flex-col items-center justify-center text-center p-4 md:p-2 lg:p-4 flex-1'>
            <img src={assets.exchange_icon} alt="Exchange icon" className='mb-2 w-12 md:w-10 lg:w-12' />
            <h3 className='text-gray-700 font-semibold text-lg md:text-xl lg:text-2xl mb-3'>Easy Exchange Policy</h3>
            <p className='text-red-500 text-sm md:text-xs lg:text-[0.93rem] font-normal font-serif'>We offer hassle free exchange policy</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center p-4 md:p-2 lg:p-4 flex-1'>
            <img src={assets.quality_icon} alt="Quality icon" className='mb-2 w-12 md:w-10 lg:w-12' />
            <h3 className='text-gray-700 font-semibold text-lg md:text-xl lg:text-2xl mb-3'>7 Days Return Policy</h3>
            <p className='text-red-500 text-sm md:text-xs lg:text-[0.93rem] font-normal font-serif'>We provide 7 days free return policy</p>
        </div>
        <div className='flex flex-col items-center justify-center text-center p-4 md:p-2 lg:p-4 flex-1'>
            <img src={assets.support_img} alt="Support icon" className='mb-2 w-12 md:w-10 lg:w-12' />
            <h3 className='text-gray-700 font-semibold text-lg md:text-xl lg:text-2xl mb-3'>Best customer support</h3>
            <p className='text-red-500 text-sm md:text-xs lg:text-[0.93rem] font-normal font-serif'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy