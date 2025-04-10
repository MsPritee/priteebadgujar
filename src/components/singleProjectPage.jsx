"use client";

import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const SingleProjectPage = ({ project }) => {
  // If post not found
  if (!project) {
    return (
      <p className="text-center py-20 text-gray-500">Blog post not found.</p>
    );
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
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 h-full flex items-center relative">
            <div className="max-w-3xl">
              <Link
                href="/ProjectPage"
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
                Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-lg">{project.description}</p>
            </div>
          </div>
        </div>

        <article className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-4 mb-8">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  View Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                >
                  View Code
                </a>
              </div>

              <div className="prose prose-lg">
                {project.details.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </motion.div>
   
  );
};

export default SingleProjectPage;
