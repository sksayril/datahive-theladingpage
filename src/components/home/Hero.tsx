import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Activity, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://dashboard.datahive.co.in';
  };

  // Detect if user is from India based on timezone
  const isIndianUser = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith('Asia/Kolkata');
  const price = isIndianUser ? '₹399' : '$5.99';

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Data Solutions for 
              <span className="text-primary-500"> Business Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-4">
              Quality leads at competitive prices to supercharge your marketing and sales efforts. Unlock the power of data with DataHive.
            </p>
            <div className="bg-primary-50 rounded-lg p-4 mb-8">
              <p className="text-primary-800 font-semibold">
                Starting at just <span className="text-2xl">{price}</span>/month
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleGetStarted}
                className="btn btn-primary"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link to="/products" className="btn btn-secondary">
                View Pricing
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-primary-500">5M+</span>
                <span className="text-secondary-600">Quality Leads</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-primary-500">98%</span>
                <span className="text-secondary-600">Accuracy Rate</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col"
              >
                <span className="text-3xl font-bold text-primary-500">2K+</span>
                <span className="text-secondary-600">Happy Clients</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Hero Image/Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Main illustration */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary-100">
                <img 
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Data visualization dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating elements with physics-based animations */}
              <motion.div 
                className="absolute -top-10 -left-10 bg-primary-500 text-white p-4 rounded-lg shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut",
                  times: [0, 0.2, 0.8, 1]
                }}
              >
                <Database className="h-8 w-8" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/4 -right-6 bg-white p-3 rounded-lg shadow-xl flex items-center space-x-2"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut",
                  times: [0, 0.3, 0.7, 1]
                }}
              >
                <div className="bg-primary-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-xs font-bold">Lead Data</p>
                  <p className="text-xs text-green-500">+27% Growth</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 left-1/4 bg-white p-3 rounded-lg shadow-xl flex items-center space-x-2"
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, -5, 5, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3.5, 
                  ease: "easeInOut",
                  times: [0, 0.4, 0.6, 1]
                }}
              >
                <div className="bg-accent-100 p-2 rounded-full">
                  <Activity className="h-5 w-5 text-accent-500" />
                </div>
                <div>
                  <p className="text-xs font-bold">Analytics</p>
                  <p className="text-xs text-primary-500">Real-time</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;