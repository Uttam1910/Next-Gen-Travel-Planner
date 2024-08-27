import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Travel Planner is your go-to solution for exploring, planning, and enjoying your next adventure. Our platform offers personalized recommendations based on your preferences and interests, ensuring an unforgettable experience every time.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/upload" className="hover:text-blue-400 transition">Upload Image</Link>
                            </li>
                            <li>
                                <Link to="/query" className="hover:text-blue-400 transition">Query</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:text-blue-400 transition">Profile</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>Email: <a href="mailto:support@travelplanner.com" className="hover:text-blue-400 transition">support@travelplanner.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-400 transition">+123-456-7890</a></li>
                        </ul>
                        <div className="flex space-x-6 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                                <FaFacebook size={28} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                                <FaInstagram size={28} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Travel Planner. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
