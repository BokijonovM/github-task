import React, { useState } from "react";
import { Nav, Navbar, Form, Dropdown, FormControl } from "react-bootstrap";
import Logo from "./assets/github.svg";

function MyNavbar({ userInfo }) {
  const CustomToggle = React.forwardRef(
    ({ children, onClick, onChange }, ref) => (
      <Form.Group className="ml-3">
        <Form.Control
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
          size="sm"
          type="text"
          className="search-or-jump shadow-none"
          placeholder="Search or jump to..."
        />
        {children}
      </Form.Group>
    )
  );

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <div>
      <Navbar className="navbar-nav-1" expand="lg">
        <Navbar.Brand href="/">
          <img className="ml-3" src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-custom-components"
            ></Dropdown.Toggle>

            <Dropdown.Menu
              className="navbar-input-dropdown-cont"
              as={CustomMenu}
            >
              <Dropdown.Item
                href="/search"
                className="py-2 d-flex align-items-center navbar-input-dropdown-item"
              >
                <i class="bi bi-journal-bookmark-fill mr-3"></i>
                Search for users
                <span className="ml-auto jump-to-item-needed px-3">
                  Jump to
                  <i
                    class="bi bi-arrow-return-left"
                    style={{ fontSize: "10px" }}
                  ></i>
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
              <img
                className="user-img-navbar"
                src={userInfo.avatar_url}
                alt="img-logo"
              />
              <i class="bi bi-caret-down-fill"></i>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
