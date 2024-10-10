import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUpload, FaQuestionCircle, FaUser, FaSignInAlt, FaUserPlus, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "./AuthContext"; // Import AuthContext

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); // Destructuring Auth Context

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-extrabold flex items-center">
            <span className="text-indigo-400">Travel</span> <span className="text-white">Planner</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="flex items-center text-lg hover:text-indigo-400 transition">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/upload" className="flex items-center text-lg hover:text-indigo-400 transition">
            <FaUpload className="mr-2" /> Upload
          </Link>
          <Link to="/query" className="flex items-center text-lg hover:text-indigo-400 transition">
            <FaQuestionCircle className="mr-2" /> Query
          </Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaUser className="mr-2" /> Profile
              </Link>
              <button onClick={logout} className="flex items-center text-lg hover:text-red-400 transition">
                <FaSignInAlt className="mr-2" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaSignInAlt className="mr-2" /> Login
              </Link>
              <Link to="/signup" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaUserPlus className="mr-2" /> Register
              </Link>
            </>
          )}

          <Link to="/aboutUs" className="flex items-center text-lg hover:text-indigo-400 transition">
            <FaInfoCircle className="mr-2" /> About Us
          </Link>
          <Link to="/contact" className="flex items-center text-lg hover:text-indigo-400 transition">
            <FaEnvelope className="mr-2" /> Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/upload" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaUpload className="mr-2" /> Upload
              </Link>
            </li>
            <li>
              <Link to="/query" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaQuestionCircle className="mr-2" /> Query
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile" className="flex items-center text-lg hover:text-indigo-400 transition">
                    <FaUser className="mr-2" /> Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="flex items-center text-lg hover:text-red-400 transition">
                    <FaSignInAlt className="mr-2" /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="flex items-center text-lg hover:text-indigo-400 transition">
                    <FaSignInAlt className="mr-2" /> Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="flex items-center text-lg hover:text-indigo-400 transition">
                    <FaUserPlus className="mr-2" /> Register
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/aboutUs" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaInfoCircle className="mr-2" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center text-lg hover:text-indigo-400 transition">
                <FaEnvelope className="mr-2" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
