import React from "react";
import Contact from "./Contact";

const Header = ({ name, role, summary, contacts }) => (
  <header className="resume-header">
    <img className="profile-photo" src="/profile.jpg" alt="Mohamed Ali" />
    <div className="header-copy">
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{summary}</p>
    </div>
    <div className="header-contact">
      {contacts &&
        Object.keys(contacts).map((key) => (
          <Contact key={key} field={key} value={contacts[key]} />
        ))}
    </div>
  </header>
);

export default Header;
