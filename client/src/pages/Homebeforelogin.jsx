import React from "react";
import { Link } from "react-router-dom";

import bgImage from "./bg.webp";

import {
  FaMapMarkedAlt,
  FaCameraRetro,
  FaComments,
  FaPlane,
} from "react-icons/fa";
import {
  FaGlobe,
  FaHandsHelping,
  FaUpload,
  FaQuestionCircle,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header
        className="flex-grow flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darker Overlay for Better Contrast */}
        <div className="relative text-center p-10 bg-white bg-opacity-0 rounded-lg shadow-lg max-w-4xl mx-auto mt-20 mb-20">
        <h1 className="text-5xl font-extrabold text-white mb-8">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white mb-8">
            Embark on a journey with personalized recommendations. Explore, plan, and enjoy your travel experiences with ease.
          </p>
          <Link
            to="/upload"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            Start Exploring
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-16">
            Why Choose Travel Planner?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaMapMarkedAlt
                size={48}
                className="mx-auto text-blue-700 mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Explore Destinations
              </h3>
              <p className="text-gray-700">
                Discover hidden gems and popular destinations worldwide with
                recommendations tailored to your interests.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaCameraRetro size={48} className="mx-auto text-blue-700 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Capture & Share Moments
              </h3>
              <p className="text-gray-700">
                Easily upload and share your travel photos, and inspire others
                with your adventures.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaComments size={48} className="mx-auto text-blue-700 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Get Personalized Advice
              </h3>
              <p className="text-gray-700">
                Receive personalized tips and recommendations from seasoned
                travelers and experts.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaPlane size={48} className="mx-auto text-blue-700 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Plan Seamless Journeys
              </h3>
              <p className="text-gray-700">
                Organize every detail of your trip effortlessly, from flights to
                accommodations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaGlobe size={48} className="mx-auto text-blue-700 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Global Community
              </h3>
              <p className="text-gray-700">
                Connect with a global network of travelers, share experiences,
                and gain insights from around the world.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaHandsHelping
                size={48}
                className="mx-auto text-blue-700 mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-700">
                Enjoy peace of mind with round-the-clock customer support to
                assist you during your travels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 p-12 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-8">
                "Travel Planner helped me discover some hidden gems on my last
                trip to Europe. The personalized recommendations were spot on!"
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                - Rajesh Kumar
              </h4>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-12 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-8">
                "I love how easy it is to plan my trips with Travel Planner. The
                image upload feature makes sharing my experiences so simple."
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                - Emily Wong
              </h4>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-100 p-12 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-8">
                "The best travel tool I’ve ever used! Thanks to Travel Planner,
                my family and I had the most amazing holiday in Kerala."
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                - Aishwarya Singh
              </h4>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-gray-100 p-12 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-8">
                "Travel Planner’s advice made our honeymoon in Bali
                unforgettable. The tips were invaluable!"
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                - Michael Brown
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
  <div className="container mx-auto px-8 text-center">
    <h2 className="text-4xl font-semibold mb-8">
    Embark on Your Next Adventure
    </h2>
    <p className="text-lg mb-8">
    At Travel Planner, we transform your travel dreams into reality. With cutting-edge tools and a global community of explorers, plan your perfect trip with ease and confidence. Whether it's a weekend getaway or an epic journey, our platform ensures you have the insights and resources needed to create unforgettable experiences.
    </p>
    <Link
      to="/signup"
      className="bg-blue-500 text-white px-10 py-5 rounded-lg shadow-lg hover:bg-blue-400 transition"
    >
      Join Us Today
    </Link>
  </div>
</section>


    </div>
  );
};

export default Home;
