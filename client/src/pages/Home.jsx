import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Next-Gen Travel Planner</h1>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/upload">Upload Image</Link></li>
                    <li><Link to="/query">Query</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
