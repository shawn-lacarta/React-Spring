import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import {PostWithoutId} from "./PostWithoutId";




const NikeCustomCard = (props: PostWithoutId) => {
  return (
    <Card>
      <Card.Img src={props.pic} />
      <Card.Body>
        
        <Card.Title className="product_title">{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
      </Card.Body>
      <Button href={"../SportAllProductPage"}>back</Button>
    </Card>
  );
};
export default NikeCustomCard;
