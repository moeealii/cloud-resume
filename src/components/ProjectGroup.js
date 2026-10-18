import React from "react";
import Project from "./Project";

const ProjectGroup = ({ data = [] }) => (
  <section className="resume-section" aria-labelledby="projects-title">
    <h2 className="section-header" id="projects-title">
      Projects
    </h2>
    {data.map((item) => (
      <Project item={item} key={item.name} />
    ))}
  </section>
);

export default ProjectGroup;
