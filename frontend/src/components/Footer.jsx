import React from 'react';

function Footer() {
  return (
    <footer className="bg-white mt-14 py-12"> {/* Increased vertical padding */}
      <div className="container mx-auto"> {/* Increased horizontal padding for larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20"> {/* Increased gap for better spacing */}
          <div className="text-left">
            <h2 className="text-2xl font-bold text-gray-800">FOREVER</h2> {/* Larger heading */}
            <p className="text-base text-gray-600 mt-3 leading-relaxed"> {/* Increased font size and line height */}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">COMPANY</h3> {/* Slightly larger heading margin */}
            <ul className="text-base text-gray-600"> {/* Increased font size */}
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Home</a></li> {/* Increased margin */}
              <li className="mb-2"><a href="#" className="hover:text-gray-800">About us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-800">Delivery</a></li>
              <li><a href="#" className="hover:text-gray-800">Privacy policy</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">GET IN TOUCH</h3> {/* Slightly larger heading margin */}
            <p className="text-base text-gray-600 mb-2">+1-000-000-0000</p> {/* Increased font size and margin */}
            <p className="text-base text-gray-600 mb-2">greatstackdev@gmail.com</p>
            <p className="text-base text-gray-600"><a href="#" className="hover:text-gray-800">Instagram</a></p>
          </div>
        </div>
        <hr className="my-8 border-gray-300" /> {/* Increased margin for the divider */}
        <p className="text-center text-gray-500 text-sm"> {/* Slightly larger copyright text */}
          Copyright 2024@greatstack.dev - All Right Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;