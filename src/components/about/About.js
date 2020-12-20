import React from 'react'
import aboutDetails from '../../Data/About.json'
import photo from '../../static/photo.jpeg'
import aboutstyle from  './about.module.css'

function About() {

    return (
        <div className={aboutstyle.container}>
            <div className={aboutstyle.about}> <img alt="dp" src={photo} style={{ maxWidth: "200px", maxHeight: "300px", borderRadius: "20px" }} /></div>
            <div className={aboutstyle.about}>{aboutDetails.about}</div>
        </div>

    )
}

export default About