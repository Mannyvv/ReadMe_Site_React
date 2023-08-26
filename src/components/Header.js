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
      <Navbar className="Headercomp" dark color="primary"  expand="md">
        <NavbarBrand className=" Headercomp2 ms-5" href="/">
          <img src={logoImage} alt="nucamp logo" className="float-start"></img>
          <h1 className="mt-1">ReadMe</h1>
          <h2>Books For All</h2>
        </NavbarBrand>
      </Navbar>

    </>
  );
};

export default Header;
