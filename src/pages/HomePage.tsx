import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/utils/SEO';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Categories from '../components/home/Categories';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

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

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <SEO
        title="Home"
        description="DataHive provides premium data solutions with quality leads at competitive prices. Transform your business with our accurate data services."
        keywords="data solutions, business leads, marketing data, lead generation, data hive, premium data"
      />
      
      <Hero />
      <Features />
      <Categories />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default HomePage;