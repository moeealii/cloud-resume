import React from "react";

const Education = ({ data = [] }) => (
  <section className="resume-section" aria-labelledby="education-title">
    <h2 className="section-header" id="education-title">
      Education
    </h2>
    {data.map((item) => (
      <div className="education" key={item.institution}>
        <h3>{item.institution}</h3>
        <strong>{item.degree}</strong>
        <p>
          {item.location} · {item.years}
        </p>
      </div>
    ))}
  </section>
);

export default Education;
