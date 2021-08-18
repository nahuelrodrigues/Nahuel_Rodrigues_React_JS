//Importo React y useState
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

//Creo mi contador y le asigno stock, valor inicial y onAdd
// Como ya sabemos que propiedades de props queremos,
// Podemos reemplazarlo el parámetro {initial,stock} y despues usarlo directamente
function ItemCount({ stock, initial }) {
  const [counter, setCounter] = useState(initial);
  // Dibujo el contador
  return (
    <div className="d-inline-flex gap-5">
      <button
        className="btn btn-dark"
        onClick={() => {
          if (counter < stock) {
            //incrementa sólo si counter es menor al stock
            setCounter(counter + 1);
          }
        }}
      >
        +
      </button>
      <p className="fs-6">{counter}</p>
      <button
        className="btn btn-dark "
        onClick={() => {
          if (counter > initial) {
            //decrementá sólo si counter es mayor a initial
            setCounter(counter - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
