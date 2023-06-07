import React from 'react';
import './About.css'; // Import your custom styles for the About component
import profile from '../static/profile.jpeg'
import { FaLinkedin } from 'react-icons/fa';
const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <img src={profile} alt="Profile" className="profile-picture" />
        <p className="about-description">
          I am Kartik Sachdeva. I am an Automation Engineer at Cisco.
       
        </p>
              <p className="about-description">
     
          I am an Information Security and Machine Learning enthusiast.
        </p>
        <p className="about-description">
          When I'm not Hacking, you can find me exploring new technologies, reading tech blogs, or enjoying outdoor activities. I believe in lifelong learning and continuously expanding my skill set to stay ahead in this ever-evolving field.
        </p>
                <p className="about-description">
          I believe in lifelong learning and continuously expanding my skill set to stay ahead in this ever-evolving field.
        </p>
        <p className="about-description">
          
          Thank you for visiting my profile. 
          Feel free to contact me on LinkedIn. Have a great Day! 
        <a href="https://www.linkedin.com/in/kartiksachdeva3" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedin-icon" /> </a>
      </p>
    
      </div>
    </div>
  );
};

export default About;
