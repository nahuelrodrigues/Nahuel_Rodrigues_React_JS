import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  console.log("cart", items);
  const isInCart = (id) => items.find((e) => e.item.id === id) !== undefined;

  const clear = () => {
    setItems([]);
  };

  /* mostrar cantidad de productos únicos agregados al carrito */
  /*   const cartSize = () => items.length; */
  /* mostrar cantidad total de productos agregados al carrito */
  const cartSize = () => items.reduce((acc, cur) => acc + cur.quantity, 0);

  const removeItem = (id) => {
    setItems(items.filter((e) => e.item.id !== id));
  };

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
