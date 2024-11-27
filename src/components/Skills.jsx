// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';

// const Skills = () => {
//   const frontendSkills = ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"];
//   const backendSkills = ["Node.js", "Express", "MongoDB", "Django", "SQL"];
//   const librarySkills = ["Framer Motion", "Redux", "Axios", "Jest", "Formik"];

//   const SkillBox = ({ title, skills, Icon }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//       <motion.div
//         className="relative w-full lg:w-1/3 bg-gray-900 rounded-lg p-8 shadow-lg shadow-gray-600 transition-all transform overflow-hidden cursor-pointer border-2 border-white border-transparent hover:border-4 hover:border-gray-800"
//         onClick={() => setIsOpen(!isOpen)}
//         initial={{ height: "auto", scale: 1 }}
//         whileHover={{ scale: 1.05 }}
//         animate={{ height: isOpen ? "auto" : "550px" }} 
//         transition={{
//           duration: 0.6,
//           ease: "easeInOut"
//         }}
//       >
//         <motion.div
//           className="fontFam absolute inset-0 flex items-center justify-center text-white text-lg lg:text-2xl md:text-2xl font-semibold bg-gradient-to-b from-gray-900 via-gray-800 to-black"
//           initial={{ y: 0 }}
//           animate={{ y: isOpen ? "-100%" : 0 }}
//           transition={{
//             duration: 0.6,
//             ease: "easeInOut",
//           }}
//           style={{ zIndex: 10 }}
//         >
//           <Icon className="text-2xl mr-2" />
//           {title}
//         </motion.div>

//         {isOpen && (
//           <div className="pt-12 text-center opacity-100 relative">
//             <div className="fontFam uppercase text-lg lg:text-xl md:text-xl font-semibold mb-10 border-2 border-white p-3 rounded-full relative">
//               <Icon className="absolute text-lg top-0 left-5 mt-4"/>
//                 {title}
//               <Icon className="absolute top-0 text-lg right-5 mt-4"/>
//             </div>
//             <ul className="space-y-4 text-white">
//               {skills.map((skill, index) => (
//                 <li
//                   key={index}
//                   className="bg-gray-200 text-black hover:text-white px-6 py-4 text-sm lg:text-md md:text-md rounded-full transform transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 hover:border hover:border-white focus:outline-none"
//                 >
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </motion.div>
//     );
//   };

//   return (
//     <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8 py-20">
//       <div className="w-full max-w-screen-xl mx-auto text-center space-y-10">
//         <h2 className="fontFam text-xl lg:text-4xl md:text-4xl font-semibold">
//           Skills
//         </h2>
//         <div className="flex flex-col lg:flex-row gap-8 w-full">
//           <SkillBox title="Frontend" skills={frontendSkills} Icon={FaReact} />
//           <SkillBox title="Backend" skills={backendSkills} Icon={FaNodeJs} />
//           <SkillBox title="Libraries & Tools" skills={librarySkills} Icon={FaTools} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { FaReact, FaNodeJs, FaTools } from 'react-icons/fa';

const Skills = () => {
  const frontendSkills = ["JavaScript", "React", "HTML", "CSS", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express", "MongoDB", "Django", "SQL"];
  const librarySkills = ["Framer Motion", "Redux", "Axios", "Jest", "Formik"];

  const SkillBox = ({ title, skills, Icon, bgColor, borderColor }) => {
    return (
      <div
        className={`relative fontHead w-full lg:w-1/3 rounded-lg p-8 shadow-lg transition-all transform overflow-hidden cursor-pointer border-2 ${borderColor} ${bgColor}`}
      >
        <div className="pt-12 text-center opacity-100 relative">
          <div className={`uppercase text-lg lg:text-xl md:text-xl font-semibold mb-10 border-2 ${borderColor} p-3 rounded-full relative`}>
            <Icon className="absolute text-lg top-0 left-5 mt-4"/>
              {title}
            <Icon className="absolute top-0 text-lg right-5 mt-4"/>
          </div>
          <ul className="space-y-4 text-white">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-gray-900 text-white hover:text-gray-200 px-6 py-4 text-sm lg:text-md md:text-md rounded-full transform transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-105 hover:border hover:border-white focus:outline-none"
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
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8 py-20">
      <div className="w-full max-w-screen-xl mx-auto text-center space-y-10">
        <h2 className="fontHead text-xl lg:text-4xl md:text-4xl font-semibold">
          Skills
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
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


