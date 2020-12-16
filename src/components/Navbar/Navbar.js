import React from 'react'
import { Nav , NavLink, Bars , NavMenu } from './NavbarElements'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
          <Nav>
              <NavLink to ="start" className="navbar-title">
                  <h2 style={{color:'white'}}>Kartik Sachdeva</h2>
              </NavLink>
              <Bars />
              <NavMenu>
                <NavLink to="Project" activeStyle spy={true} smooth={true} >
                    Projects
                </NavLink>
                <NavLink to="Experience" activeStyle >
                    Experience
                </NavLink>
                <NavLink to="Skills" activeStyle >
                    SKills
                </NavLink>

              </NavMenu>

          </Nav>  
        </>
    )
}

export default Navbar
