import React from "react";
// CON PROP greeting Y MUESTRA EL MENSAJE DENTRO DEL CONTENEDOR CON EL STYLING INTEGRADO.
// IMPORTARLO DENTRO DE APP.JS

function ItemListContainer(props) {
  return <div className="fs-2 text-center">{props.greeting}</div>;
}

export default ItemListContainer;
