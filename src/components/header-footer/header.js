import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ children, ...props }) => (
  <NavLink exact className="nav-link" activeClassName="active" {...props}>
    {children}
  </NavLink>
);

const Header = () => {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="kty-brand-logo">KITIYA</span>
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <HeaderLink to="/">Home</HeaderLink>
            </li>
            <li className="nav-item">
              <HeaderLink to="/projects">Projects</HeaderLink>
            </li>
            <li className="nav-item">
              <HeaderLink to="/about">About</HeaderLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
