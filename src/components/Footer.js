import React from "react";
import Social from "./Social";

const Footer = ({ data = [] }) => (
  <footer className="resume-footer">
    <span>© {new Date().getFullYear()} Mohamed Ali</span>
    <div>
      {data.map((social) => (
        <Social social={social} key={social.service} />
      ))}
    </div>
  </footer>
);

export default Footer;
