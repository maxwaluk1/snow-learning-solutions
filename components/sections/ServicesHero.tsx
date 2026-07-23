'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-display-xl mb-6">Our Services</h1>
          <p className="text-xl text-slate-light">
            Comprehensive learning solutions tailored to your organization's unique needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}