import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Snow Learning Solutions | Enterprise Learning & LMS Consulting',
  description: 'Design, build, and manage modern digital learning experiences. SCORM development, LMS consulting, and enterprise learning solutions.',
  keywords: 'instructional design, SCORM, LMS, Moodle, learning management, eLearning, consulting',
  openGraph: {
    title: 'Snow Learning Solutions',
    description: 'Enterprise learning and LMS consulting for healthcare, government, and enterprise organizations.',
    type: 'website',
    url: 'https://snowlearningsolutions.com',
    siteName: 'Snow Learning Solutions',
    images: [
      {
        url: 'https://snowlearningsolutions.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Snow Learning Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snow Learning Solutions',
    description: 'Enterprise learning and LMS consulting',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-navy">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
