import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import { Section, Tag } from "../components/ui";
import ProjectCard from "../components/ui/ProjectCard";
import { useProjects } from "../hooks/useProjects";

const SKILLS = {
  "Languages": ["C/C++", "Python", "JavaScript", "SQL", "ASM"],
  "Libraries": ["Numpy", "Pandas", "PyTorch", "NodeJS", "Express", "CMake/PreMake", "SQLite/PostgreSQL", "Hadoop"],
  "Theory": ["Linear Algebra", "Calculus", "Probability & Stats", "DSA", "OOP", "OS", "Software Engineering"],
};

const CERTS = [
  {
    name: "Young Innovations – Internship Experience Letter",
    url: "https://drive.google.com/file/d/1NYO1DAv_taePIMSvPB0hIPurLvJaszbF/view",
  },
  {
    name: "Fusemachines – AI Fellowship Certificate",
    url: "https://drive.google.com/file/d/1q79SYna53_cR2VHcBGbPi4CqFpLRZpnK/view",
  },
  {
    name: "Tensor, Thapathali – Python Programming for Automation",
    url: "https://drive.google.com/file/d/1yhAvzp8MbzQTC5mPT-zw_WLDWhZqVaqf/view",
  },
  {
    name: "RAC, Thapathali – PCB Design and Fabrication",
    url: "https://drive.google.com/file/d/1ydJ2Z1iZQTF1f5iQw3zGnHZsdzLz0KZ0/view",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Proventus Analytics",
    period: "Mar 2026 – Present",
    bullets: [
      "Built and Internal Time Tracking Website for the Company. Solo Work. Did the Design, Development, Testing, Deployment and Documentation. Uses Typescript, Express + NodeJS for Backend, React + Vite + Tailwind for Frontend, and PSQL for Database. Docker for Contenarization. Deployed the Frontend on Amazon Amplify, Backend on Amazon EC2, and Amazon RDS for Database. Scalable and Maintainable Design. API Documentation using Postman. Unit and Integration Testing for Critical Backend Modules. Basic Smoke Tests for Frontend.",
      "Woking on CratusPulse, a device + software system that helps hospitals automatically send patient vital signs (like heart rate, blood pressure, etc.) from bedside monitors into their EMR. Validaitng the EKG. Validating the EKG analysis stack against diverse, real-world ECG datasets and summarizing how it behaves across noise, rhythms, and sampling quirks."
    ],
    stack: ["Python", "Rust", "TypeScript", "React", "Express", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    role: "Backend Developer Intern",
    company: "Young Innovations Pvt Ltd",
    period: "Nov 2025 – Feb 2026",
    bullets: [
      "Worked on Understanding Backend Workflows and Project Structure.",
      "Explored Different System Design Patterns in a Professional Workplace.",
      "Learned Postgres SQL, Raw SQL Commands, ORM, Database Normalization and Database Access Control."
    ],
    stack: ["TypeScript", "Express", "Node.js", "PostgreSQL",],
  },
  {
    role: "AI Fellow",
    company: "Fusemachines",
    period: "Apr 2025 – Dec 2025",
    bullets: [
      "Studied Fundamental Concepts of Machine Learning and Data Science.",
      "Practiced Implementing ML Algorithms using Python and Common ML Libraries.",
      "Completed Various Hands-On Exercises and Mini-Projects as Part of the Fellowship."
    ],
    stack: ["Python", "NumPy", "Pandas", "PyTorch"],
  },
];

export default function HomePage() {
  const { items: projects, loading } = useProjects({ featured: true });

  return (
    <>
      <SEO
        description="Portfolio of Aaditya Joshi – Computer Engineering Student"
        path="/"
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="animate-fade-up">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">
            Available for opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink-primary mb-5">
            Aaditya Joshi
            <span className="block text-ink-secondary font-normal text-2xl sm:text-3xl mt-2">
              Software Engineer
            </span>
          </h1>
          <p className="text-ink-secondary max-w-2xl mb-8 text-justify">
            Computer Engineering student at IOE, Thapathali Campus, Tribhuvan University.
            <br />
            Graduating 2026
          </p>
          <div className="flex gap-3">
            <Link to="/projects" className="btn-primary">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:aaditya.joshi2095@gmail.com" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <Section>
        <h2 className="section-heading mb-8">Work History</h2>
        <div className="flex flex-col gap-5">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="card">
              <div className="flex justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-ink-muted">{exp.company}</p>
                </div>
                <span className="text-xs font-mono">{exp.period}</span>
              </div>

              <ul className="mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-ink-secondary text-justify">
                    • {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section className="pt-0">
        <div className="flex justify-between mb-10">
          <div>
            <p className="text-xs font-mono text-accent uppercase mb-2">
              Featured Work
            </p>
            <h2 className="section-heading">Selected Projects</h2>
          </div>
          <Link to="/projects" className="text-sm text-accent">
            All projects →
          </Link>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-52 bg-surface-2 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </Section>

      {/* Skills */}
      <Section className="pt-0">
        <h2 className="section-heading mb-8">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SKILLS).map(([group, skills]) => (
            <div key={group} className="card p-5">
              <h3 className="text-xs font-mono mb-3">{group}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section className="pt-0">
        <h2 className="section-heading mb-6">Certifications</h2>
        <div className="flex flex-col gap-3">
          {CERTS.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-3 hover:border-accent/30 group"
            >
              <CertIcon className="w-4 h-4 text-accent" />
              <span className="text-sm text-ink-secondary group-hover:text-ink-primary text-justify">
                {name}
              </span>
              <ExternalIcon className="w-3.5 h-3.5 ml-auto text-ink-muted group-hover:text-accent" />
            </a>
          ))}
        </div>
      </Section>

    </>
  );
}

function ArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CertIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className}`} strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function ExternalIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} stroke="currentColor" fill="none">
      <path d="M14 4h6v6M10 14L20 4M5 5h5v5H5z" />
    </svg>
  );
}