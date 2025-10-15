import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy text-white text-center px-4">
      <h1 className="text-9xl font-bold text-gold mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-serif mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-300 mb-8 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been removed.
      </p>
      <Link
        to="/"
        className="bg-gold text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
