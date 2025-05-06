import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/utils/SEO';
import SectionTitle from '../components/common/SectionTitle';
import { Database, Users, BarChart2, Zap, Globe, Lock } from 'lucide-react';

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

const ProductsPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="Products"
        description="Explore DataHive's premium data solutions and quality leads at competitive prices. Find the right data package for your business needs."
        keywords="data products, marketing leads, data analytics, business data, lead generation"
      />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary-600 to-primary-500 text-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-primary-100 text-lg md:text-xl">
              Premium data solutions to power your business growth at competitive prices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Product Categories */}
      <section className="py-16 md:py-24" id="leads">
        <div className="container-custom mx-auto">
          <SectionTitle
            title="Marketing Leads"
            subtitle="High-quality leads to supercharge your sales and marketing efforts."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
               {
                name: "Free Traial",
                price: "$0 / ₹0",
                features: [
                  "Signup",
                  "Signin",
                  "Dashboard Access",
                  "No 24/7 support",
                  "No Best Premium Leads Access",
                  "No And get the early access to our new features",
                ],
                highlight: false
              },
              
              {
                name: "Business Growth",
                price: "$5.99 / ₹399",
                features: [
                  "Targeted B2B leads",
                  "200 free Lead Coinds",
                  "Generative Ai chat Fetures",
                  "24/7 support",
                  "Best Premium Leads Access",
                  "And get the early access to our new features",
                ],
                highlight: true
              },
              
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                  plan.highlight 
                    ? 'border-2 border-primary-500 relative' 
                    : 'border border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-primary-500 text-white text-sm font-semibold py-1 px-3 absolute top-0 right-0 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-secondary-900">{plan.price}</span>
                    <span className="text-secondary-500">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
  href="https://dashboard.datahive.co.in" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full block"
>
  <button className={`w-full py-3 rounded-md font-medium ${
    plan.highlight 
      ? 'bg-primary-500 text-white hover:bg-primary-600' 
      : 'bg-white text-primary-600 border border-primary-500 hover:bg-primary-50'
  } transition-colors`}>
    Get Started
  </button>
</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Data Analytics */}
      <section className="py-16 md:py-24 bg-gray-50" id="analytics">
        <div className="container-custom mx-auto">
          <SectionTitle
            title="Data Analytics Solutions"
            subtitle="Powerful analytics tools to derive actionable insights from your data."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <BarChart2 className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Analytics Platform</h3>
                </div>
                <p className="text-secondary-600 mb-6">
                  Our comprehensive analytics platform provides powerful visualization tools, custom reporting, and actionable insights to help you make data-driven decisions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">Interactive dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">Custom report building</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">Trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">Data integration capabilities</span>
                  </li>
                </ul>
                <div className="font-semibold text-lg mb-2">Starting at $799/month</div>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Zap className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Predictive Analytics</h3>
                </div>
                <p className="text-secondary-600 mb-6">
                  Leverage the power of predictive modeling and machine learning to forecast trends, identify opportunities, and optimize your business operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">Customer behavior prediction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">Market trend forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">Risk assessment modeling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-600">AI-powered recommendations</span>
                  </li>
                </ul>
                <div className="font-semibold text-lg mb-2">Starting at $1,299/month</div>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Other Products/Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <SectionTitle
            title="Additional Services"
            subtitle="Complementary solutions to enhance your data strategy."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Database className="h-8 w-8 text-primary-500" />,
                title: "Data Enrichment",
                description: "Enhance your existing data with additional attributes and insights to improve targeting and personalization.",
                id: "enrichment"
              },
              {
                icon: <Globe className="h-8 w-8 text-primary-500" />,
                title: "Global Market Insights",
                description: "Access data and analytics from international markets to inform your global business strategy.",
                id: "global"
              },
              {
                icon: <Users className="h-8 w-8 text-primary-500" />,
                title: "Data Consulting",
                description: "Work with our experts to develop customized data strategies tailored to your business objectives.",
                id: "consulting"
              },
              {
                icon: <Lock className="h-8 w-8 text-primary-500" />,
                title: "Data Compliance Solutions",
                description: "Ensure your data usage complies with regulations like GDPR, CCPA, and other privacy laws.",
                id: "compliance"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary-500" />,
                title: "Integration Services",
                description: "Seamlessly connect our data solutions with your existing CRM, marketing, or sales platforms.",
                id: "integration"
              },
              {
                icon: <BarChart2 className="h-8 w-8 text-primary-500" />,
                title: "Custom Solutions",
                description: "Tailored data products designed specifically for your unique business requirements.",
                id: "custom"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="bg-primary-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-secondary-600 mb-4">{service.description}</p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                  Not Sure Which Solution Is Right For You?
                </h2>
                <p className="text-secondary-600 text-lg mb-8 max-w-lg">
                  Our data experts are ready to help you find the perfect data solution for your business needs. Schedule a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="btn btn-primary">
                    Schedule Consultation
                  </a>
                  <a href="#" className="btn btn-secondary">
                    View Case Studies
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductsPage;