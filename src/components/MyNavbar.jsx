import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import Logo from "./assets/github.svg";
import Logo1 from "./assets/mLogo.png";

function MyNavbar() {
  return (
    <div>
      <Navbar className="navbar-nav-1" expand="lg">
        <Navbar.Brand href="/">
          <img className="ml-3" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Group className="ml-3">
            <Form.Control
              size="sm"
              type="text"
              className="search-or-jump shadow-none"
              placeholder="Search or jump to..."
            />
          </Form.Group>

          <Nav className="mr-auto">
            <Nav.Link className="pmie-texts-nav ml-4" href="#home">
              Pull requests
            </Nav.Link>
            <Nav.Link className="pmie-texts-nav" href="#link">
              Issues
            </Nav.Link>
            <Nav.Link className="pmie-texts-nav" href="#link">
              Marketplace
            </Nav.Link>
            <Nav.Link className="pmie-texts-nav" href="#link">
              Explore
            </Nav.Link>
          </Nav>
          <Nav>
            <i className="bi bi-bell bi-bell-navbar mr-3"></i>
            <div className="d-flex align-items-center mr-3">
              <i class="bi bi-plus-lg bi-plus-lg-navbar"></i>
              <i class="bi bi-caret-down-fill"></i>
            </div>
            <div className="d-flex align-items-center mr-3">
              <img className="user-img-navbar" src={Logo1} alt="img-logo" />
              <i class="bi bi-caret-down-fill"></i>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
