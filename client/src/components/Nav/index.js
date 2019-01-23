import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";

function Nav() {
  return (
    <Navbar brand='Google Books Search' left>
      <Link to="/search"><NavItem>Search</NavItem></Link>
      <Link to="/saved"><NavItem href='#'>Saved</NavItem></Link>
    </Navbar>
  );
}

export default Nav;
