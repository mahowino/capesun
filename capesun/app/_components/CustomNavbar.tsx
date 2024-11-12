"use client"
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About us', href: 'who-are-we' },
    { name: 'Our clients', href: 'clients' },
    { name: 'Our Services', href: 'services' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'contact us', href: 'contact' },

  ];

 
  


  const mainButtonClasses =
    'inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-accent border border-transparent rounded-md ';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MenuItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <Link
      to={to}
      smooth={true}
      duration={500}
      className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out hover:text-accent"
      style={{ position: 'relative', zIndex: 10 }}
    >
      {children}
    </Link>
  );
  
 

  const renderNavLinks = () =>
    navLinks.map((link) => (
     
       <MenuItem key={link.name} to={link.href}>{link.name}</MenuItem>
      
    ));

  return (
    <header className="pb-6 bg-white lg:pb-0 fixed w-full z-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex scale-150 pl-4">
              <img
                className="w-auto h-8 lg:h-10"
                src="assets/logo_1.jpg"
                alt="Logo"
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>

            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {renderNavLinks()}
          </div>

          <Link to="contact" smooth={true} duration={500} className={`hidden lg:inline-flex ml-10 ${mainButtonClasses}`} role="button">
            Get started now
          </Link>
        </nav>
  

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                {renderNavLinks()}
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link to="contact" smooth={true} duration={500} className={mainButtonClasses} role="button">
                Get started now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default CustomNavbar;
