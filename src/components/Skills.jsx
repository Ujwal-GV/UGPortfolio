import React from 'react';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';

const Skills = () => {
  const frontendSkills = ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Django", "SQL"];
  const librarySkills = ["Framer Motion", "Redux", "Axios", "Jest", "Formik"];

  const SkillBox = ({ title, skills, Icon, bgColor, borderColor }) => {
    return (
      <div
        className={`relative fontHead w-full lg:w-1/3 rounded-lg p-5 shadow-lg transition-transform transform overflow-hidden cursor-pointer border-2 ${borderColor} ${bgColor} 
        hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:shadow-blue-500/50`}
      >
        <div className="pt-4 text-center opacity-100 relative">
          <div className={`uppercase text-md lg:text-xl md:text-xl font-semibold mb-2 border-2 ${borderColor} p-5 rounded-full relative`}>
            <Icon className="absolute text-lg top-2 left-2 mt-4" />
            {title}
            <Icon className="absolute top-2 text-lg right-2 mt-4" />
          </div>
          <hr className='text-white m-4' />
          <ul className="space-y-4 text-white">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="m-1 lg:ml-4 lg:mr-4 md:mr-4 md:ml-4 bg-gray-900 text-white hover:text-gray-200 px-6 py-4 text-sm lg:text-md md:text-md rounded-full transform transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 hover:border hover:border-white focus:outline-none"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8 py-10">
      <div className="w-full max-w-screen-xl mx-auto text-center space-y-10">
        <h2 className="fontHead text-xl lg:text-4xl md:text-4xl font-semibold">
          Skills
        </h2>
        <div className="flex flex-col mx-auto lg:flex-row gap-8">
          <SkillBox 
            title="Frontend" 
            skills={frontendSkills} 
            Icon={FaReact} 
            bgColor="bg-gradient-to-b from-gray-800 via-gray-500 to-gray-800" 
            borderColor="border-gray-600"
          />
          <SkillBox 
            title="Backend" 
            skills={backendSkills} 
            Icon={FaNodeJs} 
            bgColor="bg-gradient-to-b from-gray-800 via-gray-500 to-gray-800" 
            borderColor="border-gray-600"
          />
          <SkillBox 
            title="Libraries & Tools" 
            skills={librarySkills} 
            Icon={FaTools} 
            bgColor="bg-gradient-to-b from-gray-800 via-gray-500 to-gray-800" 
            borderColor="border-gray-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
