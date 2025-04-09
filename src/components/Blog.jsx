"use client";

import React, { useState } from 'react';
import BlogPost from '@/components/BlogPost';
import blogPosts from "@/data/blogpost";


const Blog = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category.toLowerCase()))];
  
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;