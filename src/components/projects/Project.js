import React from "react";
import ProjData from "../../Data/Projects.json";
import { Carousel } from "react-responsive-carousel";
import "../styles/carousel.css";
import { Card } from "react-bootstrap";
import project1 from '../../static/project1.jpeg';
import project3 from '../../static/project3.jpeg';
import style from './projects.module.css'

function Projectsdia({ project, img}) {
  return (
    <Card className={style.projcard} >
    <Card.Img variant="Top" src={img} style={{width: "400px",height:"300px"}}/>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {project.Discipline}
        </Card.Subtitle>
        <Card.Text>{project.Description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default function Projects() {
  return (
    <div className={style.container}>
      <Carousel className={style.carsousels} infiniteLoop={true}>
          <Projectsdia project={ProjData.Projects[0]} img={project1} />
          <Projectsdia project={ProjData.Projects[1]} />
          <Projectsdia project={ProjData.Projects[2]} img={project3}/>
      </Carousel>
    </div>
  );
}
