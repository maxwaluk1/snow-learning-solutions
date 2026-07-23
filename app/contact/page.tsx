import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Snow Learning Solutions',
  description: 'Get in touch with our team to discuss your learning solution needs.',
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  );
}