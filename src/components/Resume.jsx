import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const workExperience = [
    {
      title: "Innomatics Research Lab Intern",
      company: "Full Stack Developer",
      period: "Summer 2023",
      description: "",
    },
  ];

  const education = [
    {
      degree: "Masters in Computer Science",
      institution: "Department of Computer Science, Mumbai University",
      period: "2021 - 2023",
      description: "Appeared",
    },
    {
      degree: "Bachelors in Physics",
      institution: "Zulal Bhilaji Rao Patil College, Dhule",
      period: "2017 - 2019",
      description: "Percentage: 96.17%",
    },
    {
      degree: "Junior College",
      institution: "New English High School and Junior College, Ulhasnagar",
      period: "2017",
      description: "",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title pb-4">My Resume</h2>
        </motion.div>

        <div className="relative">
          {/* Work Experience Timeline Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>

          {/* Work Experience */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <motion.h3
              variants={item}
              className="text-2xl font-bold bg-black text-white text-center px-4 py-2 rounded-md w-fit mx-auto mb-8"
            >
              Work Experience
            </motion.h3>

            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative mb-12"
              >
                <div className="timeline-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div
                  className={`timeline-panel ${
                    index % 2 === 0 ? "ml-auto" : ""
                  }`}
                >
                  <h4 className="text-xl font-bold text-gray-800">
                    {work.title}
                  </h4>
                  <p className="text-gray-600 mb-2">{work.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{work.period}</p>
                  {work.description && (
                    <p className="text-gray-700">{work.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div className="relative ">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <motion.h3
              variants={item}
              className="text-2xl font-bold bg-black text-white text-center px-4 py-2 rounded-md w-fit mx-auto mb-8"
            >
              Education
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative mb-12"
              >
                <div className="timeline-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div
                  className={`timeline-panel ${
                    index % 2 !== 0 ? "ml-auto" : ""
                  }`}
                >
                  <h4 className="text-xl font-bold text-gray-800">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
