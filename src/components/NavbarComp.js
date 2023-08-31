import React from "react";
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchInput from "./SearchInput";
import NewsLetterSignUpForm from "../features/NewsLetter/NewsLetterSignUpForm";

const NavbarComp = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <>
        <Navbar dark className="navbarComp" sticky="top" expand="md">
          <NavbarToggler className="ms-auto" onClick={() => setMenuOpen(!menuOpen)} />
          <Collapse isOpen={menuOpen} navbar>
            <Nav navbar>
              <NavItem >
                <NavLink className="nav-link" to="/">
                  <i className="fa fa-home fa-sm" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/AboutUs">
                  <i className="fa fa-users fa-sm" /> About
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className="nav-link" to="/BooksPage">
                  <i className="fa fa-book fa-sm" /> Books
                </NavLink>
              </NavItem> */}

              <NewsLetterSignUpForm/>

              <NavItem>
                <NavLink className="nav-link" to="/ContactPage">
                  <i className="fa fa-address-card fa-sm" /> Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>

          <div className="search-container ms-auto">
            <SearchInput />
          </div>
        </Navbar>
      </>
    );
  };

  export default NavbarComp;
