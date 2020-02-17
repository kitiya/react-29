import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ children, ...props }) => (
  <NavLink exact className="nav-link" activeClassName="active" {...props}>
    {children}
  </NavLink>
);

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            K I T I YA
          </a>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <HeaderLink to="/">Home</HeaderLink>
            </li>
            <li class="nav-item">
              <HeaderLink to="/project">Project</HeaderLink>
            </li>
            <li class="nav-item">
              <HeaderLink to="/game">Game</HeaderLink>
            </li>
            <li class="nav-item">
              <HeaderLink to="/about">About</HeaderLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
