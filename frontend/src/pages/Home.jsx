import React, { useContext } from 'react';  // Add useContext to the import
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import Subscribe from '../components/Subscribe';
import BestSeller from '../components/BestSeller';
import { ShopContext } from '../context/ShopContext';  // Make sure to import ShopContext
import OurPolicy from '../components/OurPolicy';

const Home = () => {
  const { Products } = useContext(ShopContext);  // Now this will work
  
  console.log("Home Products:", Products);  // Debugging: check if products exist

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Latest Collections Section Header */}
      <section className="flex flex-col items-center gap-3 justify-center my-10 px-2">
        <div className="flex items-center">
          <h1 className="font-medium font-sans text-gray-800 text-md md:text-xl lg:text-3xl">
            LATEST <span className="font-bold text-blue-400">COLLECTIONS</span>
          </h1>
          <span className="w-8 bg-gray-700 sm:h-0.5 ml-3 md:w-11 lg:w-16 h-1"></span>
        </div>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg font-sans font-normal text-center max-w-2xl">
          Discover the latest trending clothes of this season. Scroll now to explore all our products.
        </p>
      </section>
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Subscribe />
    </div>
  );
};

export default Home;