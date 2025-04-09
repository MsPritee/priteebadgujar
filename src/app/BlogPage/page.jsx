"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Blog from '@/components/Blog';


const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20" // Add padding to account for fixed navbar
    >
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-kaushan text-white mb-4">My Blog</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and knowledge about technology, development, and design.
          </p>
        </div>
      </div>
      <Blog />
    </motion.div>
  );
};

export default BlogPage;