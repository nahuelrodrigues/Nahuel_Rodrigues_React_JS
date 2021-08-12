// >> Consigna: crea tu componente ItemDetailContainer, con la misma premisa que ItemListContainer.

// >>Aspectos a incluir en el entregable:

// Al iniciar utilizando un efecto de montaje, debe llamar a un async mock (promise) que en 2 segundos le devuelva un 1 ítem, y lo guarde en un estado propio.

import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
/* Esta función debe retornar la promesa que resuelva con delay */

function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const getItem = async () => {
    setTimeout(async () => {
      setItem({
        id: 0,
        title: "producto1",
        price: 300,
        pictureUrl:
          "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image",
      });
    }, 2000);
  };

  useEffect(() => {
    getItem();
  }, []);

  // // Implementar mock invocando a getItems() y utilizando el resolver then

  //  return /* JSX que devuelva un ItemDetail (desafío 6b) */
  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
