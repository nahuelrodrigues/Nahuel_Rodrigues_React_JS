import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { AllProducts } from "../helpers/AllProducts";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await AllProducts();
      setItems(res);
    } catch (err) {
      console.log("Error al cargar los productos: ", err);
    }
  };

  return (
    /*   <ItemList items={remoteItems} /> */
    <div className="fs-2 text-center">
      {/* <ItemDetailContainer /> */}
      {props.greeting}
      <br></br>
      {/* <ItemCount stock={5} initial={1} /> */}
      <br></br>

      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
