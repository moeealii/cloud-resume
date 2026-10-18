import React from "react";

const Education = ({ data = [] }) => (
  <section className="resume-section" aria-labelledby="education-title">
    <h2 className="section-header" id="education-title">
      Education
    </h2>
    {data.map((item) => (
      <div className="education" key={item.institution}>
        <h3>{item.institution}</h3>
        <strong>{item.field}</strong>
        <p>
          {item.location} · {item.years}
        </p>
        {item.coursework && (
          <div className="education-coursework">
            <h4>Relevant coursework</h4>
            <div className="tag-list">
              {item.coursework.map((course) => (
                <span className="tag" key={course}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </section>
);

export default Education;
