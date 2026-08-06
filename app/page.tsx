const projects = [
  {
    number: "01",
    title: "AfriHealth",
    label: "Healthcare platform",
    description:
      "Backend engineering across a multi-tenant hospital platform spanning clinical, administrative, provider, and staff workflows.",
    proof: ["300+ REST endpoints", "81 database migrations", "20+ clinical modules"],
    stack: "Node.js · TypeScript · Express · PostgreSQL",
    tone: "blue",
  },
  {
    number: "02",
    title: "Oyster Meet",
    label: "Real-time consultation",
    description:
      "A role-aware virtual consultation experience with secure sessions, consent-aware cloud recording, screen sharing, and real-time messaging.",
    proof: ["Agora RTC / RTM", "Dual-token auth", "Cloud recording"],
    stack: "Laravel · React · TypeScript · Agora",
    tone: "paper",
  },
  {
    number: "03",
    title: "AskOyster AI",
    label: "Practical AI integration",
    description:
      "Application-layer integration of an existing domain-specialized RAG service, with streamed responses and allergy-aware skincare recommendations.",
    proof: ["SSE streaming", "Routine generation", "Safety-aware output"],
    stack: "PHP · Laravel · React · AI APIs",
    tone: "paper",
  },
  {
    number: "04",
    title: "Munachi",
    label: "Product in progress",
    description:
      "A wedding and ceremony budget tracker growing into a focused multi-tenant SaaS for hosts, families, and planning teams.",
    proof: ["Multi-tenant design", "Budget workflows", "Early-stage build"],
    stack: "Express · TypeScript · PostgreSQL · React",
    tone: "ink",
  },
];

const experience = [
  {
    period: "Jul 2024 – Mar 2026",
    company: "AfriHealth Limited",
    role: "Software Engineer",
    copy: "Built and evolved backend systems for a large healthcare product while maintaining careful access control, schema reliability, and production stability.",
  },
  {
    period: "Aug 2025 – Apr 2026",
    company: "Oyster Skin",
    role: "Software Engineer · Founding Engineer",
    copy: "Shipped AI-enabled skincare and real-time consultation features across Laravel services and React interfaces in an early-stage product environment.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Nicholas Ugbala, home">
          NU<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-contact" href="mailto:kosinick01@gmail.com">
          Let&apos;s talk <Arrow diagonal />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-meta eyebrow">
          <span>Lagos, Nigeria</span>
          <span>Backend · Full-stack · Product</span>
        </div>
        <div className="hero-title-wrap">
          <h1>
            I build the systems
            <br />
            <em>products depend on.</em>
          </h1>
          <div className="orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="hero-bottom">
          <p className="hero-intro">
            I&apos;m Nicholas Ugbala, a software engineer turning complex healthcare,
            real-time, and AI-enabled workflows into reliable products people can use.
          </p>
          <a className="text-link" href="#work">
            Explore selected work <Arrow />
          </a>
        </div>
      </section>

      <section className="evidence" aria-label="Career highlights">
        <div className="shell evidence-grid">
          <div className="evidence-intro eyebrow">Production evidence</div>
          <div className="metric">
            <strong>2+</strong>
            <span>years building production software</span>
          </div>
          <div className="metric">
            <strong>97k+</strong>
            <span>lines in a TypeScript healthcare codebase</span>
          </div>
          <div className="metric">
            <strong>0</strong>
            <span>production incidents across 21 months</span>
          </div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work · 2024–2026</p>
            <h2>Useful software,<br /><em>carefully engineered.</em></h2>
          </div>
          <p>
            A selection of production work and active projects across healthcare,
            real-time communication, practical AI, and focused SaaS products.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="card-top eyebrow">
                <span>{project.number}</span>
                <span>{project.label}</span>
              </div>
              <div>
                <h3>{project.title}</h3>
                <p className="project-copy">{project.description}</p>
              </div>
              <ul className="proof-list" aria-label={`${project.title} highlights`}>
                {project.proof.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="card-footer">
                <span>{project.stack}</span>
                <Arrow diagonal />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="section-kicker">
          <p className="eyebrow">Experience</p>
          <p className="section-index">02 / 04</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={item.company}>
              <p className="period">{item.period}</p>
              <div>
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
              </div>
              <p className="experience-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">How I work</p>
            <h2>Product sense.<br /><em>Backend depth.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              My best work sits where domain complexity meets real user needs. I care
              about clear boundaries, reliable data, calm interfaces, and systems the
              next engineer can understand.
            </p>
            <p>
              I&apos;ve worked across clinical workflows, payments, provider integrations,
              AI product features, and real-time sessions. Today, I&apos;m deepening that
              practice through a healthcare LangGraph triage project with explicit safety
              boundaries, evaluation, and human escalation.
            </p>
            <div className="principles">
              <span>Design for failure</span>
              <span>Explain the tradeoff</span>
              <span>Ship with care</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact shell">
        <p className="eyebrow">Have a hard product problem?</p>
        <h2>Let&apos;s build something<br /><em>that holds up.</em></h2>
        <div className="contact-bottom">
          <a className="contact-email" href="mailto:kosinick01@gmail.com">
            kosinick01@gmail.com <Arrow diagonal />
          </a>
          <div className="socials">
            <a href="https://www.linkedin.com/in/nicholas-ugbala" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/nicholas-ugbala-dev" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Nicholas Ugbala</span>
        <span>Software Engineer · Lagos, Nigeria</span>
      </footer>
    </main>
  );
}
