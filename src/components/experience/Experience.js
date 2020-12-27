import React, {useEffect }from 'react'
import style from './experience.module.css'
import experience from '../../Data/work.json'
import { Card, CardDeck } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Structure({exp}){
    useEffect(() => {
     Aos.init({duration : 1000})
    }, [])
    return (
            <Card data-aos="fade-right" className={style.card}>
    <Card.Body>
        <Card.Title className={style.title}>{exp.profile}</Card.Title>
        <Card.Subtitle className={style.org}>{exp.organisation}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{exp.duration}</Card.Subtitle>
        <Card.Text className={style.textinfo}>
            {exp.description}
        </Card.Text>
    </Card.Body>
</Card>
    )
}

function Experience() {
    return (
        <div className={style.container}>
            <CardDeck className={style.deck}>
                <Structure exp={experience.work[0]} />
                <Structure exp={experience.work[1]} />
            </CardDeck>
        </div>
    )
}

export default Experience
