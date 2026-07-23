'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const industries = [
  {
    name: 'Healthcare',
    description: 'Compliance training and clinical education solutions',
    icon: '🏥',
  },
  {
    name: 'Government',
    description: 'Specialized training for federal and state agencies',
    icon: '🏛️',
  },
  {
    name: 'Manufacturing',
    description: 'Equipment operation and safety training programs',
    icon: '🏭',
  },
  {
    name: 'Financial Services',
    description: 'Compliance and professional development training',
    icon: '💼',
  },
  {
    name: 'Technology',
    description: 'Software training and technical certifications',
    icon: '💻',
  },
  {
    name: 'Education',
    description: 'Faculty development and instructional support',
    icon: '🎓',
  },
];

export default function Industries() {
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
          <h2 className="text-display-md mb-6">Industries We Serve</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Proven experience across multiple sectors and organizational types
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 text-center bg-gradient-to-br from-slate/5 to-slate/10 rounded-xl border border-slate/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-heading-sm mb-2">{industry.name}</h3>
              <p className="text-sm text-slate">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
