'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="section-spacing bg-navy text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-display-md mb-8 text-center">Our Philosophy</h2>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h3 className="text-heading-md mb-3">Learner-Centered Design</h3>
              <p className="text-slate-light">
                Every solution we create starts with the learner in mind. We believe that effective learning experiences are built on understanding your audience's needs, preferences, and goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-heading-md mb-3">Results-Driven Approach</h3>
              <p className="text-slate-light">
                We measure success through concrete outcomes. Whether it's improved completion rates, better knowledge retention, or measurable business impact, we focus on delivering real value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-heading-md mb-3">Continuous Innovation</h3>
              <p className="text-slate-light">
                Learning technology evolves rapidly. We stay ahead of the curve, constantly exploring new tools and methodologies to deliver cutting-edge solutions that give your organization a competitive advantage.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}