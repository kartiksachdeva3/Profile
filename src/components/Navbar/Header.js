import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
// import Button from "react-bootstrap/Button";
// import { Link } from "react-scroll";
import Navbar from "./Navbar";
export default function Header() {
  return (
      <Router>
        <Navbar />
      </Router>
 
 // <nav className="Navbar">
    //     <Button variant="outline-dark" className="Nav-buttons">
    //       <Link to="Project" spy={true} smooth={true}>
    //         Project
    //       </Link>
    //     </Button>
    //     <Button variant="outline-dark" className="Nav-buttons">Experience</Button>
    //     <Button variant="outline-dark" className="Nav-buttons">Achievements</Button>
    //     </nav>
  );
}
