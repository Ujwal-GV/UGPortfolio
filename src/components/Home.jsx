import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaCar } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [carPosition, setCarPosition] = useState(0);

  const sections = ["about", "skills", "projects", "contact"];

  const handleSectionChange = (section) => {
    setActiveSection(section);
    const sectionElement = document.getElementById(section);
    const sectionRect = sectionElement.getBoundingClientRect();
    // Get the horizontal center of the section
    const centerX = sectionRect.left + sectionRect.width / 2;
    setCarPosition(centerX);
  };

  // Scroll event listener to detect the current section
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((section, idx) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(sections[idx]);
          const sectionRect = section.getBoundingClientRect();
          const centerX = sectionRect.left + sectionRect.width / 2;
          setCarPosition(centerX);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="flex">
      {/* Road Section */}
      <div className="w-20 relative bg-gray-900 flex items-center">
        {/* Dotted Road */}
        <div className="relative h-full w-full flex flex-col items-center">
          <div className="h-full w-2 bg-gray-700 relative">
            {/* Dotted Lines */}
            <div
              className="absolute top-0 left-0 h-full w-2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(white 0 10px, transparent 10px 20px)",
              }}
            ></div>
          </div>
          {/* Car */}
          <motion.div
            className="absolute top-0 text-blue-500"
            animate={{
              y: `${sections.indexOf(activeSection) * 25}%`, // Move vertically
              x: carPosition, // Move horizontally to center the car
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 25,
              duration: 1, // Smooth animation duration
            }}
          >
            <FaCar className="text-4xl" />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <Navbar handleSectionChange={handleSectionChange} />

        <div id="about" className="section">
          <About />
        </div>

        <div id="skills" className="section">
          <Skills />
        </div>

        <div id="projects" className="section">
          <Projects />
        </div>

        <div id="contact" className="section">
          <Contact />
        </div>
      </div>
    </div>
  );
}
