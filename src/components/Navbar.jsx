import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChefHat } from 'lucide-react';

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Category", link: "/categories" },
    { name: "Explore", link: "/explore" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-blue-600">
          <ChefHat className="w-7 h-7" />
          <span>RasoiWay</span>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-16' : 'top-[-490px]'
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-blue-400 duration-300"
                onClick={() => setOpen(false)} // Close mobile menu on link click
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-8">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 font-semibold inline-block"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
