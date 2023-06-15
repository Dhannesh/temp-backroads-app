import React from "react";
import { pageLinks, pageIcons } from "./Data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {pageIcons.map((icon) => {
          return (
            <li key={icon.id}>
              <a
                href={icon.href}
                target={icon.target}
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon.css}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
