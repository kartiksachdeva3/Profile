import React from 'react'
import aboutDetails from '../../Data/About.json'
import photo from '../../static/images/photo.jpeg'
import aboutstyle from  './about.module.css'
import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import {GoFile} from 'react-icons/go'

function About() {

    return (
        
        <div className={aboutstyle.container}>
            <div className={aboutstyle.about}> <img alt="dp" src={photo} style={{ maxWidth: "250px", maxHeight: "350px", borderRadius: "20px" }} /></div>
            <div className={aboutstyle.textinfo}>
                <div className={`${aboutstyle.about} ${aboutstyle.abouthead}`} ><h3>Hi there</h3></div>
                <div className={aboutstyle.about}>{aboutDetails.about}</div>
                <div className={aboutstyle.icons}>
                    <a href="https://github.com/kartiksachdeva3" rel="noopener noreferrer"><FaGithub className={aboutstyle.iconitems}/></a>
                    <a href="https://www.linkedin.com/in/kartiksachdeva3" rel="noopener noreferrer"><FaLinkedin className={aboutstyle.iconitems}/></a>
                    <a href="https://www.instagram.com/kartik._.sachdeva/" rel="noopener noreferrer"><FaInstagram className={aboutstyle.iconitems}/></a>
                    <a href="https://drive.google.com/file/d/16x2qO26O0km2kcbrMoWtoxtpIy4tIPzW/view?usp=sharing" download><GoFile className={aboutstyle.iconitems} /></a>
                </div>
                
        </div>    
        </div>

    )
}

export default About