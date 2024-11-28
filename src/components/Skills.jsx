import React from 'react';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Django", "SQL"];
  const librarySkills = ["Framer Motion", "Keras", "Axios", "Tensorflow", "Formik"];

  const SkillBox = ({ title, skills, Icon, bgColor }) => {
    return (
      <motion.div
        className="relative fontHead w-full lg:w-1/3 rounded-full p-1 shadow-lg overflow-hidden cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] pointer-events-none">
          {/* Empty border */}
        </div>
        <div
          className={`relative z-10 w-full h-full rounded-full ${bgColor} flex flex-col justify-center items-center p-4 overflow-hidden`}
        >
          <div className="text-center mb-4">
            <div className="uppercase text-sm lg:text-md md:text-md font-semibold bg-gray-900 py-2 px-3 rounded-full flex items-center justify-center space-x-2 max-w-full">
              <Icon className="text-sm lg:text-md md:text-md text-blue-400" />
              <span className="truncate">{title}</span>
              <Icon className="text-sm lg:text-md md:text-md text-blue-400" />
            </div>
          </div>
          <hr className="border-gray-600 w-3/4 my-2" />
          <motion.ul
            className="flex flex-wrap justify-center gap-2 text-white overflow-hidden max-w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="px-4 py-2 text-sm lg:text-md md:text-md bg-gray-900 rounded-full transform transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    );
  };
  
  

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8">
      <motion.div
        className="w-full max-w-screen-full mx-auto text-center space-y-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="fontHead text-xl lg:text-4xl md:text-4xl font-semibold">
          Skills
        </h2>
        <motion.div
          className="flex flex-col mx-auto lg:flex-row gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <SkillBox
            title="Frontend"
            skills={frontendSkills}
            Icon={FaReact}
            bgColor="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800"
            borderColor="border-gray-600"
          />
          <SkillBox
            title="Backend"
            skills={backendSkills}
            Icon={FaNodeJs}
            bgColor="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800"
            borderColor="border-gray-600"
          />
          <SkillBox
            title="Libraries & Tools"
            skills={librarySkills}
            Icon={FaTools}
            bgColor="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800"
            borderColor="border-gray-600"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
