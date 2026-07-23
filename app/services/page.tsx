import type { Metadata } from 'next';
import ServicesHero from '@/components/sections/ServicesHero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ServiceCTA from '@/components/sections/ServiceCTA';

export const metadata: Metadata = {
  title: 'Services | Snow Learning Solutions',
  description: 'Explore our instructional design, SCORM development, LMS consulting, and learning strategy services.',
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceCTA />
    </>
  );
}
