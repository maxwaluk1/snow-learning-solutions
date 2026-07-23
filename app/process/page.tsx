import type { Metadata } from 'next';
import ProcessHero from '@/components/sections/ProcessHero';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ProcessCTA from '@/components/sections/ProcessCTA';

export const metadata: Metadata = {
  title: 'Our Process | Snow Learning Solutions',
  description: 'Discover our proven consulting process for designing and implementing learning solutions.',
};

export default function Process() {
  return (
    <>
      <ProcessHero />
      <ProcessTimeline />
      <ProcessCTA />
    </>
  );
}
