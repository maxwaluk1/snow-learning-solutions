import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/sections/ServicesHero';
import Services from '@/components/sections/Services';
import Expertise from '@/components/sections/Expertise';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services | Snow Learning Solutions',
  description: 'Comprehensive learning solutions including instructional design, SCORM development, and LMS consulting.',
};

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <ServicesHero />
      <Services />
      <Expertise />
      <CTA />
      <Footer />
    </>
  );
}