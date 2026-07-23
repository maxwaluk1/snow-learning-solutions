'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Snow Learning Solutions transformed how we approach employee training. Their expertise and dedication were exceptional.',
    author: 'Sarah Johnson',
    role: 'Director of Learning & Development',
    company: 'Healthcare Corp',
    rating: 5,
  },
  {
    quote: 'The SCORM courses they developed exceeded our expectations. Implementation was smooth and support was outstanding.',
    author: 'Michael Chen',
    role: 'Training Manager',
    company: 'Federal Agency',
    rating: 5,
  },
  {
    quote: 'Professional, knowledgeable, and results-driven. They understood our business needs and delivered solutions that work.',
    author: 'Jennifer Martinez',
    role: 'VP of Talent Development',
    company: 'Manufacturing Inc',
    rating: 5,
  },
  {
    quote: 'From consultation to implementation, their team was collaborative and innovative. Highly recommended!',
    author: 'David Thompson',
    role: 'Chief Learning Officer',
    company: 'Financial Services',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Testimonials() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-6">What Our Clients Say</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-slate/5 to-slate/10 rounded-xl border border-slate/20 hover:border-accent/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate mb-6 italic">\"{}\"</p>
              
              {/* Author */}
              <div>
                <p className="font-semibold text-navy">{testimonial.author}</p>
                <p className="text-sm text-slate">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}