import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import "../App.css";
import "./Navbar.css";
import logo from "../img/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

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
        <Container>
          <Navbar.Brand>
            <Nav.Link
              style={{ textDecoration: "none", color: "white" }}
              as={Link}
              to="/"
            >
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

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/libros">
                  Libros
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/pdf">
                  PDF
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/videos">
                  Videos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/category/cursos">
                  Cursos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Nosotros</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget className="gap-1" />
      </Navbar>
    </div>
  );
}
export default NavBar;
