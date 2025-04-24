import React from 'react'

const Subscribe = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  }

  return (
    <div className='mt-10 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center text-center text-gray-900 pt-10 pb-6'>
        <h1 className='text-sm font-semibold py-2 lg:text-3xl'>
          Subscribe now & get 20% off
        </h1>
        <p className='text-md text-gray-600 max-w-md md:max-w-lg '>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
      </div>

      <div className='flex justify-center p-4'>
        <form 
          onSubmit={onSubmitHandler} 
          className='w-full max-w-2xl flex flex-col sm:flex-row'
        >
          <input 
            type='email'
            placeholder='Enter Your Email'
            required
            className='flex-1 px-4 py-3 sm:py-4 border border-gray-300 focus:outline-none focus:ring-[1px] focus:border-transparent'
          />
          
          <button 
            type='submit'
            className='px-6 py-2 sm:py-4 text-white bg-black hover:bg-gray-800 transition-colors duration-200 font-[400] text-base sm:text-lg'
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
