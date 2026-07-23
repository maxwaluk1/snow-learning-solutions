'use client';

import { motion } from 'framer-motion';

const skills = [
  'Instructional Design',
  'SCORM Development',
  'LMS Administration',
  'Learning Strategy',
  'Course Development',
  'xAPI Implementation',
  'Mobile Learning',
  'Accessibility (WCAG)',
  'Multimedia Production',
  'Assessment Design',
  'Change Management',
  'Training Delivery',
];

export default function Expertise() {
  return (
    <section className="section-spacing bg-gradient-to-b from-slate/5 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-6">Our Expertise</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Comprehensive capabilities across the entire learning solution lifecycle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="p-4 bg-white border border-slate/20 rounded-lg text-center hover:border-accent/50 transition-colors"
            >
              <p className="font-semibold text-navy">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}