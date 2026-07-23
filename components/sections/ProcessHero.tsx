'use client';

import { motion } from 'framer-motion';

export default function ProcessHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-display-xl mb-6">Our Process</h1>
          <p className="text-xl text-slate-light">
            A proven methodology for delivering successful learning solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}