import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/project">
          Project
        </Link>
        <Link className="nav-item" to="/game">
          Game
        </Link>
        <Link className="nav-item" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
