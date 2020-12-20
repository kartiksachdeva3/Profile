import React from 'react'
import {Carousel } from 'react-responsive-carousel'
import {  Card, CardDeck } from 'react-bootstrap';
import python from '../../static/python.svg';
import "../styles/carousel.css";
import cpp from '../../static/c.svg'
import react from '../../static/react.svg'
import js from '../../static/javascript.svg'
import pt from '../../static/bug.svg'
import network from '../../static/networking.svg'
import cloud from '../../static/cloud.svg'
import iot from '../../static/iot.svg'
import mongo from '../../static/mongo.svg'
import dsa from "../../static/algorithm.svg"
import ml from "../../static/brain.svg"
import node from '../../static/nodejs.svg'
import style from './skills.module.css'
function CardsLay({photo1 , title1, photo2, title2, photo3, title3}) {
    return (
        <CardDeck className={style.cardsdeck}>
        <Card>
            <Card.Img variant="Top" src={photo1} style={{width: "80px", height : "80px"}} />
            <Card.Body>
                <Card.Title>{title1}</Card.Title>
            </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="Top" src={photo2} style={{width: "80px", height : "80px"}} />
            <Card.Body>
                <Card.Title>{title2}</Card.Title>
            </Card.Body> 
        </Card>
        <Card>
        <Card.Img variant="Top" src={photo3} style={{width: "80px", height : "80px"}} />
            <Card.Body>
                <Card.Title>{title3}</Card.Title>
            </Card.Body> 
        </Card>
        </CardDeck>
    );
}
const Skills = () => {
    return (
        <div className={style.container}>
        <Carousel className={style.carsouselskills} infiniteLoop={true} autoPlay={true} showIndicators={false} showStatus={false} interval={'3000'} stopOnHover={true} emulateTouch={true} useKeyboardArrows={true} swipeable={true}>
        <CardsLay photo1={python} title1={"Python"} photo2={cpp} title2={"C/C++"}  photo3={js} title3={"JavaScript"}/>
        <CardsLay photo1={pt} title1={"Penetration Testing"}  photo2={network} title2={"Networking"}  photo3={cloud} title3={"Cloud Computing"}/>
        <CardsLay photo1={react} title1={"React"} photo2={node} title2={"NodeJs"} photo3={mongo} title3={"MongoDB"}/>
        <CardsLay photo1={iot} title1={"Internet of Things"} photo2={ml} title2={"Data Analysis"} photo3={dsa} title3={"DataStructure & Algorithms"}/>
        </Carousel>
        </div>

    )
}
export default Skills
