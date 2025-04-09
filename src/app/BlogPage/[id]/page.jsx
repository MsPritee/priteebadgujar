"use client";

import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import blogPosts from "@/data/blogpost";
import { getAllBlogIds } from '@/lib/blogData';

const SingleBlogPage = () => {

  const params = useParams();
  const id = params?.id;

// console.log(params.id);
  // const { id } = params;
  // console.log('Params:', blogPosts);

  const post = blogPosts.find((p) =>  p.id.toString() === id);
  
  
    // If post not found
  if (!post) {
    return <p className="text-center py-20 text-gray-500">Blog post not found.</p>;
    }

  console.log('Params:', id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-3xl">
            <Link
              href="/BlogPage"
              className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-white/80 space-x-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
              <span>•</span>
              {/* <span>By {post.author}</span> */}
            </div>
          </div>
        </div>
      </div>

      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
          <ReactMarkdown>
            {post.excerpt}
          </ReactMarkdown>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default SingleBlogPage;