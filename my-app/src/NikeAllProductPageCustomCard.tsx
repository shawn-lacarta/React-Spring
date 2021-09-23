import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import {PostWithId} from "./PostWithId"

const NikeAllProductPageCustomCard = (props: PostWithId) => {
  return (
    <Card>
      <Card.Img src={props.pic} />
      <Card.Body>
      
        <Card.Title className="product_title">{props.name}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
      </Card.Body>
      <Button href={"NikeSinglePage/" + props.id}>view details</Button>
    </Card>
  );
};
export default NikeAllProductPageCustomCard;
