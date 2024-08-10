import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GiCrossMark } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold md:text-xl">
        {/* <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo" className="h-8 w-auto md:h-10" /> */}
        LOGO
      </Link>

      {/* Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className={`hover:text-slate-100 font-semibold ${location.pathname === "/" ? `border-b-2 border-b-white rounded` : ``}`}>Home</Link>
        <Link to="/about"  className={`hover:text-slate-100 font-semibold ${location.pathname === "/about" ? `border-b-2 border-b-white rounded` : ``}`}>About</Link>
        <Link to="/contact"  className={`hover:text-slate-100 font-semibold ${location.pathname === "/contact" ? `border-b-2 border-b-white rounded` : ``}`}>Contact</Link>
      </div>

      {/* User Info */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/profile" className='font-semibold'>John Doe</Link>
        <img
          src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <FaBars onClick={toggleSidebar} className="h-6 w-6 cursor-pointer" />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 z-10 h-full w-64 bg-gray-800 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleSidebar}
        >
          {/* Close */}
          <GiCrossMark className="h-6 w-6 cursor-pointer"/>
        </button>
        <div className="flex flex-col items-start pl-7 mt-16 space-y-8">
          <Link to="/" className={`text-xl hover:text-gray-400 ${location.pathname === "/" ? `text-2xl font-bold` : ``}`}>Home</Link>
          <Link to="/about" className={`text-xl hover:text-gray-400 ${location.pathname === "/about" ? `text-2xl font-bold` : ``}`}>About</Link>
          <Link to="/contact" className={`text-xl hover:text-gray-400 ${location.pathname === "/contact" ? `text-2xl font-bold` : ``}`}>Contact</Link>
          <div className="flex items-center space-x-4 mt-auto mb-8">
            <Link to="/profile">John Doe</Link>
            <img
              src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
