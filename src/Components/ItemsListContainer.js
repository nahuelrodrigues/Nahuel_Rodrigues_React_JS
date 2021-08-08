import React from "react";
// CON PROP greeting Y MUESTRA EL MENSAJE DENTRO DEL CONTENEDOR CON EL STYLING INTEGRADO.
// IMPORTARLO DENTRO DE APP.JS
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
  return (
    <div className="fs-2 text-center">
      {props.greeting}
      {/* Creo nuestro contador con stock en 5 y que comience en 1 */}
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemListContainer;
