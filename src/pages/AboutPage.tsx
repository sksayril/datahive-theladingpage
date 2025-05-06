import React from 'react';
import { motion } from 'framer-motion';
import { Database, Award, Users, TrendingUp } from 'lucide-react';
import SEO from '../components/utils/SEO';
import SectionTitle from '../components/common/SectionTitle';

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

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="About Us"
        description="Learn about DataHive's mission, vision, and our commitment to providing premium data solutions."
        keywords="about datahive, data solutions company, data experts, data company history"
      />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary-600 to-primary-500 text-white">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DataHive</h1>
            <p className="text-primary-100 text-lg md:text-xl">
              We are on a mission to provide premium data solutions that help businesses grow and succeed in today's data-driven world.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-secondary-600 mb-4">
                Founded in 2018, DataHive began with a simple yet powerful vision: to make high-quality data accessible to businesses of all sizes.
              </p>
              <p className="text-secondary-600 mb-4">
                Our founders recognized a gap in the market – while data was abundant, truly reliable, actionable data was scarce and often prohibitively expensive for many organizations.
              </p>
              <p className="text-secondary-600 mb-4">
                We set out to change that by building a company focused on data quality, affordability, and customer success. Today, DataHive serves thousands of clients worldwide, from startups to Fortune 500 companies, with the premium data solutions they need to thrive.
              </p>
              <p className="text-secondary-600">
                Our commitment to excellence, accuracy, and innovation has made us a trusted partner for businesses across industries seeking to leverage the power of data.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="DataHive team at work"
                className="rounded-xl shadow-xl"
              />
              
              <motion.div
                className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Award className="h-12 w-12 text-primary-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom mx-auto">
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Guiding principles that drive everything we do at DataHive."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-500"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-secondary-600 mb-4">
                To democratize access to high-quality data by providing premium solutions at competitive prices, enabling businesses of all sizes to make data-driven decisions.
              </p>
              <p className="text-secondary-600">
                We believe that reliable data should be accessible to every organization seeking to grow and innovate, not just those with enterprise budgets.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-accent-500"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-secondary-600 mb-4">
                To become the world's most trusted data provider, known for our unwavering commitment to accuracy, innovation, and customer success.
              </p>
              <p className="text-secondary-600">
                We envision a future where every business decision is powered by reliable data, leading to more efficient operations, better customer experiences, and sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our work and shape our company culture."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="rounded-full bg-primary-50 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Data Integrity</h3>
              <p className="text-secondary-600">
                We are unwavering in our commitment to data accuracy, quality, and reliability.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="rounded-full bg-primary-50 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Success</h3>
              <p className="text-secondary-600">
                We succeed when our customers succeed. Their goals drive our innovations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="rounded-full bg-primary-50 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
              <p className="text-secondary-600">
                We constantly evolve our methodologies and technologies to stay ahead of the curve.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="rounded-full bg-primary-50 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-secondary-600">
                We make premium data accessible to businesses of all sizes through fair, competitive pricing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-500 rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with DataHive?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust DataHive for their data needs. Contact our team today to learn how our premium data solutions can help your business grow.
            </p>
            <a
              href="/contact"
              className="btn bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;