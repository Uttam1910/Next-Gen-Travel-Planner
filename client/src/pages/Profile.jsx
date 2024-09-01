import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg max-w-4xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">User Profile</h2>
                {user ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="profile-info p-6 bg-gray-50 rounded-lg shadow-md">
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Basic Information</h3>
                                <p className="text-lg text-gray-600 mb-2"><strong>Name:</strong> {user.name}</p>
                                <p className="text-lg text-gray-600"><strong>Email:</strong> {user.email}</p>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Additional Information</h3>
                                <p className="text-lg text-gray-600 mb-2"><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                                <p className="text-lg text-gray-600 mb-2"><strong>Last Login:</strong> {new Date(user.lastLogin).toLocaleDateString()}</p>
                                <p className="text-lg text-gray-600 mb-2"><strong>Bio:</strong> {user.bio || 'No bio available'}</p>
                                <p className="text-lg text-gray-600"><strong>Location:</strong> {user.location || 'Not specified'}</p>
                            </div>
                        </div>
                        <div className="profile-actions p-6 bg-gray-50 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Actions</h3>
                            <div className="space-y-4">
                                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">Edit Profile</button>
                                <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300">Delete Account</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-600 text-center">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
