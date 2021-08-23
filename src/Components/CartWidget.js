import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

function CartWidget() {
  const { cartSize } = useContext(CartContext);
  console.log(cartSize);
  return (
    <Link to="/cart">
      <FaShoppingCart size="1.5rem" color="white" className="" />
      <span style={{ marginRight: 100 }}>{cartSize()}</span>
    </Link>
  );
}
export default CartWidget;
