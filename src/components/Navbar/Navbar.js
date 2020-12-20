import React, {Component} from 'react'
import { Nav , NavLink, Bars , NavMenu, Times } from './NavbarElements'
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
              <NavLink to ="startpage" className="navbar-title">
              Kartik Sachdeva
              </NavLink>
              <div onClick={this.handleclick}>
                  {this.state.clicked ? <Times /> : <Bars /> }
              </div>
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
