import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Social = ({ social }) => {
  const icon =
    social.service === "linkedin" ? (
      <AiFillLinkedin size={25} aria-hidden="true" />
    ) : social.service === "github" ? (
      <AiOutlineGithub size={25} aria-hidden="true" />
    ) : null;

  return (
    icon && (
      <a
        href={social.url}
        target="_blank"
        rel="noreferrer"
        aria-label={social.service}
      >
        {icon}
      </a>
    )
  );
};

export default Social;
