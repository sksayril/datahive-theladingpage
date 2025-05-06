import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://dashboard.datahive.co.in';
  };

  // Detect if user is from India based on timezone
  const isIndianUser = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith('Asia/Kolkata');
  const price = isIndianUser ? '₹399' : '$5.99';

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Supercharge Your Business with Premium Data?
              </h2>
              <p className="text-primary-100 text-lg mb-4 max-w-lg">
                Get started today with DataHive and discover how our premium data solutions can transform your business growth.
              </p>
              <div className="bg-white/10 rounded-lg p-4 mb-8 backdrop-blur-sm">
                <p className="text-white font-semibold">
                  Special Offer: Start at just <span className="text-2xl">{price}</span>/month
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="btn bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-primary-700 text-white hover:bg-primary-800"
                  onClick={() => window.location.href = '/products'}
                >
                  View Pricing
                </motion.button>
              </div>
            </div>
            <div className="hidden lg:block relative h-full">
              <img
                src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Data Analytics Dashboard"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900 bg-opacity-30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;