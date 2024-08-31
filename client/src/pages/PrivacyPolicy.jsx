import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy px-6 py-10 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-6">
                Welcome to Next Zen Travel Planner! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-6">
                We may collect the following types of information:
                <ul className="list-disc pl-6">
                    <li>Personal Information: such as your name, email address, and contact details.</li>
                    <li>Usage Data: including your IP address, browser type, and usage patterns on our site.</li>
                    <li>Cookies: small data files stored on your device to enhance your browsing experience.</li>
                </ul>
            </p>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-6">
                We use your information to:
                <ul className="list-disc pl-6">
                    <li>Provide and improve our services.</li>
                    <li>Respond to your inquiries and support requests.</li>
                    <li>Personalize your experience on our website.</li>
                    <li>Send you updates, marketing materials, and promotional offers (with your consent).</li>
                </ul>
            </p>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-6">
                We implement various security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-6">
                You have the right to:
                <ul className="list-disc pl-6">
                    <li>Access and update your personal information.</li>
                    <li>Request the deletion of your personal data.</li>
                    <li>Opt-out of receiving promotional communications.</li>
                </ul>
            </p>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@travelplanner.com" className="text-blue-600 hover:underline">support@travelplanner.com</a>.
            </p>
            <p className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString()}
            </p>
        </div>
    );
};

export default PrivacyPolicy;
