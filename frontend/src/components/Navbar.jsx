import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Added Link import
import { assets } from '../assets/assets';

const Navbar = () => {
  const [Visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-1/3 lg:w-1/2' alt="" />
      </Link>
        <ul className='hidden md:flex items-center gap-[2rem] text-sm text-gray-500'>

        <NavLink to='/'  className={({ isActive }) => `${isActive ? "text-gray-950" : ""}`}   >
          <p className='text-[1.1rem]'>HOME</p>
        </NavLink>

        <NavLink 
          to='/Collection' 
          className={({ isActive }) => 
            ` ${isActive ? "text-gray-950" : ""}`
          }
        >
          <p className='text-[1.1rem]'>COLLECTION</p>
        </NavLink>

        <NavLink 
          to='/About' 
          className={({ isActive }) => 
            ` ${isActive ? "text-gray-950" : ""}`
          }
        >
          <p className='text-[1.1rem]'>ABOUT</p>
        </NavLink>

        <NavLink 
          to='/Contact' 
          className={({ isActive }) => 
            ` ${isActive ? "text-gray-950 " : ""}`
          }
        >
          <p className='text-[1.1rem]'>CONTACT</p>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-6 h-6 cursor-pointer hover:opacity-8' alt="Search" />

        <div className='group relative'>
          <img src={assets.profile_icon} className='w-6 h-6 cursor-pointer hover:opacity-80' alt="Profile" />
          <div className='group-hover:block hidden absolute right-0 '>
            <div className='flex flex-col gap-4 p-2 w-40 bg-blue-50 shadow-2xl rounded-lg border border-gray-100'>
              <p className='cursor-pointer hover:text-blue-400'>My Profile</p>
              <p className='cursor-pointer hover:text-blue-400'>Orders</p>
              <p className='cursor-pointer hover:text-blue-400'>Logout</p>
            </div>
          </div>
        </div>
        
        <NavLink className='relative'>
        <img src={assets.cart_icon} className='w-6 h-6 cursor-pointer hover:opacity-80' alt="Cart" />
        </NavLink>
        <img src={assets.menu_icon} onClick={()=>setVisible(true)} className='w-5 cursor-pointer md:hidden' alt="" />
      </div>
      <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${Visible ? `w-full` : `w-0`}`}>
          <div className='flex flex-col text-gray-700'>
            <div className='flex items-center gap-3 p-3 cursor-pointer' onClick={()=>setVisible(false)}>
                <img src={assets.dropdown_icon} className='h-4 rotate-80' alt="" />
                <p>Back</p>
            </div>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'> HOME </NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Collection'> COLLECTION </NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/About'> ABOUT </NavLink>
              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/Contact'> CONTACT </NavLink>
          </div>
      </div>
    </div>
  );
};

export default Navbar;