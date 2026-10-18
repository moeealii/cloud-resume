import React from "react";

import Header from "../components/Header";
import Experience from "../components/Experience";
import ProjectGroup from "../components/ProjectGroup";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import resume from "../../data/profile";
import "../styles.css";

const IndexPage = () => (
  <div className="resume-page">
    <SEO
      title="Software Developer · AI Systems"
      description="Mohamed Ali is a Toronto-based software developer leading AI engineering at TextNow."
    />
    <Header
      name={resume.fullname}
      role={resume.role}
      summary={resume.summary}
      contacts={resume.contacts}
    />
    <main className="resume-grid">
      <div>
        <Experience data={resume.experience} />
        <ProjectGroup data={resume.projects} />
      </div>
      <aside>
        <Education data={resume.education} />
        <Certifications data={resume.certifications} />
        <Skills data={resume.skills} />
      </aside>
    </main>
    <Footer data={resume.social} />
  </div>
);

export default IndexPage;
