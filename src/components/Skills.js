import React from "react";

const Skills = ({ data = [] }) => (
  <section className="resume-section" aria-labelledby="skills-title">
    <h2 className="section-header" id="skills-title">
      Technical Skills
    </h2>
    {data.map((group) => (
      <div className="skill-group" key={group.title}>
        <h3>{group.title}</h3>
        <div className="tag-list">
          {group.subskills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Skills;
