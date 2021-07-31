import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../App.css";
import logo from "../img/logo.png";
import CartWidget from "./CartWidget";

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
          <img className="logo" src={logo} width="40px" height="40px" />
          {""} Mi app en React.js
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Libros</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">PDF</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">
                Videos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Cursos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="about-us">About-Us</Nav.Link>
            <Nav.Link href="contact-us">Contact-Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </div>
  );
}
export default NavBar;
