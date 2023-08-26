import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import logoImage from "../app/assets/img/logo.png";
import { useState } from "react";
import styles from "../test.module.css";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar dark color="primary"  expand="md" id="test1">
        <NavbarBrand className="ms-5" href="/" id="test2">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-list fa-lg" /> Directory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-addres-card fa-lg" /> Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </NavbarBrand>
    
      </Navbar>

    </>
  );
};

export default Footer;
