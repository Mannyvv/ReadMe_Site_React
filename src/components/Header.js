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
      <Navbar className="headerNavBar" dark   expand="md">
        <NavbarBrand className=" headerNavbrand ms-1" href="/">
          <img src={logoImage} alt="nucamp logo" className="float-start logo"></img>
          <h1 className="mt-1">ReadMe</h1>
          <h2>Books For All</h2>
        </NavbarBrand>
      </Navbar>

    </>
  );
};

export default Header;
