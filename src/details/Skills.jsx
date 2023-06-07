import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaLinux,
  FaReact,
  FaServer,
  FaNetworkWired,
  FaPen,
  FaShieldAlt,
  FaCodeBranch,
} from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Skills.css';

const Skills = () => {
  const skills = [
    { icon: FaPython, name: 'Python' },
    { icon: FaJsSquare, name: 'JavaScript' },
    { icon: FaJava, name: 'Java SE' },
    { icon: FaLinux, name: 'Linux' },
    { icon: FaReact, name: 'MERN' },
    { icon: FaServer, name: 'Server Administration' },
    { icon: FaNetworkWired, name: 'Networking' },
    { icon: FaPen, name: 'Web Application Penetration Testing' },
    { icon: FaShieldAlt, name: 'Network Security' },
    { icon: FaCodeBranch, name: 'Cyber Operations' },
  ];

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className="skill">
        <skill.icon className="skill-icon" />
        <h3>{skill.name}</h3>
      </div>
    ));
  };

  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skill-carousel">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showArrows={true}
          swipeable={true}
          showIndicators={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={25}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow-prev"
              >
                &#60;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow-next"
              >
                &#62;
              </button>
            )
          }
        >
          {renderSkills()}
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
