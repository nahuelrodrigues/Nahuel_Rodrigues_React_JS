import React, { useState, useEffect } from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
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
  const { categoryId } = useParams();
  return categoryId
    ? items
        .filter((products) => products.category == categoryId)
        .map((products) => addItem(products))
    : items.map((products) => addItem(products));

  // <div className="d-flex m-auto justify-content-center flex-wrap">
  //   {items.map(addItem)}
  // </div>
}

export default ItemList;
