import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import BubbleEffect from '@/components/BubbleEffect';


const Header = () => {
  return (
    <section
      id="header"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: 'url(/images/bg1.png)' }}
    >
      <div className="absolute inset-0 bg-primary/50"></div>
      <BubbleEffect />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Image with Lightning Gradient Border */}
          <div className="relative mb-8">
            <div className="profile-border">
              <div
                className="profile-img"
                style={{ backgroundImage: 'url(/images/1.jpeg)' }}
              ></div>
            </div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-kaushan text-white mb-4"
          >
            Pritee Badgujar
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Coder',
                1000,
                'Developer',
                1000,
                'Student',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex space-x-4"
          >
            <a
              href="https://www.linkedin.com/in/pritee-badgujar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/MsPritee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaGithub size={30} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;