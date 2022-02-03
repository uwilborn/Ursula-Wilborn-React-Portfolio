import React from "react";
import {Card, Badge, Button, ButtonGroup} from 'react-bootstrap';
import "../App.css";


function ProjectCard ({data, setOrdered}){
   return (
       <Card className="h-300 shadow-sm bg-white rounded">
<Card.Img variant="top" src={process.env.PUBLIC_URL + data.src}/>
<Card.Body className="d-flex flex-column">
    <div className="d-flex mb-2 justify-content-between">
        <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
    </div>
    <Card.Text className="text-secondary">{data.desc}</Card.Text>
<div display="in-line">
<a
href={data.github}
target="_blank"
>
    <button className="githubButton">Github</button>
    
                 
                </a>
    <a
href={data.github}
target="_blank"
>
<button className="linkButton">Website</button>                
    </a>
</div>
</Card.Body>
       </Card>
   ) 
}




export default ProjectCard;