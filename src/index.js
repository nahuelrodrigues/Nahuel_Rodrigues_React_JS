import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img className="logo" src={logo} width="40px" height="40px" />
          {""} Mi app en React.js
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">
                Chocolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="about-us">About-Us</Nav.Link>
            <Nav.Link href="contact-us">Contact-Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus aperiam
          harum alias officiis assumenda officia quibusdam deleniti eos
          cupiditate dolore doloribus!
        </p>
        <p>
          Ad dolore dignissimos asperiores dicta facere optio quod commodi nam
          tempore recusandae. Rerum sed nulla eum vero expedita ex delectus
          voluptates rem at neque quos facere sequi unde optio aliquam!
        </p>
        <p>
          Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur
          porro quaerat autem ipsam odit quam beatae tempora quibusdam illum!
          Modi velit odio nam nulla unde amet odit pariatur at!
        </p>
        <p>
          Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto
          nihil explicabo perferendis quos provident delectus ducimus
          necessitatibus reiciendis optio tempora unde earum doloremque commodi
          laudantium ad nulla vel odio?
        </p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
