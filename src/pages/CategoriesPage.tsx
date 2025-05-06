import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/utils/SEO';
import SectionTitle from '../components/common/SectionTitle';
import { 
  Briefcase, Building, ShoppingCart, Users, 
  Heart, Landmark, GraduationCap, Home, Truck, 
  Globe, Coffee, Utensils 
} from 'lucide-react';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface Category {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  leadCount: string;
  industries: string[];
}

const CategoriesPage: React.FC = () => {
  const categories: Category[] = [
    {
      id: "b2b",
      icon: <Briefcase className="h-8 w-8 text-primary-500" />,
      title: "B2B Data",
      description: "Quality business leads across industries to power your B2B sales and marketing efforts.",
      leadCount: "2.5M+",
      industries: ["Technology", "Manufacturing", "Professional Services", "Wholesale"]
    },
    {
      id: "corporate",
      icon: <Building className="h-8 w-8 text-primary-500" />,
      title: "Corporate Solutions",
      description: "Enterprise-grade data solutions for large organizations and corporations with complex needs.",
      leadCount: "1.2M+",
      industries: ["Fortune 500", "Multinational Corporations", "Enterprise Companies"]
    },
    {
      id: "retail",
      icon: <ShoppingCart className="h-8 w-8 text-primary-500" />,
      title: "Retail & E-commerce",
      description: "Consumer insights and purchasing behavior data for retail businesses of all sizes.",
      leadCount: "3.8M+",
      industries: ["E-commerce", "Brick & Mortar", "Omnichannel Retail", "D2C Brands"]
    },
    {
      id: "consumer",
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: "Consumer Data",
      description: "Detailed consumer profiles and demographic information for targeted marketing campaigns.",
      leadCount: "10M+",
      industries: ["FMCG", "Marketing Agencies", "Media Companies", "Subscription Services"]
    },
    {
      id: "healthcare",
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: "Healthcare",
      description: "Compliant healthcare provider and organization data for medical and pharmaceutical companies.",
      leadCount: "1.5M+",
      industries: ["Hospitals", "Medical Practices", "Pharmaceuticals", "Medical Devices"]
    },
    {
      id: "financial",
      icon: <Landmark className="h-8 w-8 text-primary-500" />,
      title: "Financial Services",
      description: "Data solutions for banks, insurance companies, and other financial institutions.",
      leadCount: "900K+",
      industries: ["Banking", "Insurance", "Wealth Management", "FinTech"]
    },
    {
      id: "education",
      icon: <GraduationCap className="h-8 w-8 text-primary-500" />,
      title: "Education",
      description: "Data on educational institutions, students, and professionals in the education sector.",
      leadCount: "750K+",
      industries: ["K-12", "Higher Education", "EdTech", "Training & Development"]
    },
    {
      id: "realestate",
      icon: <Home className="h-8 w-8 text-primary-500" />,
      title: "Real Estate",
      description: "Property data, market trends, and leads for real estate professionals and companies.",
      leadCount: "1.8M+",
      industries: ["Residential", "Commercial", "Property Management", "Construction"]
    },
    {
      id: "logistics",
      icon: <Truck className="h-8 w-8 text-primary-500" />,
      title: "Logistics & Transportation",
      description: "Data for shipping, logistics, and transportation companies to optimize operations.",
      leadCount: "650K+",
      industries: ["Freight", "Shipping", "Supply Chain", "Fleet Management"]
    },
    {
      id: "international",
      icon: <Globe className="h-8 w-8 text-primary-500" />,
      title: "International Markets",
      description: "Global data sets covering multiple regions for international business expansion.",
      leadCount: "4.2M+",
      industries: ["Import/Export", "Global Enterprises", "International Trade"]
    },
    {
      id: "hospitality",
      icon: <Coffee className="h-8 w-8 text-primary-500" />,
      title: "Hospitality",
      description: "Data for hotels, restaurants, and travel companies to enhance customer experiences.",
      leadCount: "920K+",
      industries: ["Hotels", "Resorts", "Tourism", "Event Management"]
    },
    {
      id: "food",
      icon: <Utensils className="h-8 w-8 text-primary-500" />,
      title: "Food & Beverage",
      description: "Industry-specific data for restaurants, food producers, and beverage companies.",
      leadCount: "1.1M+",
      industries: ["Restaurants", "Food Production", "Beverage Companies", "Catering"]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="Data Categories"
        description="Explore DataHive's extensive range of data categories tailored to different industries and business needs."
        keywords="data categories, business data, industry data, marketing data, lead categories"
      />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary-600 to-primary-500 text-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Categories</h1>
            <p className="text-primary-100 text-lg md:text-xl">
              Explore our comprehensive range of data categories tailored to different industries and business needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search/Filter Section */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Browsing all data categories</h2>
              <p className="text-secondary-600">12 categories available</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="w-full md:w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <svg 
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories List */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mr-4">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <span className="text-primary-500 font-medium">{category.leadCount} leads</span>
                    </div>
                  </div>
                  <p className="text-secondary-600 mb-4">
                    {category.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-secondary-700 mb-2">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.industries.map((industry, i) => (
                        <span key={i} className="text-xs bg-primary-50 text-primary-600 py-1 px-2 rounded-md">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={`/products#${category.id}`} 
                    className="btn btn-primary w-full text-center"
                  >
                    Explore Data
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Data Solutions */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <SectionTitle
            title="Need a Custom Data Solution?"
            subtitle="Don't see what you're looking for? We can create custom data packages tailored to your specific needs."
            centered={true}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl border border-primary-100 p-8 md:p-12 mt-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-secondary-600 mb-8">
              Our data experts can work with you to develop a customized data solution that perfectly fits your business requirements, industry, and goals.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request Custom Solution
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Data Quality Guarantee */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Data Quality Guarantee</h2>
              <p className="text-secondary-600 mb-6">
                At DataHive, we stand behind the quality of our data. Our rigorous verification processes ensure that you receive accurate, up-to-date, and compliant data for all your business needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">98% Accuracy Rate</h3>
                    <p className="text-secondary-600">Our data undergoes rigorous verification to ensure exceptional accuracy.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Regular Updates</h3>
                    <p className="text-secondary-600">All data is regularly refreshed to ensure you have the most current information.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Compliance Assured</h3>
                    <p className="text-secondary-600">All data is collected and processed in compliance with relevant regulations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg">Satisfaction Guarantee</h3>
                    <p className="text-secondary-600">If you're not satisfied with our data quality, we'll provide a refund or replacement.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Data quality assurance"
                className="rounded-xl shadow-xl"
              />
              
              <motion.div
                className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">98%</p>
                    <p className="text-xs text-secondary-600">Accuracy</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CategoriesPage;