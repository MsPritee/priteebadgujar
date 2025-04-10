import React from 'react';
import { 
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiReact,
  SiJavascript,
  SiAndroid,
  SiUbuntu,
  SiMysql,
 } from 'react-icons/si';
import { FaUnity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <SiPython /> },
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus  /> },
    { name: 'Unity3D', icon: <FaUnity /> },
    { name: 'HTML5', icon: <SiHtml5 /> },
    { name: 'CSS3', icon: <SiCss3 /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'React Native', icon: <SiReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Android', icon: <SiAndroid /> },
    { name: 'Ubuntu', icon: <SiUbuntu /> },
    { name: 'MySQL', icon: <SiMysql /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title pb-4">Skills</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            "When love and skill work together, expect a masterpiece."
            <br />- John Ruskin
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center"
            >
              <div className="skill-icon mb-4 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-[0_0_15px_#f7f73d] hover:text-yellow-400">
              {skill.icon}
              </div>
              <h3 className="text-center font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
