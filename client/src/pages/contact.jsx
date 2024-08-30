import React from 'react';

const Contact = () => {
    return (
        <div className="contact px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="mb-4">
                We'd love to hear from you. Here's how you can reach us...
            </p>
            <ul className="mb-6">
                <li><strong>Email:</strong> contact@yourcompany.com</li>
                <li><strong>Phone:</strong> +123-456-7890</li>
                <li><strong>Address:</strong> 123 Your Street, Your City, Your Country</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="contact-form space-y-4">
                <div>
                    <label htmlFor="name" className="block font-semibold">Name</label>
                    <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2" required />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold">Email</label>
                    <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" required />
                </div>
                <div>
                    <label htmlFor="message" className="block font-semibold">Message</label>
                    <textarea id="message" name="message" rows="5" className="w-full border border-gray-300 rounded px-3 py-2" required></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">Submit</button>
            </form>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Location</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799140087!2d-74.25986786942512!3d40.697149413782245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f1d41453ba03%3A0x6968d7f9ff97f0c5!2sYour%20Company!5e0!3m2!1sen!2sus!4v1591012345678!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
            ></iframe>
        </div>
    );
};

export default Contact;
