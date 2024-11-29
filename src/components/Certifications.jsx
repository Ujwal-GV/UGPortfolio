import React from 'react';
import { FaReact, FaNodeJs, FaTools, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { b } from 'framer-motion/client';

const Certifications = () => {
  const certificate_1 = [`Completed a 1-month internship at Varcons Technologies Pvt Ltd.`, `Developed a project titled "Template for Photography Portfolio Website", showcasing proficiency in web development technologies and design principles.`, `AUG 13, 2023 - SEP 22, 2023`];
  const certificate_2 = [`Undertook a 1-month internship at Karunadu Technologies Pvt Ltd.`, `Worked on the project "Dementia Disease Prediction Using ML Algorithms (Decision Tree)", leveraging machine learning techniques to address a critical healthcare challenge.`, `AUG 14, 2023 - SEP 10, 2023`];

  const CertificateBox = ({ title, certificate, Icon, bgColor, link }) => {
    return (
      <motion.div
        className="relative text-left text-sm w-full lg:w-1/3 rounded-lg p-1 shadow-lg overflow-hidden cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] pointer-events-none">
          {/* Empty border */}
        </div>
        <div
          className={`relative z-10 w-full h-full rounded-lg ${bgColor} flex flex-col justify-center items-center p-4 overflow-hidden`}
        >
          <div className="text-center mb-4">
            <div className="uppercase text-sm lg:text-md md:text-md font-semibold bg-gray-900 py-2 px-3 rounded-full flex items-center justify-center space-x-2 max-w-full">
              <Icon className="text-sm lg:text-md md:text-md text-blue-400" />
              <span>{title}</span>
              <Icon className="text-sm lg:text-md md:text-md text-blue-400" />
            </div>
          </div>
          <hr className="border-gray-600 w-3/4 my-2" />
          <motion.div
            className="flex flex-wrap justify-center gap-2 text-white overflow-hidden max-w-full p-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
          >
            {certificate.map((c, index) => (
              <motion.li
                key={index}
                className="px-4 py-2 text-sm lg:text-md md:text-md transform transition-all duration-300 ease-in-out hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                {
                    index === 2 ? 
                    (
                        <>
                            <b>Duration  :   </b>{c}
                        </>
                    ) 
                    : 
                    c
                }
              </motion.li>
            ))}
          </motion.div>
          <a href={link} target='__blank'>
            <button className='p-2 bg-gray-900 rounded-lg text-sm'>
                View Certificate
            </button>
          </a>
        </div>
      </motion.div>
    );
  };
  
  

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8 py-4">
      <motion.div
        className="w-full max-w-screen-full mx-auto text-center space-y-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="fontHead text-xl lg:text-4xl md:text-4xl font-semibold">
          Internships
        </h2>
        <motion.div
          className="flex flex-col justify-center mx-auto lg:flex-row gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <CertificateBox
            title="Full Stack Web Development Internship"
            certificate={certificate_1}
            Icon={FaReact}
            bgColor="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800"
            borderColor="border-gray-600"
            link="https://res.cloudinary.com/daf6cmyaq/image/upload/v1732878996/1SG20CS107_Internship_lk43s4.jpg"
          />
          <CertificateBox
            title="AI and ML Internship"
            certificate={certificate_2}
            Icon={FaRobot}
            bgColor="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800"
            borderColor="border-gray-600"
            link="https://res.cloudinary.com/daf6cmyaq/image/upload/v1732878998/1SG20CS107_Internship1_ibxiw7.jpg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
