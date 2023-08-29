import React from "react";
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavbarComp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar dark className="navbarComp" sticky="top" expand="md">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav navbar>
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
    </>
  );
};

export default NavbarComp;
