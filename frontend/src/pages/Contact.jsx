import React from 'react'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

const Contact = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Title Section */}
        <div className='flex flex-col items-center mb-12'>
          <div className='flex items-center'>
            <h1 className='text-blue-400 font-semibold text-xl md:text-2xl lg:text-3xl'>
              CONTACT 
              <span className='text-gray-700 ml-2'>US</span>
            </h1>
            <div className='h-1 w-12 sm:w-16 ml-4 bg-gray-600'></div>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          {/* Image - comes first on mobile */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-1'>
            <img 
              src={assets.contact_img} 
              className='w-full max-w-md lg:max-w-none lg:w-4/5 rounded-lg shadow-md' 
              alt="Contact us" 
            />
          </div>

          {/* Text Content */}
          <div className='w-full lg:w-1/2 order-2 lg:order-2 lg:pl-12'>
            <div className='space-y-6'>
              <div>
                <h2 className='font-semibold text-2xl sm:text-3xl text-gray-700 mb-3'>Our Store</h2>
                <div className='space-y-1 text-gray-600 text-lg'>
                  <p>54709 Willms Station</p>
                  <p>Suite 350, Washington, USA</p>
                </div>
              </div>

              <div>
                <h2 className='font-semibold text-2xl sm:text-3xl text-gray-700 mb-3'>Careers at Forever</h2>
                <div className='space-y-1 text-gray-600 text-lg'>
                  <p>Learn more about our teams and job openings.</p>
                  <p>Tel: (415) 555-0132</p>
                  <p>Email: admin@forever.com</p>
                </div>
              </div>

              <button className='border-2 border-gray-800 py-3 px-6 font-semibold text-black bg-transparent hover:border-blue-400 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110'>
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  )
}

export default Contact