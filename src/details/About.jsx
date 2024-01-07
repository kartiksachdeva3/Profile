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
          Greetings, I'm Kartik Sachdeva, a dynamic professional currently serving as a Security Engineer at Cisco, specializing in automation.
        </p>
              <p className="about-description">
     
         My passion lies at the intersection of Information Security and Machine Learning, where I thrive on tackling complex challenges.
        </p>
        <p className="about-description">
          Beyond the realms of cybersecurity, I am an avid explorer of cutting-edge technologies, an enthusiastic reader of tech blogs, and a nature enthusiast who finds solace in outdoor activities.
        </p>
                <p className="about-description">
          In my pursuit of excellence, I embrace the philosophy of lifelong learning, consistently expanding my skill set to stay at the forefront of this ever-evolving field.
        </p>
        <p className="about-description">
          
          Thank you for taking the time to explore my profile. Feel free to connect with me on LinkedIn. Wishing you a fantastic day ahead!
      </p>
      <a href="https://www.linkedin.com/in/kartiksachdeva3" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="linkedin-icon" /> </a>
    
      </div>
    </div>
  );
};

export default About;
