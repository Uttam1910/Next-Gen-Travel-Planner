import React from 'react';

const TermsOfService = () => {
    return (
        <div className="terms-of-service px-6 py-10 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-6">
                Welcome to Next Zen Travel Planner! By using our website and services, you agree to the following Terms of Service. Please read them carefully.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-6">
                By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service and our Privacy Policy.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Use of Our Services</h2>
            <p className="mb-6">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for any activity that occurs under your account.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-6">
                All content and materials on our website are the property of Next Zen Travel Planner or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
                We are not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="mb-6">
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of the modified terms.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6">
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@travelplanner.com" className="text-blue-600 hover:underline">support@travelplanner.com</a>.
            </p>
            <p className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString()}
            </p>
        </div>
    );
};

export default TermsOfService;
