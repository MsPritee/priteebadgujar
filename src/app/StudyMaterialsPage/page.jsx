"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import materials from '@/data/studyMaterials';
import { getStudyMaterial } from "@/lib/getStudyMaterial";


const StudyMaterialsPage = () => {

  const [filter, setFilter] = useState('all');
  const [materials, setMaterials] = useState([]);

  const categories = [
    'all', 
    ...new Set(materials.map(material => material.category.toLowerCase())),
  ];
  
  const filteredMaterials = 
    filter === 'all' 
      ? materials 
      : materials.filter(material => material.category.toLowerCase() === filter);

  
    useEffect(() => {
      const getData = async () => {
        const data = await getStudyMaterial();
        setMaterials(data);
      };
      getData();
    }, []);
  
   
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-kaushan text-white mb-4">Study Materials</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Free educational resources to help you learn programming, game development, and more.
          </p>
        </div>
      </div>

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

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map(material => (
              <Link
                href={`/StudyMaterialsPage/${material.id}`}
                key={material.id}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${material.image})` }}
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {material.level}
                      </span>
                      <span className="text-sm text-gray-500">
                        {material.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {material.title}
                    </h3>
                    <p className="text-gray-600">{material.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default StudyMaterialsPage;