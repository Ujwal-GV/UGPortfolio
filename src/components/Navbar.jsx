import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer } from "antd";
import { RiArrowLeftSFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = [
    { title: "About", label: "about" },
    { title: "Skills", label: "skills" },
    { title: "Projects", label: "projects" },
    { title: "Contact", label: "contact" },
  ];
  
  const [selectedMenu, setSelectedMenu] = useState("about");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSelectMenu = (label) => {
    setSelectedMenu(label);
    setOpen(false);
    document.getElementById(label)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-20 p-5 px-2 md:px-7 lg:px-10 flex justify-between items-center sticky top-0 left-0 z-50 bg-gradient-to-l from-gray-800 via-gray-900 to-black p-10 overflow-hidden">
      <motion.div className="center cursor-pointer" onClick={() => handleSelectMenu("about")}>
        {/* <img src="/EmploezLogo.png" alt="Logo" className="text-sm ml-0 lg:w-[8rem] w-[6rem]" /> */}
        <span className="fontHead font-bold text-xl lg:text-2xl md:text-2xl md:text-3xl">
          <span className="mr-2 text-white">UJWAL GOWDA V</span>
        </span>
      </motion.div>

      <div className="flex justify-center items-center gap-2 p-1 hidden md:flex bg-white rounded-full text-black relative">
        {menuItem.map((d, idx) => (
          <motion.div
            key={idx}
            className={`cursor-pointer px-4 py-2 relative rounded-full ${
              selectedMenu === d.label ? "bg-gray-900 shadow-lg" : ""
            }`}
            onClick={() => handleSelectMenu(d.label)}
          >
            <Link
              to={`/#${d.label}`}
              className={`transition-opacity duration-300 relative z-10 hover:text-gary-900 ${
                selectedMenu === d.label ? "text-white opacity-100" : "opacity-70"
              }`}
            >
              {d.title}
            </Link>
            <AnimatePresence>
              {selectedMenu === d.label && (
                <motion.div
                  layoutId="underline"
                  className="absolute inset-0 bg-gray-900 rounded-full shadow-md z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <FaBars className="md:hidden w-6 h-6 mr-3 text-white" onClick={showDrawer} />

      <Drawer
        title="MENU"
        placement="left"
        closable={true}
        onClose={onClose}
        open={open}
        width={"300px"}
      >
        <MobileNavBar
          menuItem={menuItem}
          selectedMenu={selectedMenu}
          handleSelectMenu={handleSelectMenu}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;

const MobileNavBar = ({ menuItem, selectedMenu, handleSelectMenu }) => {
  return (
    <div className="w-full">
      {menuItem.map((d, idx) => (
        <div
          key={idx}
          className="p-2 cursor-pointer relative flex center h-10 hover:bg-gray-400 rounded-md duration-700"
          onClick={() => handleSelectMenu(d.label)}
        >
          <Link
            to={`/#${d.label}`}
            className="hover:text-gary-900"
          >
            {d.title}
          </Link>
          {selectedMenu === d.label && (
            <motion.div
              layoutId="underline_mobile_nav"
              className="absolute top-0 right-0 rounded-md h-full w-fit bg-gray-900 flex center"
            >
              <RiArrowLeftSFill className="w-5 h-5 text-white my-auto" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
