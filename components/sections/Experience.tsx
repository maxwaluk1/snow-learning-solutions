'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Lightbulb } from 'lucide-react';

const experiences = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced instructional designers, developers, and consultants dedicated to your success.',
  },
  {
    icon: Briefcase,
    title: 'Enterprise Experience',
    description: 'Proven track record delivering solutions for Fortune 500 companies and government agencies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Cutting-edge approaches to learning technology and instructional design.',
  },
];

export default function Experience() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-6">Our Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="p-4 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-heading-md mb-3">{exp.title}</h3>
                <p className="text-slate">{exp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}