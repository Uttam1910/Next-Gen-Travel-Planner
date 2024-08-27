
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-grow flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
                <div className="text-center p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Discover Your Next Adventure</h2>
                    <p className="text-xl text-gray-700 mb-6">
                        Explore, plan, and enjoy your travel experiences effortlessly. Upload images of destinations, ask questions, and get valuable recommendations tailored just for you.
                    </p>
                    <Link to="/upload" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                        Start Exploring
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;
