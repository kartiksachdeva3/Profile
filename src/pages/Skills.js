import React from 'react'
import {Carousel } from 'react-responsive-carousel'
import {  Card, CardDeck } from 'react-bootstrap';
import python from '../images/python.svg';
import "../components/styles/carousel.css";
import cpp from '../images/c.svg'
import react from '../images/react.svg'
import js from '../images/javascript.svg'
import pt from '../images/bug.svg'
import network from '../images/networking.svg'
import cloud from '../images/cloud.svg'
import iot from '../images/iot.svg'
import mongo from '../images/mongo.svg'
import dsa from "../images/algorithm.svg"
import ml from "../images/brain.svg"
import node from '../images/nodejs.svg'
function CardsLay({photo1 , title1, photo2, title2, photo3, title3}) {
    return (
        <CardDeck className="cards-deck">
        <Card>
            <Card.Img variant="Top" src={photo1} style={{width: "70px", height : "70px"}} />
            <Card.Body>
                <Card.Title>{title1}</Card.Title>
            </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="Top" src={photo2} style={{width: "70px", height : "70px"}} />
            <Card.Body>
                <Card.Title>{title2}</Card.Title>
            </Card.Body> 
        </Card>
        <Card>
        <Card.Img variant="Top" src={photo3} style={{width: "70px", height : "70px"}} />
            <Card.Body>
                <Card.Title>{title3}</Card.Title>
            </Card.Body> 
        </Card>
        </CardDeck>
    );
}
const Skills = () => {
    return (
        <>
        <Carousel className="carsousel-skills" infiniteLoop={true} autoPlay={true} showIndicators={false} showStatus={false} interval={'3000'} stopOnHover={true} emulateTouch={true} useKeyboardArrows={true} swipeable={true}>
        <CardsLay photo1={python} title1={"Python"} photo2={cpp} title2={"C/C++"}  photo3={js} title3={"JavaScript"}/>
        <CardsLay photo1={pt} title1={"Penetration Testing"}  photo2={network} title2={"Networking"}  photo3={cloud} title3={"Cloud Computing"}/>
        <CardsLay photo1={react} title1={"React"} photo2={node} title2={"NodeJs"} photo3={mongo} title3={"MongoDB"}/>
        <CardsLay photo1={iot} title1={"Internet of Things"} photo2={ml} title2={"Data Analysis"} photo3={dsa} title3={"DataStructure & Algorithms"}/>
        </Carousel>
        </>

    )
}
export default Skills
