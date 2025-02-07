// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Recipe Finder</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/search">Search List</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/Submitted">Submitted</Link>
      </div>
    </nav>
  );
};

export default Navbar;
