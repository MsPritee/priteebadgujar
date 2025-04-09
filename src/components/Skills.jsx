import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'C', icon: 'devicon-c-plain' },
    { name: 'C#', icon: 'devicon-csharp-plain' },
    { name: 'Unity3D', icon: 'game-controller' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    { name: 'React Native', icon: 'devicon-react-original' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'Android', icon: 'devicon-android-plain' },
    { name: 'Ubuntu', icon: 'devicon-ubuntu-plain' },
    { name: 'MySQL', icon: 'devicon-mysql-plain' },
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
                {skill.icon === 'game-controller' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <i className={`${skill.icon} text-4xl`}></i>
                )}
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
