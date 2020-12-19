import React, {Component} from 'react'
import { Nav , NavLink, Bars , NavMenu } from './NavbarElements'
import './Navbar.css'


class Navbar extends Component{
    state = {clicked : false }
    handleclick = () => {
        this.setState ({clicked : !this.state.clicked})
    }

    render(){
    return (
        <>
          <Nav>
              <NavLink to ="/" className="navbar-title">
              Kartik Sachdeva
              </NavLink>
              <Bars onClick={this.handleclick}/>
              <NavMenu className={this.state.clicked ? "NavMenu active" : "NavMenu" }>      
              <NavLink to="About" spy={true} smooth={true} offset={-200} activeClass="active" onClick={this.handleclick} >
                    About
                </NavLink> 
                <NavLink to="Experience" spy={true} smooth={true} offset={-200} activeClass="active" onClick={this.handleclick}>
                    Experience
                </NavLink>             
                <NavLink to="Project" spy={true} smooth={true} offset={-200} activeClass="active" onClick={this.handleclick} >
                    Projects
                </NavLink>

                <NavLink to="Skills" spy={true} smooth={true} offset={-200} activeClass="active" onClick={this.handleclick}>
                    Skills
                </NavLink>

              </NavMenu>

          </Nav>  
        </>

    )
}
}

export default Navbar
