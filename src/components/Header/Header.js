import React from "react";
import "./Header-styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <div className="container-fluid">
        <div className="header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo"> Movie App</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
