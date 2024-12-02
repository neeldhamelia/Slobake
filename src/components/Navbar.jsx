import React from 'react';
import { GiSlicedBread } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <GiSlicedBread className="text-red-700 text-3xl" />
            <span className="ml-2 text-2xl font-serif text-red-800">Slobake</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#menu">Our Menu</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
  >
    {children}
  </a>
);

export default Navbar;