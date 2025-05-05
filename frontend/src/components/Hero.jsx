import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
     
    <div className='flex flex-col items-center sm:flex-row border border-gray-400 m-10'>
      <div className='sm:w-full flex items-center justify-center sm:py-0'>
        <div className='text-[#414141]'>
        <div className='flex items-center gap-2 text-wrap'>
          <p className='w-6 bg-gray-700 h-[2px] md:w-11 sm:hidden'></p>
          <p className='font-medium text-xl lg:text-3xl md:text-base'>OUR BESTSELLERS</p>
        </div>
        <h1 className='font-medium font-serif text-xl lg:text-4xl  sm:py-3'>Latest Arrivals</h1>
        <div className='flex items-center gap-2'>
          <p className='font-medium text-xl lg:text-3xl  md:text-base'>SHOP NOW</p>
          <p className='w-6 bg-gray-700 h-[2px] md:w-11'></p>
        </div>
      </div>
    </div>
    <img src={assets.hero_img} className='w-full md:w-1/2 lg:w-[55%]' alt="" />
  </div>
  );
};

export default Hero;