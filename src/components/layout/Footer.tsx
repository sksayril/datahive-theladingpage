import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Link to="/" className="flex items-center mb-4">
  <img 
    src="/logo.png" 
    alt="DataHive Logo" 
    className="h-10 w-10 object-contain" 
  />
  <span className="ml-2 text-xl font-bold text-white">
    Data<span className="text-primary-400">Hive</span>
  </span>
</Link>
            <p className="text-secondary-300 mb-4">
              Premium data solutions for businesses of all sizes. Quality leads at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Data Categories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products#leads" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Marketing Leads
                </Link>
              </li>
              <li>
                <Link to="/products#analytics" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/products#consulting" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Data Consulting
                </Link>
              </li>
              <li>
                <Link to="/products#enrichment" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Data Enrichment
                </Link>
              </li>
              <li>
                <Link to="/products#custom" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-secondary-300">
                  123 Data Street, Analytics City, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <a href="tel:+1234567890" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <a href="mailto:info@datahive.com" className="text-secondary-300 hover:text-primary-400 transition-colors">
                  info@datahive.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} DataHive. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-secondary-400 text-sm hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-400 text-sm hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-secondary-400 text-sm hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;