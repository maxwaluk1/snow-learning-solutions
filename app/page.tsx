import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Home | Snow Learning Solutions',
  description: 'Enterprise learning solutions for organizations that transform through digital learning.',
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <CTA />
      <Footer />
    </>
  );
}