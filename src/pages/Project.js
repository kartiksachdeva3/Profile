import React from "react";
import ProjData from "../Data/Projects.json";
import { Carousel } from "react-responsive-carousel";
import "../components/styles/carousel.css";
import { Card } from "react-bootstrap";
function Projectsdia({ project }) {
  return (
    <Card className="proj-cards" >
    <Card.Img variant="Top"/>
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
      <h2>Projects</h2>
      <Carousel className="carsousel-s" >
          <Projectsdia project={ProjData.Projects[0]} />
          <Projectsdia project={ProjData.Projects[1]} />
          <Projectsdia project={ProjData.Projects[2]} />
      </Carousel>
    </>
  );
}
