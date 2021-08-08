//Importo useState
import { React, useState } from "react";
//Creo mi contador y le asigno stock, valor inicial y onAdd
function ItemCount(props) {
  const [counter, setCounter] = useState(props.initial);
  // Dibujo el contador
  return (
    <div>
      <button
        onClick={() => {
          if (counter < props.stock) {
            //incrementa sólo si counter es menor al stock
            setCounter(counter + 1);
          }
        }}
      >
        +
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          if (counter > props.initial) {
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
