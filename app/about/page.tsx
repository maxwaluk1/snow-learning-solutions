import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutHero from '@/components/sections/AboutHero';
import Experience from '@/components/sections/Experience';
import Expertise from '@/components/sections/Expertise';
import Philosophy from '@/components/sections/Philosophy';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About | Snow Learning Solutions',
  description: 'Learn about Snow Learning Solutions and our mission to transform organizational learning.',
};

export default function About() {
  return (
    <>
      <Navigation />
      <AboutHero />
      <Experience />
      <Expertise />
      <Philosophy />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}