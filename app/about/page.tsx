import type { Metadata } from 'next';
import AboutHero from '@/components/sections/AboutHero';
import Experience from '@/components/sections/Experience';
import Expertise from '@/components/sections/Expertise';
import Philosophy from '@/components/sections/Philosophy';

export const metadata: Metadata = {
  title: 'About | Snow Learning Solutions',
  description: 'Learn about our team and approach to enterprise learning solutions.',
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Experience />
      <Expertise />
      <Philosophy />
    </>
  );
}
