import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Snow Learning Solutions',
  description: 'Privacy policy for Snow Learning Solutions.',
};

export default function Privacy() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="container-custom section-spacing">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-display-lg mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-slate">
              <section>
                <h2 className="text-heading-lg mb-4">Introduction</h2>
                <p>Snow Learning Solutions ("Company", "we", "our", or "us") operates the Snow Learning Solutions website ("Service").</p>
                <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
              </section>

              <section>
                <h2 className="text-heading-lg mb-4">Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                <h3 className="text-heading-md mb-3">Types of Data Collected:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Personal Data: Name, email address, phone number, organization name, project description</li>
                  <li>Usage Data: Pages visited, time spent, browser type, IP address</li>
                  <li>Cookies: We use cookies to enhance your experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg mb-4">Use of Data</h2>
                <p>Snow Learning Solutions uses the collected data for various purposes:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-heading-lg mb-4">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p>Snow Learning Solutions<br />Email: info@snowlearningsolutions.com</p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}