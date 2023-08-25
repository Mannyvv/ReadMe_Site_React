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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar dark color="primary"  expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img src={logoImage} alt="nucamp logo" className="float-start"></img>
          <h1 className="mt-1">ReadMe</h1>
          <h2>Books For All</h2>
        </NavbarBrand>
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
      </Navbar>

      <Navbar id={styles["test"]} className="my-2" color="secondary" dark sticky="top">
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
      </Navbar>
    </>
  );
};

export default Header;
