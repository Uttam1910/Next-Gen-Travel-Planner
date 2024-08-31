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
import AboutUs from './pages/AboutUs'; // Import About Us page
import Contact from './pages/Contact'; // Import Contact page
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import Privacy Policy page
import TermsOfService from './pages/TermsOfService'; // Import Terms of Service page
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
                    <Route path="/aboutus" element={<AboutUs />} /> {/* Add About Us route */}
                    <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
                    <Route path="/privacy" element={<PrivacyPolicy />} /> {/* Add Privacy Policy route */}
                    <Route path="/terms" element={<TermsOfService />} /> {/* Add Terms of Service route */}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
