'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code2, Users, Zap } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Instructional Design',
    description: 'Custom learning experiences tailored to your organization\'s unique needs and goals.',
    features: ['Course Design', 'Learning Strategy', 'Content Development'],
  },
  {
    icon: Code2,
    title: 'SCORM Development',
    description: 'Professional SCORM and xAPI compliant courses for any LMS platform.',
    features: ['SCORM 1.2 & 2004', 'xAPI Tracking', 'Mobile Responsive'],
  },
  {
    icon: Users,
    title: 'LMS Consulting',
    description: 'Expert guidance on selecting, implementing, and optimizing learning management systems.',
    features: ['System Selection', 'Implementation', 'Training & Support'],
  },
  {
    icon: Zap,
    title: 'Learning Strategy',
    description: 'Strategic planning for organizational learning and development initiatives.',
    features: ['Needs Analysis', 'Roadmap Planning', 'Change Management'],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
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
          <h2 className="text-display-md mb-6">Our Services</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Comprehensive solutions to transform your organization's learning capabilities
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-slate/5 to-slate/10 rounded-xl border border-slate/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-slate mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
