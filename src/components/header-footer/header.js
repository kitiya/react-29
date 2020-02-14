import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="nav-item"
    activeClassName="active-nav-item"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => {
  return (
    <header id="main-header">
      <nav className="navbar">
        <HeaderLink className="nav-item" to="/">
          Home
        </HeaderLink>
        <HeaderLink className="nav-item" to="/project">
          Project
        </HeaderLink>
        <HeaderLink className="nav-item" to="/game">
          Game
        </HeaderLink>
        <HeaderLink className="nav-item" to="/about">
          About
        </HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
