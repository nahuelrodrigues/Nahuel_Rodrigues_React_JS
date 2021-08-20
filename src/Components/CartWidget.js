import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart">
      <FaShoppingCart size="1.5rem" color="white" className="" />
    </Link>
  );
}
export default CartWidget;
