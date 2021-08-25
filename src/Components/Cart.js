import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Cart.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Components/Context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

/* const sumaTotal = () => {
  const { items } = useContext(CartContext);
  items.reduce((acc, cur) => acc + cur.price);
  console.log(sumaTotal());
}; */

const Cart = () => {
  const { items, cartSize } = useContext(CartContext);
  console.log("items", items);
  console.log("cartsize", cartSize);
  return (
    <div>
      <div className="container padding-bottom-3x mb-1">
        {/* Shopping Cart*/}
        <div className="table-responsive shopping-cart">
          {/* COMIENZO DE TABLA */}
          <table className="table">
            {/*  COMIENZO DEL ENCABEZADO DE LA TABLA */}
            <thead>
              <tr>
                <th>Producto</th>
                <th className="text-center">Cantidad</th>
                <th className="text-center">Subtotal</th>

                <th className="text-center">
                  <a className="btn btn-sm btn-outline-danger" href="#">
                    Vaciar
                  </a>
                </th>
              </tr>
            </thead>
            {/*  COMIENZO DEL CUERPO */}
            <tbody>
              {/* COMIENZO DE ITEM */}
              {cartSize > 0 ? (
                items.map((product, i) => (
                  <tr key={i}>
                    <td>
                      <div className="product-item">
                        <a className="product-thumb" href="#">
                          <img
                            /*  src="https://via.placeholder.com/220x180/5F9EA0/000000" */
                            src={product.item.pictureUrl}
                            alt="Producto"
                          />
                        </a>
                        <div className="product-info">
                          <h4 className="product-title">
                            <a href="#">{product.item.title}</a>
                          </h4>
                          <span>
                            <em>Size:</em> 10.5
                          </span>
                          <span>
                            <em>Color:</em> Dark Blue
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="count-input">
                        <select className="form-control">
                          <option>{product.quantity}</option>
                        </select>
                      </div>
                    </td>
                    <td className="text-center text-lg text-medium">
                      ${product.item.price}
                    </td>

                    <td className="text-center">
                      <a
                        className="remove-from-cart"
                        href="#"
                        data-toggle="tooltip"
                        title
                        data-original-title="Remove item"
                      >
                        <FaTrashAlt size="" color="red" className="" />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <Link
                  to="/"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  No hay productos, volver a inicio
                </Link>
              )}
              {/*   FIN DE ITEMS  */}
            </tbody>
          </table>
        </div>
        <div className="shopping-cart-footer">
          <div className="column">
            <form className="coupon-form" method="post">
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Código del Cupón"
                required
              />
              <button className="btn btn-outline-primary btn-sm" type="submit">
                Aplicar Cupón
              </button>
            </form>
          </div>
          <div className="column text-lg">
            Total:{" "}
            <span className="text-medium">
              $
              {items.reduce(
                (acc, cur) => cur.item.price * cur.quantity + acc,
                0
              )}
            </span>
          </div>
        </div>
        <div className="shopping-cart-footer">
          <div className="column">
            <Link className="btn btn-outline-secondary" to="/">
              <i className="icon-arrow-left" />
              &nbsp;Volver
            </Link>
          </div>
          <div className="column">
            <a
              className="btn btn-primary"
              href="#"
              data-toast
              data-toast-type="success"
              data-toast-position="topRight"
              data-toast-icon="icon-circle-check"
              data-toast-title="Your cart"
              data-toast-message="is updated successfully!"
            >
              Actualizar
            </a>
            <a className="btn btn-success" href="#">
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
