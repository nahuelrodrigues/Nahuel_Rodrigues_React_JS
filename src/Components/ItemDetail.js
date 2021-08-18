import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${item.price}</p>
        <ItemCount stock={5} initial={1} />
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
