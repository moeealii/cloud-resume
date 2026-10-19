import React from "react";
import Social from "./Social";
import VisitorsCounter from "./VisitorsCounter";

const Footer = ({ data = [] }) => (
  <footer className="resume-footer">
    <span className="footer-love">
      © {new Date().getFullYear()} | Made with <span role="img" aria-label="love">❤️</span>
    </span>
    <VisitorsCounter />
    <div className="footer-social">
      {data.map((social) => (
        <Social social={social} key={social.service} />
      ))}
    </div>
  </footer>
);

export default Footer;
