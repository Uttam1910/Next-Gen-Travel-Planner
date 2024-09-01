import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Us</h1>
            <p className="mb-6 text-center text-lg text-gray-700">
                Welcome to <span className="font-semibold text-blue-600">Next Zen Travel Planner</span>, where innovation meets excellence. Our mission is to provide cutting-edge solutions that drive success for our clients, with a vision to lead the future of travel planning through unparalleled service and dedication.
            </p>
            <p className="mb-6 text-center text-lg text-gray-700">
                Founded in July 2024, <span className="font-semibold text-blue-600">Next Zen Travel Planner</span> began with a simple idea: to revolutionize the way people plan their travel experiences. Over the past two months, we've grown into a team of dedicated professionals who are passionate about delivering top-notch services to our clients.
            </p>
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Our Core Values</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="core-value bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Integrity</h3>
                    <p className="text-gray-700">
                        We adhere to the highest ethical standards and are committed to transparency and honesty in all our dealings.
                    </p>
                </div>
                <div className="core-value bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Innovation</h3>
                    <p className="text-gray-700">
                        We embrace creativity and encourage new ideas to provide cutting-edge solutions that set us apart.
                    </p>
                </div>
                <div className="core-value bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Customer Satisfaction</h3>
                    <p className="text-gray-700">
                        Our clients' needs are our top priority. We strive to exceed expectations and deliver exceptional experiences.
                    </p>
                </div>
                <div className="core-value bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Excellence</h3>
                    <p className="text-gray-700">
                        We are dedicated to providing high-quality services and solutions, ensuring the highest level of performance and reliability.
                    </p>
                </div>
                <div className="core-value bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Collaboration</h3>
                    <p className="text-gray-700">
                        We believe in the power of teamwork and actively foster a collaborative environment to achieve our goals together.
                    </p>
                </div>
                <div className="core-value bg-blue-100 p-6 rounded-lg shadow-lg max-w-xs">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Sustainability</h3>
                    <p className="text-gray-700">
                        We are committed to sustainable practices that benefit both our clients and the environment, ensuring long-term positive impact.
                    </p>
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div className="team-member text-center">
                    <img src="/images/uttam.JPG" alt="Uttam" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-lg" />
                    <h3 className="font-bold text-xl text-gray-900">Uttam</h3>
                    <p className="text-lg text-gray-600">CEO & Founder</p>
                </div>
                <div className="team-member text-center">
                    <img src="/images/anurag.jpg" alt="Anurag" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-lg" />
                    <h3 className="font-bold text-xl text-gray-900">Anurag</h3>
                    <p className="text-lg text-gray-600">Lead Developer</p>
                </div>
                <div className="team-member text-center">
                    <img src="/images/shubham.jpg" alt="Shubham" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-lg" />
                    <h3 className="font-bold text-xl text-gray-900">Shubham</h3>
                    <p className="text-lg text-gray-600">Product Manager</p>
                </div>
                <div className="team-member text-center">
                    <img src="/images/shruti.png" alt="Shruti" className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-lg" />
                    <h3 className="font-bold text-xl text-gray-900">Shruti</h3>
                    <p className="text-lg text-gray-600">Marketing Specialist</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
