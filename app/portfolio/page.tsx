import type { Metadata } from 'next';
import PortfolioHero from '@/components/sections/PortfolioHero';
import CaseStudiesGrid from '@/components/sections/CaseStudiesGrid';

export const metadata: Metadata = {
  title: 'Portfolio | Snow Learning Solutions',
  description: 'View case studies and projects showcasing our enterprise learning solutions.',
};

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <CaseStudiesGrid />
    </>
  );
}
