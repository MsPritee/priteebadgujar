"use client";

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Footer = () => {
  const location = usePathname();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Say Hello!</h2>
          <p className="text-lg mb-6">Have something to tell me?</p>
          
          {isHomePage ? (
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Contact Me!
            </ScrollLink>
          ) : (
            <Link
              href="/"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </Link>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mb-8"
        >
          <Link href="/" className="text-white hover:text-white/80 transition-colors">
            Home
          </Link>
          <Link href="/BlogPage" className="text-white hover:text-white/80 transition-colors">
            Blog
          </Link>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-white/80 mt-12"
        >
          Made with{' '}
          <span className="inline-block animate-pulse">❤️</span> by Pritee
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;