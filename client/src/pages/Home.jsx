import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaCameraRetro, FaComments } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Hero Section */}
      <header
        className="flex-grow flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url(/images/hero-background.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Darker Overlay for Better Contrast */}
        <div className="relative text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-lg max-w-3xl mx-auto mt-16 mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-2xl text-gray-800 mb-8">
            Explore, plan, and enjoy your travel experiences effortlessly.
            Upload images of destinations, ask questions, and get valuable
            recommendations tailored just for you.
          </p>
          <Link
            to="/upload"
            className="bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-800 transition"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                Discover new places to visit with our extensive database of
                destinations. Each recommendation is tailored to your
                preferences.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaCameraRetro size={48} className="mx-auto text-blue-700 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Upload & Share
              </h3>
              <p className="text-gray-700">
                Share your travel experiences by uploading images. Connect with
                other travelers and get inspired by their journeys.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <FaComments size={48} className="mx-auto text-blue-700 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Get Expert Advice
              </h3>
              <p className="text-gray-700">
                Have questions? Get personalized recommendations and expert
                advice from our travel community and planners.
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
                - John Doe
              </h4>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-12 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-8">
                "I love how easy it is to plan my trips with Travel Planner. The
                image upload feature makes sharing my experiences so simple."
              </p>
              <h4 className="text-xl font-semibold text-gray-900">
                - Jane Smith
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8">
            Join thousands of travelers who use Travel Planner to make their
            adventures unforgettable.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
