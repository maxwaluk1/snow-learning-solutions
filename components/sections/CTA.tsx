'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section-spacing bg-gradient-to-br from-navy to-navy-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-display-lg mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-slate-light mb-8">
            Let's discuss how Snow Learning Solutions can help your organization achieve its learning goals.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/portfolio"
              className="btn-primary-outline flex items-center justify-center gap-2"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}