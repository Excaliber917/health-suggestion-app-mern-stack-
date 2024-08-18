import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GiCrossMark } from "react-icons/gi";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { IoLogOutOutline } from "react-icons/io5";
import useLogout from '../hooks/useLogout';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const { loading, logout } = useLogout()
  const { user } = useAuthContext()
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold md:text-xl">
        {/* <img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Logo" className="h-8 w-auto md:h-10" /> */}
        LOGO
      </Link>

      {/* Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className={`hover:text-gray-300 font-semibold ${location.pathname === "/" ? `border-b-2 border-white rounded` : ``}`}>Home</Link>
        <Link to="/about" className={`hover:text-gray-300 font-semibold ${location.pathname === "/about" ? `border-b-2 border-white rounded` : ``}`}>About</Link>
        <Link to="/contact" className={`hover:text-gray-300 font-semibold ${location.pathname === "/contact" ? `border-b-2 border-white rounded` : ``}`}>Contact</Link>
      </div>

      {/* User Info */}
      {user ? (<div className="hidden md:flex items-center space-x-4">
        <Link to="/profile" className='font-semibold hover:text-white'>{user.username}</Link>
        <img
          src={user.profilePic}
          alt="Profile"
          className="h-8 w-8 rounded-full border-2 border-gray-700"
        />
        <IoLogOutOutline size={25} title='logout' className=' cursor-pointer' onClick={() => logout()} />
      </div>) : (
        <div className='md:flex items-center gap-2 hidden'>
          <button className=' hidden md:block border-2 py-1 px-4 font-bold rounded hover:bg-slate-50 hover:text-slate-900 duration-200 cursor-pointer text-md' onClick={() => navigate("/login")}>Login</button>
          <button className=' hidden md:block border-2 py-1 px-4 font-bold rounded hover:bg-slate-50 hover:text-slate-900 duration-200 cursor-pointer text-md' onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      )}

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <FaBars onClick={toggleSidebar} className="h-6 w-6 cursor-pointer text-gray-200" />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 z-10 h-full w-64 bg-gray-800 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <button
          className="absolute top-4 right-4 text-gray-200"
          onClick={toggleSidebar}
        >
          <GiCrossMark className="h-6 w-6 cursor-pointer" />
        </button>
        <div className="flex flex-col items-start pl-7 mt-16 space-y-8 text-gray-200">
          {user ? (<div className="flex items-center  gap-4  mb-3">
            <Link to="/profile" className="hover:text-slate-300 text-4xl font-bold">{user.username}</Link>
            <img
              src={user.profilePic}
              alt="Profile"
              className="h-12 w-12 rounded-full border-2 border-gray-700"
            />
          </div>) :
            <div className='flex items-center gap-2'>

              <button className='border-2 py-2 px-4 font-bold rounded hover:bg-slate-50 hover:text-slate-900 duration-200 cursor-pointer text-md' onClick={() =>{ navigate("/login")
                toggleSidebar()
              }}>Login</button>
              <button className='border-2 py-2 px-4 font-bold rounded hover:bg-slate-50 hover:text-slate-900 duration-200 cursor-pointer text-md' onClick={() => {navigate("/signup")
                toggleSidebar()
              }}>sign up</button>

            </div>
          }

          <Link to="/" className={`text-xl hover:text-white ${location.pathname === "/" ? `text-2xl font-bold` : ``}`} onClick={()=>toggleSidebar()}>Home</Link>
          <Link to="/about" className={`text-xl hover:text-white ${location.pathname === "/about" ? `text-2xl font-bold` : ``}`} onClick={()=>toggleSidebar()}>About</Link>
          <Link to="/contact" className={`text-xl hover:text-white ${location.pathname === "/contact" ? `text-2xl font-bold` : ``}`} onClick={()=>toggleSidebar()}>Contact</Link>
          <IoLogOutOutline size={35} onClick={() =>{ logout()
            toggleSidebar()
          }} color='red' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
