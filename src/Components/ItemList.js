import React from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
function addItem({ id, price, title, pictureUrl }) {
  return <Item id={id} title={title} price={price} pictureUrl={pictureUrl} />;
}
// acá creo un div para contener y poder darle flexibilidad a los items que se generan
function ItemList({ items }) {
  return <div className="d-inline-flex">{items.map(addItem)}</div>;
}

export default ItemList;
