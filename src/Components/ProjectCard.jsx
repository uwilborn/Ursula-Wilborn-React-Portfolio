import React from "react";
import {Card, Badge, Button} from 'react-bootstrap';


function ProjectCard ({data, setOrdered}){
   return (
       <Card className="h-100 shadow-sm bg-white rounded">
<Card.Img variant="top" src={process.env.PUBLIC_URL + data.src}/>
<Card.Body className="d-flex flex-column">
    <div className="d-flex mb-2 justify-content-between">
        <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
    </div>
    <Card.Text className="text-secondary">{data.desc}</Card.Text>
<div className="btn btn-danger btn-sm ml-auto">
    <Button
onClick={data.github}
className="btn btn-danger btn-sm ml-auto"
>
    Github
</Button>
<Button
onClick={data.live}
className="btn btn-secondary btn-sm ml-auto"
>
    Live
</Button>
</div>
</Card.Body>
       </Card>
   ) 
}




export default ProjectCard;