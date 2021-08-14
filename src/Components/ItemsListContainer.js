import { React, useState, useEffect } from "react";
// CON PROP greeting Y MUESTRA EL MENSAJE DENTRO DEL CONTENEDOR CON EL STYLING INTEGRADO.
// IMPORTARLO DENTRO DE APP.JS
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom";

// Creo un array de objetos con mis productos
let remoteItems = [
  {
    id: 0,
    title: "producto1",
    price: 300,
    category: "libros",
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 1,
    title: "producto2",
    price: 400,
    category: "videos",
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 2,
    title: "producto3",
    category: "libros",
    price: 500,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
  {
    id: 3,
    title: "producto4",
    category: "videos",
    price: 600,
    pictureUrl:
      "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
  },
];

function ItemListContainer(props) {
  // creo un efecto de montaje para emitir un llamado asincrónico
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const slug = useParams();
  useEffect(() => {
    setTimeout(async () => {
      // setItems(remoteItems);
      setFilteredItems(remoteItems.filter((item) => item.category === slug.id));
    }, 3000);

    //espera unos segs y setea el estado items a remoteItems
  }, []);

  return <ItemList items={filteredItems} />;
  // <div className="fs-2 text-center">
  //   <ItemDetailContainer />
  //   {props.greeting}
  //   <br></br>
  //   {/*  <ItemCount stock={5} initial={1} /> */}
  //   <br></br>
  //   <ItemList items={items} />
  // </div>
}

export default ItemListContainer;
