import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { Database, BarChart2, Search, Shield, Briefcase, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="bg-primary-50 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Database className="h-6 w-6 text-primary-500" />,
      title: 'High-Quality Data',
      description: 'Access verified and regularly updated data with 98% accuracy for maximum ROI.',
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary-500" />,
      title: 'Advanced Analytics',
      description: 'Gain valuable insights from your data with our powerful analytics tools.',
    },
    {
      icon: <Search className="h-6 w-6 text-primary-500" />,
      title: 'Target Precision',
      description: 'Find your ideal customers with precise targeting based on multiple criteria.',
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-500" />,
      title: 'Data Security',
      description: 'Your data is safe with our enterprise-grade security protocols and compliance.',
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary-500" />,
      title: 'Industry Specific',
      description: 'Get data tailored to your industry needs with specialized categorization.',
    },
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      title: 'Competitive Pricing',
      description: 'Quality leads at the most competitive prices in the market, guaranteed.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom mx-auto">
        <SectionTitle
          title="Why Choose DataHive"
          subtitle="We deliver premium data solutions that help businesses grow and succeed in their markets."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;