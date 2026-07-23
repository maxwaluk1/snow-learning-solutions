'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We begin by understanding your organization\'s learning needs, goals, and current state.',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Create a comprehensive learning strategy aligned with your business objectives.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Develop engaging, effective learning content and experiences tailored to your audience.',
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Deploy solutions with full support for integration, testing, and launch.',
  },
  {
    number: '05',
    title: 'Measurement & Optimization',
    description: 'Measure success and continuously optimize based on learner data and feedback.',
  },
];

export default function Process() {
  return (
    <section className="section-spacing bg-gradient-to-b from-slate/5 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-md mb-6">Our Process</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            A proven methodology for delivering successful learning solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-accent/30 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex gap-8 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-xl border border-slate/20 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-heading-md mb-3">{step.title}</h3>
                    <p className="text-slate">{step.description}</p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white font-bold text-2xl border-4 border-white shadow-lg">
                  {step.number}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
