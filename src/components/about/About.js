import React from 'react'
import aboutDetails from '../../Data/About.json'
import photo from '../../static/photo.jpeg'
import aboutstyle from  './about.module.css'

function About() {

    return (
        
        <div className={aboutstyle.container}>
            <div className={aboutstyle.about}> <img alt="dp" src={photo} style={{ maxWidth: "250px", maxHeight: "350px", borderRadius: "20px" }} /></div>
            <div className={aboutstyle.textinfo}>
            <div className={`${aboutstyle.about} ${aboutstyle.abouthead}`} ><h3>Hi there</h3></div>
            <div className={aboutstyle.about}>{aboutDetails.about}</div>
            </div>
        </div>

    )
}

export default About