import React, { useState, useEffect } from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";

function addItem({ id, price, title, pictureUrl, category }, index) {
  return (
    <Item
      key={index}
      id={id}
      title={title}
      price={price}
      pictureUrl={pictureUrl}
      category={category}
    />
  );
}

function ItemList({ items }) {
  return <div className="d-inline-flex">{items.map(addItem)}</div>;
}

export default ItemList;
