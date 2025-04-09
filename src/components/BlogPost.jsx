"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const BlogPost = ({ post }) => {
  // console.log('Post ID:', post.id);

  return (
    <Link href={`/BlogPage/${post.id}`}  key={post.id} >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
      >
        {post.image && (
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ backgroundImage: `url(${post.image})` }}
          ></div>
        )}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-xs text-gray-500">{post.date}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-xs text-primary font-medium">{post.category}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <span 
            className="inline-flex items-center text-primary font-medium group-hover:underline"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogPost;