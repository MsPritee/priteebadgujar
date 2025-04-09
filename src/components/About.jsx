import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Pritee Badgujar' },
    { label: 'Email', value: 'badgujarpritee@gmail.com' },
    { label: 'Degree', value: 'Master\'s' },
    { label: 'City', value: 'Mumbai' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 " >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title pb-4">About</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            I am Pritee Badgujar, a final year student pursuing Computer Science from University of Mumbai.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <ul className="space-y-4">
              {personalInfo.map((info, index) => (
                <li key={index} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <span className="font-bold text-primary">{info.label}:</span>
                  <span className="text-gray-700">{info.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <p className="text-gray-700 leading-relaxed text-justify">
              I am Pritee Badgujar, from Mumbai. Currently Pursuing 
              Final year of my Masters Degree in Computer Science.
              With my hands-on experience in developing games and
              deep learning models I am looking to transition into the
              industry as an intern to improve my skills.
            </p>
            
            
          </motion.div>
        </div>
        <div className="mt-8 text-center">
              <a 
                href="https://drive.google.com/file/d/1LVhn-_IXZZaaRK8jAUpV6MJJ76OESzPs/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                DOWNLOAD RESUME
              </a>
            </div>
      </div>
    </section>
  );
};

export default About;