'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-display-xl mb-6">About Snow Learning Solutions</h1>
          <p className="text-xl text-slate-light mb-8">
            We believe that great learning experiences transform organizations. For over a decade, we've partnered with leading enterprises to design and deliver innovative learning solutions that drive real business results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '100K+', label: 'Learners Trained' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-slate-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}