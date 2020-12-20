import React from "react";
import ProjData from "../Data/Projects.json";
import { Carousel } from "react-responsive-carousel";
import "../components/styles/carousel.css";
import { Card } from "react-bootstrap";
import project1 from '../images/project1.jpeg';
import project3 from '../images/project3.jpeg';
function Projectsdia({ project, img}) {
  return (
    <Card className="proj-cards" >
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
    <>
      <Carousel className="carsousel-s" infiniteLoop={true}>
          <Projectsdia project={ProjData.Projects[0]} img={project1} />
          <Projectsdia project={ProjData.Projects[1]} />
          <Projectsdia project={ProjData.Projects[2]} img={project3}/>
      </Carousel>
    </>
  );
}
