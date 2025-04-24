import React from 'react'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'


const About = () => {
  return (
    <div className='max-w-6xl mx-auto px-4` py-12'>
      {/* Heading Section */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl font-bold text-gray-500'>
          ABOUT <span className='text-blue-300'>US</span>
        </h1>
        <div className='w-20 h-1 bg-blue-400 mx-auto mt-4'></div>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row items-center gap-12'>
        {/* Image - 50% width */}
        <div className='md:w-1/2'>
          <img 
            src={assets.about_img} 
            alt="About Forever"  
            className='rounded-lg shadow-xl w-full'
          />
        </div>
        
        {/* Text - 50% width */}
        <div className='md:w-1/2 space-y-6'>
          <div>
            <p className='text-gray-600 leading-relaxed text-lg'>
              BlackJack was born out of a passion for innovation and a desire to revolutionize
              the way people shop online. Our journey began with a simple idea: to provide a 
              platform where customers can easily discover, explore, and purchase a wide range
              of products from the comfort of their homes.
            </p>
            <p className='text-gray-600 leading-relaxed text-lg mt-4'>
              Since our inception, we've worked tirelessly to curate a diverse selection of 
              high-quality products that cater to every taste and preference. From fashion and 
              beauty to electronics and home essentials, we offer an extensive collection 
              sourced from trusted brands and suppliers.
            </p>
          </div>

          {/* Mission Section */}
          <div className='mt-8'>
            <h2 className='text-3xl font-semibold text-gray-700 mb-4'>Our Mission</h2>
            <p className='text-gray-600 leading-relaxed text-lg'>
              Our mission at Forever is to empower customers with choice, convenience, and 
              confidence. We're dedicated to providing a seamless shopping experience that 
              exceeds expectations, from browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className='items-start flex flex-row py-11 ml-4'>
        <h1 className='text-gray-500 font-semibold text-3xl'>WHY</h1>
        <span className='text-blue-300 font-semibold text-3xl ml-2'>CHOOSE US</span>
        <p className='h-[2.1px] w-8 lg:w-16 mt-4 ml-5 bg-gray-600 '></p>
      </div>

      <div className='flex flex-row justify-around gap-6'>
  <div className='bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow'>
    <h3 className='text-xl font-semibold text-gray-700 mb-3 font-sans'>Quality Assurance</h3>
    <p className='text-gray-600 font-sans'>
      We meticulously select and vet each product to ensure it meets our stringent quality standards.
    </p>
  </div>
  <div className='bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow  font-sans'>
    <h3 className='text-xl font-semibold text-gray-700 mb-3 font-sans'>Convenience</h3>
    <p className='text-gray-600 font-sans'>
      With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
    </p>
  </div>
  <div className='bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow'>
    <h3 className='text-xl font-semibold font-sans text-gray-700 mb-3'>Exceptional Customer Service</h3>
    <p className='text-gray-600 font-sans'>
      Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
    </p>
  </div>
</div>
      <Subscribe />
    </div>
  )
}

export default About