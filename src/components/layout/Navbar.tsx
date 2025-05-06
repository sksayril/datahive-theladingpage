import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
  <img 
    src="/logo.png" 
    alt="DataHive Logo" 
    className="h-12 w-12 object-contain" 
    
  />
  <span className="ml-2 text-xl font-bold text-secondary-900">
    Data<span className="text-primary-500">Hive</span>
  </span>
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : 'text-secondary-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : 'text-secondary-700'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : 'text-secondary-700'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : 'text-secondary-700'
                }`
              }
            >
              Data Categories
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-500 ${
                  isActive ? 'text-primary-500' : 'text-secondary-700'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
  <a 
    href="https://dashboard.datahive.co.in" 
    className="btn btn-primary" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Get Started
  </a>
</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 right-0 overflow-hidden shadow-lg"
          >
            <nav className="container-custom mx-auto py-4 flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-2 px-4 text-base font-medium rounded-md ${
                    isActive
                      ? 'bg-primary-50 text-primary-500'
                      : 'text-secondary-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `py-2 px-4 text-base font-medium rounded-md ${
                    isActive
                      ? 'bg-primary-50 text-primary-500'
                      : 'text-secondary-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              
              {/* Products with submenu */}
              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="w-full flex items-center justify-between py-2 px-4 text-base font-medium rounded-md text-secondary-700 hover:bg-gray-50"
                >
                  <span>Products</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 overflow-hidden"
                    >
                      <NavLink
                        to="/products"
                        className={({ isActive }) =>
                          `py-2 px-4 text-sm font-medium block ${
                            isActive
                              ? 'text-primary-500'
                              : 'text-secondary-600 hover:text-primary-500'
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        All Products
                      </NavLink>
                      <NavLink
                        to="/products#leads"
                        className="py-2 px-4 text-sm font-medium block text-secondary-600 hover:text-primary-500"
                        onClick={() => setIsOpen(false)}
                      >
                        Marketing Leads
                      </NavLink>
                      <NavLink
                        to="/products#analytics"
                        className="py-2 px-4 text-sm font-medium block text-secondary-600 hover:text-primary-500"
                        onClick={() => setIsOpen(false)}
                      >
                        Data Analytics
                      </NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `py-2 px-4 text-base font-medium rounded-md ${
                    isActive
                      ? 'bg-primary-50 text-primary-500'
                      : 'text-secondary-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Data Categories
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `py-2 px-4 text-base font-medium rounded-md ${
                    isActive
                      ? 'bg-primary-50 text-primary-500'
                      : 'text-secondary-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <Link
                to="/contact"
                className="btn btn-primary mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;