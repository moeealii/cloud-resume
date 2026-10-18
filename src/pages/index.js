import React from "react";
import SEO from "../components/SEO";
import "../styles.css";

const linkedIn = "https://www.linkedin.com/in/moeealii/";
const credentials = linkedIn + "details/certifications/";

const Arrow = ({ diagonal = false }) => (
  <span className="arrow" aria-hidden="true">
    {diagonal ? "↗" : "→"}
  </span>
);
const Eyebrow = ({ number, children }) => (
  <span className="eyebrow">
    {number && <b>{number}</b>}
    {children}
  </span>
);
const SectionHeading = ({ number, eyebrow, title, children }) => (
  <div className="section-heading">
    <div>
      <Eyebrow number={number}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
    </div>
    <p>{children}</p>
  </div>
);

const focus = [
  {
    number: "01",
    title: "Agentic workflows",
    description:
      "Designing the orchestration and tool connections that let AI move from a prompt to a useful outcome.",
    tags: ["LLMs", "Orchestration", "Python"],
  },
  {
    number: "02",
    title: "Production infrastructure",
    description:
      "Building the services and deployment paths behind dependable AI features at platform scale.",
    tags: ["Kubernetes", "Go", "AWS"],
  },
  {
    number: "03",
    title: "End-to-end engineering",
    description:
      "Connecting product needs, application code, and cloud systems to ship work that people can use.",
    tags: ["React", "TypeScript", "Cloud"],
  },
];

const career = [
  {
    period: "2025 — Now",
    role: "Senior Software Developer · AI",
    company: "TextNow",
    description:
      "Leading AI engineering and building infrastructure for agentic workflows, model orchestration, and integration with existing services.",
  },
  {
    period: "2022 — 2025",
    role: "Full-Stack Developer",
    company: "TextNow",
    description:
      "Built internal tools with engineering and operations teams, focusing on reliability, security, and reducing manual work.",
  },
  {
    period: "2019 — 2022",
    role: "Full-Stack Developer",
    company: "Tactable.io",
    description:
      "Delivered cloud-native applications across changing client needs, stacks, and deadlines.",
  },
];

const IndexPage = () => (
  <div className="site-shell">
    <SEO
      title="AI Engineer & Software Developer"
      description="Mohamed Ali is a Toronto-based software developer leading AI engineering at TextNow. Explore his work in agentic systems, cloud infrastructure, and full-stack development."
    />
    <div className="announcement">
      <i /> Building AI systems at TextNow <span>/</span> Based in Toronto
    </div>
    <header className="site-header wrap">
      <a className="wordmark" href="#top" aria-label="Mohamed Ali, back to top">
        mohamed<span>.</span>ali
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#credentials">Credentials</a>
      </nav>
      <a className="header-contact" href="mailto:me@mohameda.li">
        Get in touch <Arrow diagonal />
      </a>
    </header>
    <main id="top">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-main">
          <Eyebrow>Hello, I’m Mohamed</Eyebrow>
          <h1 id="hero-title">
            Making AI
            <br />
            <em>useful</em> in the
            <br />
            real world<span>.</span>
          </h1>
          <p className="hero-intro">
            I lead AI engineering at TextNow, building agentic workflows and the
            production systems around them. My work connects ambitious ideas
            with software people can rely on.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              Explore my work <Arrow diagonal />
            </a>
            <a className="text-link" href="mailto:me@mohameda.li">
              Let’s talk <Arrow />
            </a>
          </div>
          <div className="hero-meta">
            <span>Senior Software Developer</span>
            <span>TextNow · Toronto, Canada</span>
          </div>
        </div>
        <div className="hero-aside">
          <div className="portrait">
            <img src="/profile.jpg" alt="Portrait of Mohamed Ali" />
            <span>MOHAMED ALI</span>
          </div>
          <div className="hero-note">
            <strong aria-hidden="true">✳</strong>
            <p>Software engineering, with an eye on what comes next.</p>
          </div>
        </div>
      </section>
      <div className="ticker">
        <div className="wrap">
          <span>AI systems</span>
          <b>✳</b>
          <span>Cloud infrastructure</span>
          <b>✳</b>
          <span>Full-stack engineering</span>
          <b>✳</b>
          <span>Thoughtful delivery</span>
        </div>
      </div>
      <section id="work" className="section wrap" aria-label="What I do">
        <SectionHeading
          number="01"
          eyebrow="What I do"
          title="From idea to impact."
        >
          I work across the layers that make modern AI practical: the models,
          the systems around them, and the product experiences they power.
        </SectionHeading>
        <div className="focus-grid">
          {focus.map((area) => (
            <article className="focus-card" key={area.number}>
              <div className="card-top">
                <span>{area.number} / FOCUS</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <div className="tags">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="featured" aria-labelledby="featured-title">
        <div className="featured-layout wrap">
          <div className="featured-copy">
            <Eyebrow>In practice / TextNow</Eyebrow>
            <h2 id="featured-title">Building the connective tissue for AI.</h2>
            <p>
              My current work centers on agentic workflows: connecting language
              models to platform services, shaping orchestration patterns, and
              making the path from experimentation to production more reliable.
            </p>
            <a href="#experience">
              More about my experience <Arrow />
            </a>
          </div>
          <div
            className="system-visual"
            aria-label="Illustration of the layers in an AI workflow"
          >
            <div className="visual-top">
              <span>AI / SYSTEM VIEW</span>
              <span>01 — 04</span>
            </div>
            <div className="flow">
              {[
                ["01", "Intent", "Understand the task"],
                ["02", "Orchestrate", "Reason & route"],
                ["03", "Act", "Use tools & services"],
                ["04", "Learn", "Observe & improve"],
              ].map((step, i) => (
                <React.Fragment key={step[0]}>
                  {i > 0 && <div className="connector" aria-hidden="true" />}
                  <div className={"flow-node " + (i === 1 ? "active" : "")}>
                    <span>{step[0]}</span>
                    <strong>{step[1]}</strong>
                    <small>{step[2]}</small>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="visual-footer">
              <i /> Architecture is where the idea becomes useful.
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="section experience wrap"
        aria-label="Experience"
      >
        <SectionHeading number="02" eyebrow="Experience" title="The path here.">
          A foundation in full-stack and cloud engineering now focused on
          bringing AI into real products.
        </SectionHeading>
        <div className="timeline">
          {career.map((job) => (
            <article className="timeline-item" key={job.period}>
              <span className="period">{job.period}</span>
              <i aria-hidden="true" />
              <div>
                <h3>{job.role}</h3>
                <strong>{job.company}</strong>
                <p>{job.description}</p>
              </div>
            </article>
          ))}
        </div>
        <a
          className="inline-link"
          href={linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          Full career history on LinkedIn <Arrow diagonal />
        </a>
      </section>
      <section
        id="credentials"
        className="section credentials wrap"
        aria-label="Credentials"
      >
        <SectionHeading
          number="03"
          eyebrow="Background"
          title="Grounded in the craft."
        >
          The technical foundations behind the work.
        </SectionHeading>
        <div className="credentials-grid">
          <a
            className="credential credential-featured"
            href={credentials}
            target="_blank"
            rel="noreferrer"
          >
            <div className="credential-top">
              <span>GOOGLE CLOUD / CERTIFICATION</span>
              <Arrow diagonal />
            </div>
            <div>
              <span className="credential-glyph">G</span>
              <h3>
                Professional
                <br />
                Cloud Architect
              </h3>
              <p>Issued March 2022 · Credential ID 48219724</p>
            </div>
            <span className="credential-bottom">
              View on LinkedIn <Arrow />
            </span>
          </a>
          <div className="credential-stack">
            <a
              className="credential credential-secondary"
              href={credentials}
              target="_blank"
              rel="noreferrer"
            >
              <div className="credential-top">
                <span>AMAZON WEB SERVICES / CERTIFICATION</span>
                <Arrow diagonal />
              </div>
              <div>
                <h3>Solutions Architect – Associate</h3>
                <p>Earned November 2020 · Expired November 2023</p>
              </div>
            </a>
            <div className="credential credential-education">
              <div className="credential-top">
                <span>EDUCATION</span>
                <span aria-hidden="true">✳</span>
              </div>
              <div>
                <h3>Computer Science, BASc</h3>
                <p>York University · 2013–2017</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-layout wrap">
          <div>
            <Eyebrow>Let’s connect</Eyebrow>
            <h2 id="contact-title">
              Have something
              <br />
              <em>interesting</em> in mind?
            </h2>
          </div>
          <div>
            <p>
              I’m always glad to connect with people thinking about AI,
              software, and the systems behind them.
            </p>
            <a href="mailto:me@mohameda.li">
              me@mohameda.li <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer wrap">
      <span>© {new Date().getFullYear()} Mohamed Ali</span>
      <span>Designed & built with intention.</span>
      <div>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          LinkedIn <Arrow diagonal />
        </a>
        <a href="https://github.com/moeealii" target="_blank" rel="noreferrer">
          GitHub <Arrow diagonal />
        </a>
      </div>
    </footer>
  </div>
);

export default IndexPage;
