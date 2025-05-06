import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/utils/SEO';
import { Database, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gray-50 py-20"
    >
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to the DataHive homepage."
      />
      
      <div className="container-custom mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="bg-primary-100 rounded-full p-5"
            >
              <Database className="h-16 w-16 text-primary-500" />
            </motion.div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-secondary-600 mb-8 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our premium data solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/" className="btn btn-primary">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Support
            </Link>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
              <Link to="/" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                Home
              </Link>
              <Link to="/products" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                Products
              </Link>
              <Link to="/categories" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                Categories
              </Link>
              <Link to="/about" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;