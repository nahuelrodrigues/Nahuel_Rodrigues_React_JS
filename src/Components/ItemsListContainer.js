import { React, useState, useEffect } from "react";
// CON PROP greeting Y MUESTRA EL MENSAJE DENTRO DEL CONTENEDOR CON EL STYLING INTEGRADO.
// IMPORTARLO DENTRO DE APP.JS
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

// Creo un array de objetos con mis productos
let remoteItems = [
  {
    id: 0,
    title: "producto1",
    price: 300,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 1,
    title: "producto2",
    price: 400,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 2,
    title: "producto3",
    price: 500,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 3,
    title: "producto4",
    price: 600,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
];

function ItemListContainer(props) {
  // creo un efecto de montaje para emitir un llamado asincrónico
  const [items, setItems] = useState([]);
  useEffect(
    () => {
      setTimeout(async () => {
        setItems(remoteItems);
      }, 3000);
      //espera unos segs y setea el estado items a remoteItems
    },
    [
      /*Lista de dependencias (o variables que quiero escuchar para re-renderear)*/
    ]
  );
  return (
    <div className="fs-2 text-center">
      <ItemDetailContainer />
      {props.greeting}
      <br></br>
      <ItemCount stock={5} initial={1} />
      <br></br>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
