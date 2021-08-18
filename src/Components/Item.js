// Desarrolla la vista de un ítem donde item es de tipo
// { id, title, price, pictureUrl }

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item({ id, title, price, pictureUrl }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${price}</p>
        <ItemCount stock={5} initial={1} />
        <Link to={`/item/${id}`}>
          <Button variant="btn btn-dark">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
