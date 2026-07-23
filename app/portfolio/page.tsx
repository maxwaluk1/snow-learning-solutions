import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/sections/PortfolioHero';
import CaseStudies from '@/components/sections/CaseStudies';
import Industries from '@/components/sections/Industries';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Portfolio | Snow Learning Solutions',
  description: 'View case studies and projects showcasing our enterprise learning solutions.',
};

export default function Portfolio() {
  return (
    <>
      <Navigation />
      <PortfolioHero />
      <CaseStudies />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}