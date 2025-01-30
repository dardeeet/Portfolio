import React from "react";
import { Link } from "react-router-dom";
import "./../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Mon Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/competences">Compétences</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
