import React from 'react'

const foot = () => {
  return (
    <div>
        <footer className="w-full bg-green-50 mt-10 md:mt-20 mr-10">
              <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  {/* Brand Info */}
                  <div className="flex-1 max-w-md">
                    <h1 className="text-gray-700 font-semibold text-2xl md:text-3xl mb-3">
                      BlackJack
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                  </div>
        
                  {/* Company Links */}
                  <div className="flex-1 max-w-xs px-10">
                    <h2 className="text-gray-700 font-semibold text-xl md:text-2xl mb-3">
                      COMPANY
                    </h2>
                    <nav className="flex flex-col space-y-2">
                      <Link to="/" className="text-gray-500 hover:text-green-600 transition-colors">
                        Home
                      </Link>
                      <Link to="/About" className="text-gray-500 hover:text-green-600 transition-colors">
                        About
                      </Link>
                      <Link to="/Contact" className="text-gray-500 hover:text-green-600 transition-colors">
                        Contact
                      </Link>
                      <Link to="/Collection" className="text-gray-500 hover:text-green-600 transition-colors">
                        Collection
                      </Link>
                    </nav>
                  </div>
        
                  {/* Contact Info */}
                  <div className="flex-1 max-w-xs">
                    <h2 className="text-gray-700 font-semibold text-xl md:text-2xl mb-3">
                      GET IN TOUCH
                    </h2>
                    <address className="text-gray-500 not-italic">
                      <p className="mb-2">+1-000-000-0000</p>
                      <p className="mb-2">darshankok46@gmail.com</p>
                      <p>Linkedin</p>
                    </address>
                  </div>
                </div>
        
                {/* Copyright/Additional Info can be added here */}
              </div>
            </footer>
    </div>
  )
}

export default foot