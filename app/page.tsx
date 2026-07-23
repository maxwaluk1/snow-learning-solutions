'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Industries from '@/components/sections/Industries';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </motion.div>
  );
}
