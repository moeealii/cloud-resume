import React from "react";
import { MdLocationCity } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Contact = ({ field, value }) => (
  <div className="contact-item">
    {field === "email" && (
      <>
        <AiOutlineMail aria-hidden="true" />
        <a href={`mailto:${value}`} title="Email me">
          {value}
        </a>
      </>
    )}
    {field === "location" && (
      <>
        <MdLocationCity aria-hidden="true" />
        <span>{value}</span>
      </>
    )}
  </div>
);

export default Contact;
