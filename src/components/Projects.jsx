import React from 'react';

export default function Projects() {
  const projects = [
    { 
      name: "Photography Portfolio Website", 
      description: "This project is a personal photography portfolio website designed to showcase various types of photography work. The website features an interactive gallery, allowing users to filter images based on categories such as portraits, landscapes, and events. It includes a contact form where potential clients can reach out, as well as an 'About Me' section with details about the photographer's experience and style.",
      github: "https://github.com/Ujwal-GV/The-Photography-Portfolio",
      image: "/MERN.png"
    },
    { 
      name: "Solar Cell Surface Defect Detection Using CNN", 
      description: "This deep learning project utilizes a Convolutional Neural Network (CNN) to detect surface defects in solar cells, improving quality control in the solar panel manufacturing process. The model was trained on a dataset of solar cell images, where it learns to identify defects such as cracks, chips, and discolorations. This tool can be deployed in factories to automate the inspection process, reducing human error and speeding up production timelines.",
      github: "https://github.com/Ujwal-GV/NeuralNetwork-Solarcell",
      image: "/AI.png"
    },
    { 
      name: "Banquet Hall Booking System", 
      description: "This full-stack application is designed to manage bookings for banquet halls. It includes functionality for customers to view available halls, select a date, and book a hall for an event. Admin users can manage bookings, view customer information, and modify event details. The system also includes payment integration for booking confirmation, making it a comprehensive solution for banquet hall managers.",
      github: "https://github.com/Ujwal-GV/banquetHall/tree/master",
      image: "/FULLSTACK.png"
    },
    { 
      name: "Candy Crush Application (L1)", 
      description: "A simplified version of the popular game Candy Crush, built using JavaScript and HTML5. In this version, players can swap candies to create matches of three or more. When a match is made, the candies disappear, and new ones fall into place. The game includes levels with increasing difficulty, and players are scored based on the number of moves and time taken to complete each level.",
      github: "https://github.com/Ujwal-GV/Candy-Crush-L1",
      image: "/ANDROID.png"
    },
    { 
      name: "Employee Management", 
      description: "This, MERN-stack application is designed to manage employee details for company. It includes functionality for users to view employee lists, search an employee, edit employee details and delete an employee details. Admin users can make these CRUD operations..",
      github: "https://github.com/Ujwal-GV/EmployeeDetailsFrontend",
      image: "/FULLSTACK.png",
      link: "https://employee-details-one.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8">
      <div className="max-w-8xl w-full text-center space-y-10">
        <h2 className="fontHead text-xl lg:text-4xl md:text-4xl font-semibold mb-10">
          Projects
        </h2>
        <div className="grid grid-cols- sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 shadow-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={project.image} 
                  alt={`${project.name} Image`} 
                  className="w-10 h-10 lg:w-16 lg:h-16 md:w-16 md:h-16 object-cover rounded-full" 
                />
                <h3 className="fontHead text-xl lg:text-2xl md:text-2xl font-bold">{project.name}</h3>
              </div>
              <hr className="text-xl text-white w-full mr-5 my-3 rounded-full" />
              <p className="text-sm ml-2 mr-2 lg:text-md md:text-md mb-6 overflow-y-auto h-24 text-justify custom-scroll sm:custom-scroll">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm lg:text-md md:text-md border-2 border-white p-3 rounded-full mt-3 font-semibold text-blue-100 hover:text-blue-600"
              >
                View on GitHub
              </a>
              {
                link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm lg:text-md md:text-md border-2 border-white p-3 rounded-full mt-3 font-semibold text-blue-100 hover:text-blue-600"
                  >
                    View Live
                  </a>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
