import React, { useState } from 'react';
import axiosInstance from '../helper/axiosInstance'; // Import the custom Axios instance
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Icons for better UI

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setError('Invalid email format.');
            setLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            setLoading(false);
            return;
        }

        try {
            const res = await axiosInstance.post('/auth/register', formData); // Use axiosInstance
            setSuccess('Registration successful!');
            setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center border-b-2 border-gray-300 py-2">
                        <FaUser className="text-gray-500 mr-3" />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 text-gray-900 bg-transparent focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border-b-2 border-gray-300 py-2">
                        <FaEnvelope className="text-gray-500 mr-3" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 text-gray-900 bg-transparent focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center border-b-2 border-gray-300 py-2">
                        <FaLock className="text-gray-500 mr-3" />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 text-gray-900 bg-transparent focus:outline-none"
                        />
                    </div>
                    {error && <p className="text-red-500 text-center text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-center text-sm">{success}</p>}
                    {loading && <div className="text-center"><span className="loader"></span></div>}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-full font-bold hover:opacity-90 transition duration-300"
                    >
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>

                    <div className="flex justify-between items-center mt-4 text-sm">
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Already have an account? Login here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
