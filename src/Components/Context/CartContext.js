import React, { createContext, useState, useEffect } from "react";
// creo mi contexto
export const CartContext = createContext([]);
// creo mi Componente
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  //checkear si está en cart
  const isInCart = (id) => items.find((e) => e.item.id === id) !== undefined;
  // borrar
  const clear = () => {
    setItems([]);
  };
  // tamaño del carrito
  /* mostrar cantidad de productos únicos agregados al carrito */
  /*   const cartSize = () => items.length; */
  /* mostrar cantidad total de productos agregados al carrito */
  const cartSize =
    items.length > 0 ? items.reduce((acc, cur) => acc + cur.quantity, 0) : 0;
  //remover items
  const removeItem = (id) => {
    setItems(items.filter((e) => e.item.id !== id));
  };
  //agregar items
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setItems(
        items.map((i) => {
          if (i.item.id === item.id) i.quantity = i.quantity + quantity;
          return i;
        })
      );
    } else {
      setItems([...items, { item, quantity }]);
    }
  };

  // muestro en consola
  useEffect(() => {
    console.log("cart", items);
  }, [items]);

  return (
    <CartContext.Provider
      value={{ items, addItem, isInCart, removeItem, clear, cartSize }}
    >
      {children}
    </CartContext.Provider>
  );
};
