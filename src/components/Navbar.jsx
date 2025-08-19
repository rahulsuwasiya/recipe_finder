import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-[#009688]">
          <ChefHat className="w-7 h-7" />
          <span>RasoiWay</span>
        </div>

        {/* Mobile menu icon */}
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Links */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-[#263238] hover:text-[#009688] duration-300"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Login/User Name */}
          <li className="md:ml-8">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="font-semibold">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-[#009688] text-white px-4 py-2 rounded hover:bg-[#FF6F61] transition duration-300 font-semibold inline-block"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
