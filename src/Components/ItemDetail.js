import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  //CLASE 9
  // onAdd(quantityToAdd){
  //Hemos recibido un evento de ItemCount
  //  }
  return (
    <Card className="text-center m-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${item.price}</p>
        <ItemCount stock={item.stock} initial={1} />
        <Button className="mt-4" variant="btn btn-dark">
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
