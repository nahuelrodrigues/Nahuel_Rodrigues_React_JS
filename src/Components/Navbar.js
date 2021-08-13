import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../App.css";
import logo from "../img/logo.png";
import CartWidget from "./CartWidget";
import { Link, useHistory, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
        className="px-4"
      >
        <Navbar.Brand>
          <Link to="/">
            <img
              className="logo"
              alt="logo"
              src={logo}
              width="40px"
              height="40px"
            />
            <h1 className="d-inline fs-4 align-middle px-3">EdTech.js</h1>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className="position-absolute top-50 end-0 translate-middle-y">
            <NavDropdown title="Categorías">
              <Link to="/category/:categoryId">
                {" "}
                <NavDropdown.Item href="#categorias/tea">
                  Libros
                </NavDropdown.Item>
              </Link>
              <Link to="/category/:categoryId">
                <NavDropdown.Item href="#productos/coffee">
                  PDF
                </NavDropdown.Item>
              </Link>
              <Link to="/category/:categoryId">
                <NavDropdown.Item href="#productos/chocolate">
                  Videos
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/category/:categoryId">
                <NavDropdown.Item href="#productos/promo">
                  Cursos
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <CartWidget className="gap-6" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
