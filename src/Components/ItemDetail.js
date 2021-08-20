import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function ItemDetail({ item }) {
  //CLASE 9
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const onAdd = (i) => {
    setQuantityToAdd(i);
  };

  return (
    <Card className="text-center m-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Detalle del producto.</Card.Text>
        <p>${item.price}</p>

        {quantityToAdd > 0 ? (
          <Link to="/cart">
            <button className="btn btn-dark">
              Agregar {quantityToAdd} al carrito
            </button>
          </Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
