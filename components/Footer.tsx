'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Snow</h3>
            <p className="text-slate-light mb-6">
              Enterprise learning solutions for organizations that transform through digital learning.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-light hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-light hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-light hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-light hover:text-accent transition-colors">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-slate-light hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-light hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-light hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@snowlearningsolutions.com" className="text-slate-light hover:text-accent transition-colors">
                  info@snowlearningsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-light hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-slate-light">
                  Enterprise Hub<br />
                  Tech Valley, NY
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-light text-sm">
              © {currentYear} Snow Learning Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-light hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="text-slate-light hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
