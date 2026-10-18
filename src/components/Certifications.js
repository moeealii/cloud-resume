import React from "react";

const Certifications = ({ data = [] }) => (
  <section className="resume-section" aria-labelledby="certifications-title">
    <h2 className="section-header" id="certifications-title">
      Certifications
    </h2>
    <div className="certification-list">
      {data.map((cert) => (
        <a
          className="certification"
          href={cert.link}
          key={cert.name}
          target="_blank"
          rel="noreferrer"
        >
          <span className="cert-provider">{cert.provider}</span>
          <strong>{cert.name}</strong>
          <span className="cert-date">
            Issued {cert.issued}
            {cert.expired ? ` · Expired ${cert.expired}` : ""}
          </span>
          {cert.credentialId && (
            <span className="cert-id">Credential ID {cert.credentialId}</span>
          )}
          <span className="cert-link">View credential ↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default Certifications;
