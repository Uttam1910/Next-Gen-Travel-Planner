import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import UploadImage from './pages/UploadImage';
import Query from './pages/Query';
import './styles/global.css'; // Ensure Tailwind styles are included

const App = () => {
    return (
        <Router>
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/upload" element={<UploadImage />} />
                    <Route path="/query" element={<Query />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
