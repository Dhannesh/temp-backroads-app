import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, pageIcons } from "./Data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link" rel="noreferrer">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {pageIcons.map((icon) => {
            return (
              <li key={icon.id}>
                <a
                  href={icon.href}
                  target={icon.target}
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon.css}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
