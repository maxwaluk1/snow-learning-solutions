'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    title: 'Healthcare System LMS Implementation',
    description: 'Implemented enterprise LMS for 15,000+ healthcare professionals across 50 locations.',
    results: ['45% training completion increase', '3x faster onboarding', '$2M annual savings'],
    industry: 'Healthcare',
  },
  {
    title: 'Federal Agency Compliance Training',
    description: 'Developed SCORM-based compliance training for federal government agency.',
    results: ['100% compliance rate', '80% time reduction', 'Full audit trail'],
    industry: 'Government',
  },
  {
    title: 'Manufacturing Safety Program',
    description: 'Created interactive safety training with real-world scenarios for manufacturing floor.',
    results: ['60% reduction in incidents', 'Mobile accessible', 'Multi-language support'],
    industry: 'Manufacturing',
  },
  {
    title: 'Financial Institution Certification',
    description: 'Built professional certification program for financial services organization.',
    results: ['500+ certified annually', '92% pass rate', 'Industry recognized'],
    industry: 'Financial Services',
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

export default function CaseStudies() {
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
          <h2 className="text-display-md mb-6">Case Studies</h2>
          <p className="text-xl text-slate max-w-2xl mx-auto">
            Real results from organizations we've partnered with
          </p>
        </motion.div>

        {/* Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-white border border-slate/20 rounded-xl hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-heading-md flex-1">{caseStudy.title}</h3>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full ml-4 whitespace-nowrap">
                  {caseStudy.industry}
                </span>
              </div>
              <p className="text-slate mb-6">{caseStudy.description}</p>
              <ul className="space-y-2 mb-6">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {result}
                  </li>
                ))}
              </ul>
              <Link href="#" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View Full Case Study
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}