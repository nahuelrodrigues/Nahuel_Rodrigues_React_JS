// Desarrolla la vista de un ítem donde item es de tipo
// { id, title, price, pictureUrl }

import React from "react";
import { Card, Button } from "react-bootstrap";
function Item({ id, title, price, pictureUrl }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${price}</p>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
