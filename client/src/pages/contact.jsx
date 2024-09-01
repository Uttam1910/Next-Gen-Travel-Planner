import React, { useState } from 'react';
import axiosInstance from '../helper/axiosInstance'; // Adjust the import path as needed

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/contact', formData);
            if (response.status === 200) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('Failed to send message.');
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="contact px-6 py-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h1>
                <p className="text-lg text-gray-700">
                    We value your feedback and inquiries. Reach out to us through any of the following methods, and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* Contact Information & Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
                    <ul className="space-y-4 text-gray-600">
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:contact@yourcompany.com" className="text-blue-600 hover:underline"> contact@yourcompany.com</a>
                        </li>
                        <li>
                            <strong>Phone:</strong>
                            <a href="tel:+1234567890" className="text-blue-600 hover:underline"> +123-456-7890</a>
                        </li>
                        <li>
                            <strong>Address:</strong> 123 Your Street, Your City, Your Country
                        </li>
                        <li>
                            <strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM
                        </li>
                        <li>
                            <strong>Support:</strong> For support, please visit our <a href="/support" className="text-blue-600 hover:underline">Support Center</a>
                        </li>
                        <li>
                            <strong>Follow Us:</strong>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://facebook.com/yourcompany" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a>
                                <a href="https://twitter.com/yourcompany" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <a href="https://instagram.com/yourcompany" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                                placeholder="Your Name" 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                                placeholder="Your Email" 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="6" 
                                value={formData.message} 
                                onChange={handleChange} 
                                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" 
                                placeholder="Your Message" 
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white rounded px-6 py-3 hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Submit
                        </button>
                    </form>
                    {status && <p className="mt-4 text-gray-700">{status}</p>}
                </div>
            </div>

            {/* Location Map */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Location</h2>
                <div className="relative w-full h-80">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799140087!2d-74.25986786942512!3d40.697149413782245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f1d41453ba03%3A0x6968d7f9ff97f0c5!2sYour%20Company!5e0!3m2!1sen!2sus!4v1591012345678!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
