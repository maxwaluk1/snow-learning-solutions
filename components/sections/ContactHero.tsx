'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-navy to-navy-dark text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-display-lg mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-light">
            Ready to discuss your learning solution needs? Contact us today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}