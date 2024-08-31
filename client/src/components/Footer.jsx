import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-auto">
            <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col md:flex-row justify-around items-start md:items-center space-y-8 md:space-y-0 md:space-x-8 mb-12">
                    {/* About Section */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-3xl font-bold mb-4 text-indigo-400">About Us</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Travel Planner is your go-to solution for exploring, planning, and enjoying your next adventure. Our platform offers personalized recommendations based on your preferences and interests, ensuring an unforgettable experience every time.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-3xl font-bold mb-4 text-indigo-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
                            </li>
                            <li>
                                <Link to="/upload" className="hover:text-indigo-400 transition">Upload Image</Link>
                            </li>
                            <li>
                                <Link to="/query" className="hover:text-indigo-400 transition">Query</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:text-indigo-400 transition">Profile</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs" className="hover:text-indigo-400 transition">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-indigo-400 transition">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Privacy & Terms Section */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-3xl font-bold mb-4 text-indigo-400">Privacy & Terms</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We value your privacy and are committed to protecting your personal information. Please review our Privacy Policy and Terms of Service to understand how we handle your data.
                        </p>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="flex-1 min-w-[200px]">
                        <h3 className="text-3xl font-bold mb-4 text-indigo-400">Contact Us</h3>
                        <ul className="space-y-4">
                            <li>Email: <a href="mailto:support@travelplanner.com" className="hover:text-indigo-400 transition">support@travelplanner.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-indigo-400 transition">+123-456-7890</a></li>
                            <li>Address: <span className="text-gray-400">123 Travel St, Adventure City, World</span></li>
                        </ul>
                        <div className="flex justify-center space-x-6 mt-8">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaFacebook size={28} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaInstagram size={28} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Travel Planner. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        <Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link> | <Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
