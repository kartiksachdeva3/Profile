import React from "react";
import ProjData from "../../Data/Projects.json";
import { Carousel } from "react-responsive-carousel";
import "../styles/carousel.css";
import { Card } from "react-bootstrap";
import project1 from '../../static/project1.jpeg';
import project3 from '../../static/project3_1.jpg';
import project2 from '../../static/project2.jpeg';
import style from './projects.module.css'

function Projectsdia({ project, img , photostyle}) {
  return (
    <Card className={style.projcard} >
    <Card.Img variant="Top" src={img} style={photostyle}/>
      <Card.Body>
        <Card.Title className={style.title}>{project.name}</Card.Title>
        <Card.Subtitle className={style.org}>
          {project.discipline}
        </Card.Subtitle>
        <Card.Text className={style.textinfo}>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default function Projects() {
  return (
    <div className={style.container}>
      <Carousel className={style.carsousels} infiniteLoop={true}>
          <Projectsdia project={ProjData.Projects[0]} img={project1} photostyle={{maxWidth: "350px",maxHeight:"275px"}} />
          <Projectsdia project={ProjData.Projects[1]} img={project2} photostyle={{maxWidth: "350px",maxHeight:"275px"}}/>
          <Projectsdia project={ProjData.Projects[2]} img={project3} photostyle={{maxWidth: "250px",maxHeight:"400px"}}/>
      </Carousel>
    </div>
  );
}
