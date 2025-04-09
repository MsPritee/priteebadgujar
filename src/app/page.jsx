'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <About />
      <Resume />
      <Skills />
      <Contact />
    </motion.div>
  );
};

export default Page;