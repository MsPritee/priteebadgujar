"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import materials from '@/data/studyMaterials';

const SingleStudyMaterialPage = () => {
  // const { id } = useParams();

  const params = useParams();
  const id = params?.id;

  const material = materials.find((p) =>  p.id.toString() === id);
  
  
    // If post not found
  if (!material) {
    return <p className="text-center py-20 text-gray-500">Material not found.</p>;
    }

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
        style={{ backgroundImage: `url(${material.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-3xl">
            <Link
              href="/study-materials"
              className="inline-flex items-center text-white mb-4 hover:text-primary transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill=" none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Study Materials
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {material.title}
            </h1>
            <div className="flex items-center space-x-4 text-white/80">
              <span className="px-3 py-1 bg-white/10 rounded-full">
                {material.level}
              </span>
              <span>•</span>
              <span>{material.duration}</span>
              <span>•</span>
              <span>{material.category}</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">Resources</h2>
              <div className="flex flex-wrap gap-4">
                {material.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition-shadow"
                  >
                    {resource.title}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="prose prose-lg">
              {material.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default SingleStudyMaterialPage;