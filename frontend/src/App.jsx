import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Placeorder from './pages/Placeorder'
import Login from './pages/Login'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Place-Order' element={<Placeorder />} />
        <Route path='/Orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App