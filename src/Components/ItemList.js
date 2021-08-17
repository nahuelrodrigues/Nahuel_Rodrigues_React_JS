import React, { useState, useEffect } from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams } from "react-router-dom";
// import { remoteItems } from "../helpers/AllProducts";

// function FilterItems() {
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [item, setItems] = useState({});
//   const slug = useParams();
//   useEffect(() => {
//     setTimeout(async () => {
//       setItems(remoteItems);
//       setFilteredItems(remoteItems.filter((item) => item.category === slug.id));
//     }, 3000);
//   }, []);
// }

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
