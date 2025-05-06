import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { ArrowRight, Briefcase, Building, ShoppingCart, Users, Heart, Landmark } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        <div className="bg-primary-50 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-secondary-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const Categories: React.FC = () => {
  const categories = [
    {
      icon: <Briefcase className="h-7 w-7 text-primary-500" />,
      title: 'B2B Data',
      description: 'Quality business leads across industries to power your B2B sales and marketing.',
      link: '/categories#b2b',
    },
    {
      icon: <Building className="h-7 w-7 text-primary-500" />,
      title: 'Corporate Solutions',
      description: 'Enterprise-grade data solutions for large organizations and corporations.',
      link: '/categories#corporate',
    },
    {
      icon: <ShoppingCart className="h-7 w-7 text-primary-500" />,
      title: 'Retail & E-commerce',
      description: 'Consumer insights and purchasing behavior data for retail businesses.',
      link: '/categories#retail',
    },
    {
      icon: <Users className="h-7 w-7 text-primary-500" />,
      title: 'Consumer Data',
      description: 'Detailed consumer profiles and demographic information for targeted marketing.',
      link: '/categories#consumer',
    },
    {
      icon: <Heart className="h-7 w-7 text-primary-500" />,
      title: 'Healthcare',
      description: 'Compliant healthcare provider and organization data for medical companies.',
      link: '/categories#healthcare',
    },
    {
      icon: <Landmark className="h-7 w-7 text-primary-500" />,
      title: 'Financial Services',
      description: 'Data solutions for banks, insurance, and other financial institutions.',
      link: '/categories#financial',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom mx-auto">
        <SectionTitle
          title="Data Categories"
          subtitle="Browse through our extensive collection of data categories tailored to different industries and needs."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              link={category.link}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/categories" className="btn btn-primary">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;