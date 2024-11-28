import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaDatabase } from 'react-icons/fa';
import { linearGradient } from 'framer-motion/client';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen relative flex flex-col lg:flex-row bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-10 overflow-hidden"
    >
      <motion.div
        className="absolute top-5 right-5 text-blue-400 opacity-30 text-6xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <FaReact />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-5 text-green-400 opacity-20 text-5xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <FaNode />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-yellow-400 opacity-20 text-4xl"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <FaPython />
      </motion.div>

      <motion.div
        className="absolute top-40 left-20 text-indigo-400 opacity-20 text-4xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <FaDatabase />
      </motion.div>

      <motion.div
        className="lg:w-[300px] w-full p-5 flex flex-col justify-center items-start"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        variants={textVariants}
      >
        <h2 className="fontHead text-xl lg:text-4xl md:text-4xl font-semibold text-center lg:text-left">
          About Me
        </h2>
      </motion.div>

      <motion.div
        className="lg:w-[600px] w-full p-5 flex flex-col justify-center items-center text-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={textVariants}
      >
        <motion.div
          className="absolute text-blue-500 opacity-10 text-[300px] lg:text-[500px] md:text-[500px]"
          initial={{ y: -50, rotate: 0 }}
          animate={{ y: 0, rotate: 360 }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "linear"
           }}
        >
        <FaReact />
      </motion.div>
        <p className="text-sm lg:text-xl md:text-xl leading-relaxed tracking-wide text-justify fontHead">
          I'm a software developer with a passion for building impactful projects and exploring new technologies. With experience across the full stack, I focus on creating seamless user experiences and efficient solutions.
          <br />
          As an aspiring MERN stack developer, I'm enthusiastic about contributing to innovative solutions in the tech industry.
        </p>
      </motion.div>

      <motion.div
        className="lg:w-[500px] w-full p-5 flex flex-col justify-center items-center relative"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative border-gradient-to-r w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-cover bg-center rounded-3xl border-4 border-transparent shadow-xl object-contain overflow-hidden transform transition-all duration-500"
          style={{ rotate: 0 }}
          whileHover={{
            scale: 1.1,
            borderRadius: "50%",
            border: "2px",
            borderImage: 'linaer-gradient(45deg, black, darkblue, purple) 1',
            borderColor: 'rgba(59, 130, 246, 0.8)',
            rotate: 0,
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-3xl border-4 animate-spinSlow"
            style={{
              border: '4px solid transparent',
            }}
          />
          <img src='me.jpg' alt="me.jpg" />
        </motion.div>

        <a href="/Ujwal_Gowda_V_(R)" download>
          <motion.button
            className="mt-5 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-800 text-white text-sm px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 0px 15px rgba(59, 130, 246, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
}
