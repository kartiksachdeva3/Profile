import React from 'react'
import { Nav , NavLink, Bars , NavMenu } from './NavbarElements'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to ="/" className="navbar-title">
              Kartik Sachdeva
              </NavLink>
              <Bars />
              <NavMenu>      
              <NavLink to="About" spy={true} smooth={true} offset={-200} activeClass="active" >
                    About
                </NavLink> 
                <NavLink to="Experience" spy={true} smooth={true} offset={-100} activeClass="active">
                    Experience
                </NavLink>             
                <NavLink to="Project" spy={true} smooth={true} offset={-100} activeClass="active" >
                    Projects
                </NavLink>

                <NavLink to="Skills" spy={true} smooth={true} offset={-100} activeClass="active">
                    Skills
                </NavLink>

              </NavMenu>

          </Nav>  
        </>
    )
}

export default Navbar
