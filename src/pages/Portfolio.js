import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import projects from "../data.json";

function Portfolio() {
  return (
    <Container>
      <Row>
        {projects.map((data) => (
          <Col xs={3} className="mb-5" key={"${data.id"}>
            <ProjectCard data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;
