import React from "react";

const Job = ({ item }) => (
  <article className="job">
    <div className="job-row">
      <h3>{item.role}</h3>
      <span>{item.location}</span>
    </div>
    <div className="job-row job-meta">
      <strong>{item.company}</strong>
      <span>
        {item.start} – {item.end || "Present"}
      </span>
    </div>
    <p>{item.description}</p>
    {item.description_cont && <p>{item.description_cont}</p>}
    {item.technology && (
      <div className="tag-list" aria-label="Technologies">
        {item.technology.map((technology) => (
          <span className="tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    )}
  </article>
);

export default Job;
