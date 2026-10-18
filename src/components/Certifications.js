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
          <span>
            <span className="cert-provider">{cert.provider}</span>
            <strong className="cert-name">{cert.name}</strong>
            <span className="cert-date">
              Issued {cert.issued}
              {cert.expired ? ` · Expired ${cert.expired}` : ""}
            </span>
            {cert.credentialId && (
              <span className="cert-id">Credential ID {cert.credentialId}</span>
            )}
          </span>
          <span className="cert-arrow" aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default Certifications;
