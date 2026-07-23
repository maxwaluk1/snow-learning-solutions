'use client';

import { motion } from 'framer-motion';
import { Award, Target, Lightbulb, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Years of experience delivering successful learning solutions for enterprise organizations.',
  },
  {
    icon: Target,
    title: 'Results-Focused',
    description: 'We measure success through concrete learning outcomes and business impact.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Cutting-edge approaches to instructional design and learning technology.',
  },
  {
    icon: Heart,
    title: 'Learner-Centered',
    description: 'Every solution is designed with the learner experience as our priority.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-spacing bg-gradient-to-br from-navy to-navy-dark text-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-6">Why Choose Us</h2>
          <p className="text-xl text-slate-light max-w-2xl mx-auto">
            Discover what sets Snow Learning Solutions apart from other consulting firms
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md mb-2">{reason.title}</h3>
                    <p className="text-slate-light">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
