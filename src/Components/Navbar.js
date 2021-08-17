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
          <Nav.Link as={Link} to="/">
            <img
              className="logo"
              alt="logo"
              src={logo}
              width="40px"
              height="40px"
            />
            <h1 className="d-inline fs-4 align-middle px-3">EdTech.js</h1>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />

        <Nav className="position-absolute top-50 end-0 translate-middle-y">
          <Nav.Link as={Link} to="/category/libros">
            Libros{" "}
          </Nav.Link>

          <Nav.Link as={Link} to="/category/pdf">
            PDF
          </Nav.Link>

          <Nav.Link as={Link} to="/category/videos">
            Videos
          </Nav.Link>

          <Nav.Link as={Link} to="/category/cursos">
            Cursos
          </Nav.Link>

          <Nav.Link as={Link} to="/nosotros">
            Nosotros
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
          <CartWidget className="gap-6" />
        </Nav>
      </Navbar>
    </div>
  );
}
export default NavBar;
