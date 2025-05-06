import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "DataHive has completely transformed our lead generation process. Their data quality is exceptional, and the ROI we've seen from their leads is unprecedented.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechBridge Solutions"
    },
    {
      content: "We've been using DataHive for the past year, and the quality of their B2B leads has significantly improved our conversion rates. Their customer service is outstanding.",
      author: "Michael Chen",
      position: "Sales Manager",
      company: "Global Innovations Inc."
    },
    {
      content: "What sets DataHive apart is their commitment to data accuracy. We've tried other providers, but none come close to the quality and value DataHive delivers.",
      author: "Amanda Rodriguez",
      position: "CEO",
      company: "Elevate Marketing"
    },
    {
      content: "Their industry-specific databases have been a game-changer for our targeted campaigns. We've seen a 43% increase in qualified leads since partnering with DataHive.",
      author: "David Patel",
      position: "Growth Strategist",
      company: "NextLevel Enterprises"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-primary-900">
      <div className="container-custom mx-auto">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about DataHive."
          centered={true}
          light={true}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8 md:p-10"
          >
            <Quote className="h-10 w-10 text-primary-300 mb-6" />
            <p className="text-lg md:text-xl text-secondary-700 mb-8 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center">
              <div className="bg-primary-100 rounded-full h-14 w-14 flex items-center justify-center text-primary-600 font-bold text-xl mr-4">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-secondary-900">{testimonials[currentIndex].author}</p>
                <p className="text-secondary-600">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-800 text-white hover:bg-primary-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-primary-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-800 text-white hover:bg-primary-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;