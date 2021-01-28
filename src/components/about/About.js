import React from 'react'
import aboutDetails from '../../Data/About.json'
import photo from '../../static/photo.jpeg'
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
                    <a href="https://drive.google.com/file/d/1SqofYKdhUo0BzHtK-kAI9i0GglM9fBTt/view?usp=sharing" download><GoFile className={aboutstyle.iconitems} /></a>
                </div>
                
        </div>    
        </div>

    )
}

export default About