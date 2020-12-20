import React from 'react'
import aboutDetails from '../Data/About.json'
import photo from '../images/photo.jpeg'

const About = () => {
   
    return (
        <>
        <img alt="dp" src={photo} style={{maxWidth: "200px", maxHeight: "300px", borderRadius:"20px"}}/>
        <div>{aboutDetails.about}</div>
        </>

    )
}

export default About