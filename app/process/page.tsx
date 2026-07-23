import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessHero from '@/components/sections/ProcessHero';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Our Process | Snow Learning Solutions',
  description: 'Discover our proven consulting process for designing and implementing learning solutions.',
};

export default function ProcessPage() {
  return (
    <>
      <Navigation />
      <ProcessHero />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}