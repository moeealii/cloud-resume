import React from "react";

const Project = ({ item }) => (
  <article className="project">
    <div className="project-heading">
      <h3>{item.name}</h3>
      {item.link && (
        <a href={item.link} target="_blank" rel="noreferrer">
          View code ↗
        </a>
      )}
    </div>
    <span>{item.company}</span>
    <p>{item.description}</p>
  </article>
);

export default Project;
