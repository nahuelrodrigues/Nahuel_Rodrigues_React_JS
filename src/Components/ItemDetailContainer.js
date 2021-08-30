import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { remoteItems } from "../helpers/AllProducts";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  const getItem = (itemId) => {
    const UnItem = remoteItems.find((el) => el.id == itemId);
    setItem(UnItem);
  };

  // ACÁ REEMPLAZAR POR PRODUCTOS DE FIRESTORE
  useEffect(() => {
    getItem(itemId);
  }, []);

  return <ItemDetail className="" item={item} />;
  // return (
  //   <>
  //     {loading && <h1>Cargando...</h1>}
  //     {!loading && <ItemDetail className="" item={item} />}
  //   </>
  // );
}

export default ItemDetailContainer;
