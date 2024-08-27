import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUpload, FaQuestionCircle, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import icons

const Navbar = () => {
    return (
        <header className="bg-blue-800 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-3xl font-extrabold flex items-center">
                        <span className="text-yellow-400">Travel</span> <span className="text-white">Planner</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="space-x-6 hidden md:flex">
                    <Link to="/" className="flex items-center text-lg hover:text-yellow-400 transition">
                        <FaHome className="mr-2" /> Home
                    </Link>
                    <Link to="/upload" className="flex items-center text-lg hover:text-yellow-400 transition">
                        <FaUpload className="mr-2" /> Upload
                    </Link>
                    <Link to="/query" className="flex items-center text-lg hover:text-yellow-400 transition">
                        <FaQuestionCircle className="mr-2" /> Query
                    </Link>
                    <Link to="/profile" className="flex items-center text-lg hover:text-yellow-400 transition">
                        <FaUser className="mr-2" /> Profile
                    </Link>
                    <Link to="/login" className="flex items-center text-lg hover:text-yellow-400 transition">
                        <FaSignInAlt className="mr-2" /> Login
                    </Link>
                    <Link to="/signup" className="flex items-center text-lg hover:text-yellow-400 transition">
                        <FaUserPlus className="mr-2" /> Register
                    </Link>
                </nav>

                {/* Mobile Menu Toggle (Optional) */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu (Optional) */}
            <nav className="md:hidden bg-blue-800 text-white">
                <div className="container mx-auto px-6 py-4">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/" className="flex items-center text-lg hover:text-yellow-400 transition">
                                <FaHome className="mr-2" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/upload" className="flex items-center text-lg hover:text-yellow-400 transition">
                                <FaUpload className="mr-2" /> Upload
                            </Link>
                        </li>
                        <li>
                            <Link to="/query" className="flex items-center text-lg hover:text-yellow-400 transition">
                                <FaQuestionCircle className="mr-2" /> Query
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center text-lg hover:text-yellow-400 transition">
                                <FaUser className="mr-2" /> Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="flex items-center text-lg hover:text-yellow-400 transition">
                                <FaSignInAlt className="mr-2" /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="flex items-center text-lg hover:text-yellow-400 transition">
                                <FaUserPlus className="mr-2" /> Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
