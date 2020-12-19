import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import About from './About'
import Projects from './Project'
import Experience from './Experience'
import './MainPage.css'
import Skills from './Skills'
function MainPage() {
  return (
    <>
      <div id="Navbar" className="navbar-style"><Navbar /> </div>
      <div id="About" className="about-style"> <About /></div>
      <div id="Experience" className="experience-style"><Experience /> </div>
      <div id="Project" className="project-style"><Projects /></div>
      <div id="Skills" className="skill-style"><Skills /> </div>

    </>
  )
}
export default MainPage
