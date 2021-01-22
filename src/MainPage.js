import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Project'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Extra from './components/ExtraCurricular/extra'
function MainPage() {
  return (
    <div>
      <div id="Navbar"><Navbar /> </div>
      <div id="About"><About /></div>
      <div id="Experience"><Experience /> </div>
      <div id="Project"><Projects /></div>
      <div id="Skills"><Skills /> </div>
      <div id='Extra'><Extra/></div>

    </div>
  )
}
export default MainPage
