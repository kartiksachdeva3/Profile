import './App.css';
import Work from './details/work'
import About from './details/About'
import Skills from './details/Skills';
import Certifications from './details/Certifications'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {showAnimation && (
        <div className="animation-container">
          <h1 className="animation-text">Hi</h1>
        </div>
      )}
      <div className={`app-content ${showAnimation ? 'hide-animation' : ''}`}>

        
             <div className="navbar">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#skills">skills</a>
              <a href="#cert">Certifications</a>
            </div>
            <div className="app-container">
              <div id="about">
                <About />
              </div>
              <div id="work">
                <Work />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="cert">
                <Certifications />
              </div>
     
            </div>
        {/* Rest of your app content */}
      </div>
    </div>
  );
};

export default App;


