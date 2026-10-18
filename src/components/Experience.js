import React from "react";
import Job from "./Job";

const Experience = ({ data = [] }) => (
  <section className="resume-section" aria-labelledby="experience-title">
    <h2 className="section-header" id="experience-title">
      Experience
    </h2>
    {data.map((item) => (
      <Job item={item} key={`${item.company}-${item.start}`} />
    ))}
  </section>
);

export default Experience;
