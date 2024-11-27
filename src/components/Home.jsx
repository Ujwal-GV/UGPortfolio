import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
  return (
    <div className='w-full relative max-w-[1800px] mx-auto'>
      <Navbar/>
      
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
  )
}
