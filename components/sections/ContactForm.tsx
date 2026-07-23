'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail size={24} className="text-accent" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-slate">info@snowlearningsolutions.com</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone size={24} className="text-accent" />
                <h3 className="font-semibold">Phone</h3>
              </div>
              <p className="text-slate">+1 (234) 567-890</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={24} className="text-accent" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-slate">Enterprise Hub<br />Tech Valley, NY</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-accent"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-accent"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Organization"
              className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-accent"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={6}
              className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-accent resize-none"
              required
            />
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}