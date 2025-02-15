import React, { useContext, useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const dropdownRef = useRef(null);
    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    const navLinks = [
        { to: '/', label: 'HOME' },
        { to: '/collection', label: 'COLLECTION' },
        { to: '/about', label: 'ABOUT' },
        { to: '/contact', label: 'CONTACT' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg h-16">
            <div className="container mx-auto flex items-center justify-between py-4 px-6 m-auto">
                {/* Text Logo */}
                <Link to="/" className="text-2xl font-bold text-white font-poppins ml-4">
                    SneakPeak.
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex space-x-8 text-gray-300">
                  {navLinks.map((link, index) => (
                      <NavLink
                          key={index}
                          to={link.to}
                          className={({ isActive }) =>
                              `relative flex flex-col items-center gap-1 transition-colors duration-300 hover:text-white ${
                                  isActive ? 'text-white' : ''
                              }`
                          }
                      >
                          {({ isActive }) => (
                              <>
                                  <p>{link.label}</p>
                                  {isActive && (
                                      <motion.div
                                          className="w-2/4 h-[2px] bg-white"
                                          initial={{ scaleX: 0 }}
                                          animate={{ scaleX: 1 }}
                                          transition={{ duration: 0.3 }}
                                      />
                                  )}
                              </>
                          )}
                      </NavLink>
                  ))}
              </ul>

                {/* Icons */}
                <div className="flex items-center space-x-6 mr-4">
                    {/* Search Icon */}
                    <img
                        onClick={() => setShowSearch(true)}
                        src={assets.search_icon}
                        className="w-5 cursor-pointer hover:opacity-75 transition-opacity filter invert"
                        alt="Search Icon"
                    />

                    {/* Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <img
                            onClick={() => (token ? setVisible(!visible) : navigate('/login'))}
                            src={assets.profile_icon}
                            className="w-5 cursor-pointer hover:opacity-75 transition-opacity filter invert"
                            alt="Profile Icon"
                        />
                        {token && visible && (
                            <motion.div
                                className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <div className="flex flex-col py-2">
                                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                                    <p onClick={() => navigate('/orders')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Orders
                                    </p>
                                    <p onClick={logout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Logout
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative">
                        <img
                            src={assets.cart_icon}
                            className="w-5 cursor-pointer hover:opacity-75 transition-opacity filter invert"
                            alt="Cart Icon"
                        />
                        <p className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-white text-black text-xs rounded-full">
                            {getCartCount()}
                        </p>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <img
                        onClick={() => setVisible(!visible)}
                        src={assets.menu_icon}
                        className="w-6 cursor-pointer md:hidden hover:opacity-75 transition-opacity filter invert"
                        alt="Menu Icon"
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {visible && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-screen bg-black z-40 md:hidden"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <div className="flex flex-col p-6">
                            <div
                                onClick={() => setVisible(false)}
                                className="flex items-center gap-4 p-3 cursor-pointer"
                            >
                                <img className="h-4 rotate-180 filter invert" src={assets.dropdown_icon} alt="" />
                                <p className="text-white">Back</p>
                            </div>
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.to}
                                    onClick={() => setVisible(false)}
                                    className="py-3 px-6 text-lg border-b hover:bg-gray-800 text-white"
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;