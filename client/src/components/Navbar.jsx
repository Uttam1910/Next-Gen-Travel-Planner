import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-blue-800 text-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-4xl font-extrabold">Travel Planner</h1>
                <nav className="space-x-6">
                    <Link to="/login" className="text-lg hover:text-blue-300 transition">Login</Link>
                    <Link to="/signup" className="text-lg hover:text-blue-300 transition">Signup</Link>
                    <Link to="/profile" className="text-lg hover:text-blue-300 transition">Profile</Link>
                    <Link to="/upload" className="text-lg hover:text-blue-300 transition">Upload Image</Link>
                    <Link to="/query" className="text-lg hover:text-blue-300 transition">Query</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
