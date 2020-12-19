import React from 'react'
import aboutDetails from '../Data/About.json'

const About = () => {
   
    return (
        <>
        <h2>ABOUT ME</h2>
        <div>{aboutDetails.about}</div>
        </>

    )
}

export default About