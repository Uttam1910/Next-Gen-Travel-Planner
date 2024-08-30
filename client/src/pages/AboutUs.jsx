import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us px-6 py-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="mb-4">
                Welcome to [Your Company Name], where innovation meets excellence. Our mission is to provide cutting-edge solutions that drive success for our clients, with a vision to lead the future of innovation through unparalleled service and dedication.
            </p>
            <p className="mb-4">
                Founded in [Year], [Your Company Name] started with a simple idea: [Brief History/Story]. Over the years, we've grown into a team of dedicated professionals who are passionate about delivering top-notch services to our clients.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
            <ul className="list-disc pl-6 mb-6">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
                <li>Excellence</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="team-member text-center">
                    <img src="team-member1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-2" />
                    <h3 className="font-bold">John Doe</h3>
                    <p>CEO & Founder</p>
                </div>
                <div className="team-member text-center">
                    <img src="team-member2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-2" />
                    <h3 className="font-bold">Jane Smith</h3>
                    <p>CTO</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
