import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Components/Context/CartContext";

function CartWidget() {
  // me traigo la función cartSize de mi context
  const { cartSize } = useContext(CartContext);
  /* console.log(cartSize); */
  return (
    cartSize === 0 || (
      <Link to="/cart">
        <FaShoppingCart
          size="1.5rem"
          color="white"
          className=" position-relative"
        />
        <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartSize}
        </span>
      </Link>
    )
  );
}
export default CartWidget;
