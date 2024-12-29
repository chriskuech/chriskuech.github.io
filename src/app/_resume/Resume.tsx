import {
  AiOutlineCalendar,
  AiOutlineDeploymentUnit,
  AiOutlineDownload,
  AiOutlineEnvironment,
  AiOutlineFileWord,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineRight,
  AiOutlineRise,
} from "react-icons/ai";
import { LiaBrainSolid, LiaStackOverflow } from "react-icons/lia";
import Image from "next/image";
import "./Resume.css";

export const Resume = () => (
  <div className="flex flex-col gap-8">
    <div className="black-glass">
      <div className="container mx-auto px-12 py-12">
        <header className="flex flex-row justify-between items-center">
          <a href="/">
            <h1>Chris Kuech</h1>
          </a>
          <div className="nav">
            <h2>Engineering Leader</h2>
            <div className="nav-links">
              <a
                aria-label="Email"
                title="Email"
                href="mailto:chris@kuech.dev"
                target="_blank"
              >
                <AiOutlineMail />
                <span>chris@kuech.dev</span>
              </a>
              <a
                aria-label="Calendar"
                title="Book a Meeting"
                href="https://cal.com/chriskuech"
                target="_blank"
              >
                <AiOutlineCalendar />
                <span>Meet</span>
              </a>
              <a
                aria-label="Resume"
                title="Resume"
                href="/assets/Chris.Kuech.Resume.2024.docx"
                target="_blank"
              >
                <AiOutlineFileWord />
                <span>Resume</span>
              </a>
              <a aria-label="Location" title="Location">
                <AiOutlineEnvironment />
                <span>Seattle, WA</span>
              </a>
            </div>
            <div className="nav-links">
              <a
                aria-label="LinkedIn"
                title="LinkedIn"
                href="https://www.linkedin.com/in/chriskuech"
                target="_blank"
              >
                <AiOutlineLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                aria-label="GitHub"
                title="GitHub"
                href="https://github.com/chriskuech"
              >
                <AiOutlineGithub />
                <span>GitHub</span>
              </a>
              <a
                aria-label="Stack Overflow"
                title="Stack Overflow"
                href="https://stackoverflow.com/users/1470887/twinlakes"
              >
                <LiaStackOverflow />
                <span>Stack Overflow</span>
              </a>
            </div>
          </div>
          <a className="button" href="/posts" style={{ display: "none" }}>
            Blog <AiOutlineRight />
          </a>
        </header>
      </div>
    </div>

    <div className="container mx-auto px-8">
      <div className="flex gap-8 flex-col md:flex-row items-center md:items-start">
        <figure className="shrink-0 m-0 md:m-8 md:mr-0">
          <Image
            title="Chris Kuech at TeamLab Planets"
            src="/assets/me-yellow-square.jpg"
            width={200}
            height={200}
            alt="Chris Kuech at TeamLab Planets"
            className="rounded-full md:rounded-none"
          />
          <figcaption className="text-center md:text-right text-xs">
            @
            <a href="https://www.teamlab.art/w/typhoon_balls/" target="_blank">
              TeamLab Planets
            </a>
          </figcaption>
        </figure>
        <section className="black-glass text-3xl *:mb-4">
          <p>
            Chris is a Software Engineering Leader with a passion for shipping
            features and solving interesting problems.
          </p>
          <p>
            He has spent the past 3 years in the Advanced Manufacturing space.
            Formerly at Microsoft.
          </p>
        </section>
      </div>
    </div>

    <div className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-8 pb-8">
        <section className="w-full lg:w-2/3 black-glass">
          <div className="label">Interests</div>
          <a
            className="button"
            href="https://cal.com/chriskuech"
            style={{ position: "absolute", top: "0.7em", right: "0.7em" }}
          >
            <AiOutlineCalendar /> Book a Meeting <AiOutlineRight />
          </a>
          <p>Looking to connect with people and projects related to&mdash;</p>
          <ul style={{ fontSize: "2em" }}>
            <li>
              Localism and <mark>real-world impacts</mark>
              <div>
                manufacturing, supply chain, construction, and agriculture
              </div>
            </li>
            <li>
              Complex problems
              <div>
                simulations, <mark>business process automation</mark>, AI,
                system design, broad scope
              </div>
            </li>
            <li>
              High-stakes problems
              <div>
                early-stage startups, high-scale, <mark>high-compliance</mark>{" "}
                systems
              </div>
            </li>
            <li>
              Rapid app development
              <div>
                AI coding, static analysis, rapid prototyping, team leadership
              </div>
            </li>
            <li>
              Generative, interactive, and immersive art
              <div>
                art installations, three.js, audio synthesis, ambient music
              </div>
            </li>
          </ul>
        </section>

        <section className="w-full lg:w-1/3 black-glass">
          <div className="label">Experience</div>

          <a
            className="button"
            href="/public/Chris.Kuech.Resume.2024.docx"
            style={{
              position: "absolute",
              top: "0.7em",
              right: "0.7em",
            }}
          >
            <AiOutlineFileWord />
            Resume
            <AiOutlineDownload />
          </a>

          <div className="experience-list">
            <div>
              <div>
                <strong>9</strong>
                <sub>yr</sub>
              </div>
              <div>high-compliance DevOps</div>
            </div>
            <div>
              <div>
                <strong>6</strong>
                <sub>yr</sub>
              </div>
              <div>at Microsoft</div>
            </div>
            <div>
              <div>
                <strong>5</strong>
                <sub>yr</sub>
              </div>
              <div>high-availability DevOps</div>
            </div>
            <div>
              <div>
                <strong>5</strong>
                <sub>yr</sub>
              </div>
              <div>leading teams</div>
            </div>
            <div>
              <div>
                <strong>5</strong>
                <sub>yr</sub>
              </div>
              <div>building ERP/Supply Chain systems</div>
            </div>
            <div>
              <div>
                <strong>3</strong>
                <sub>yr</sub>
              </div>
              <div>leading early-stage startup engineering</div>
            </div>
            <div>
              <div>
                <strong>3</strong>
                <sub>yr</sub>
              </div>
              <div>in the Advanced Manufacturing space</div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full black-glass">
        <div className="label">Past Projects</div>

        <div className="card-group">
          <div className="card">
            <div className="card-title">
              <AiOutlineRise />
              Business Process Automation
            </div>
            <ul className="card-list">
              <li>
                <strong>Workflow Optimization</strong> Audit workflows for
                efficiency, consistency, and optimization.
              </li>
              <li>
                <strong>Intelligent Agents</strong> Combine email, Generative
                AI, RAG/vector databases, and Human-in-the-Loop safeguards to
                automate menial business tasks (data entry, document generation,
                status updates/alerts, etc.), drive workflows, and identify
                risks.
              </li>
              <li>
                <strong>Custom Document Generation</strong> Replace rigid
                document templates with attractive, customized, flexible emails
                and PDFs tailored to your business and workflows.
              </li>
              <li>
                <strong>Manufacturing and Supply Chain</strong> Expertise in
                aerospace procurement and manufacturing business administration.
                Integrate with ERPs, E-Commerce Punchout, CAD
                visualization/analysis, and more. Automate Requisition, RFQ,
                RFP, PO, Job Traveler, Invoice, Shipping, and other processes.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">
              <AiOutlineDeploymentUnit />
              Cloud Architecture
            </div>
            <ul className="card-list">
              <li>
                <strong>Compliance</strong> Design and deploy cloud
                architectures adhering to CMMC, SOC 2, GDPR, and other
                compliance requirements.
              </li>
              <li>
                <strong>Enterprise-Scale</strong> Deploy highly available and
                scalable services spanning across multiple regions and domains.
              </li>
              <li>
                <strong>Microservices Platforms</strong> Architect and implement
                microservices platforms to scale and empower dev teams, from
                developer experience to infrastructure deployment.
              </li>
              <li>
                <strong>Architecture</strong> Architect solutions across
                Kubernetes, cloud-native, and web apps. Implement fault-tolerant
                integrations with low-availability systems, scientific
                computing, and other niche systems.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-title">
              <LiaBrainSolid />
              Startup Engineering Leadership
            </div>
            <ul className="card-list">
              <li>
                <strong>Rapid Prototyping</strong> Leverage AI copilots, static
                analysis, off-the-shelf libraries, and other tools to solve
                business problems quickly and introduce user feedback earlier in
                the software development lifecycle.
              </li>
              <li>
                <strong>Startup Technical Strategy</strong> Define and implement
                the technical strategy for startups, including architecture,
                infrastructure, development experience, and feature
                prioritization.
              </li>
              <li>
                <strong>Team Leadership</strong> Lead teams of 10+ engineers,
                including hiring, onboarding, and mentoring. Hands-on leadership
                through code review, pair programming, and direct contribution
                to ensure results.
              </li>
              <li>
                <strong>Product Requirement Negotiation</strong> Translate
                problems from stakeholders into deliverable solutions,
                optimizing for cost, time, and quality.
              </li>
              <li>
                <strong>Project Management</strong> Leverage agile concepts to
                drive product development without dogmatic process overhead.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <footer className="bg-black text-xs">
      <div className="container mx-auto flex flex-row justify-between items-start gap-x-8 px-12 py-8">
        <div className="opacity-70">
          &copy; {new Date().getFullYear()} Christopher Kuech.
          <wbr /> All rights reserved.
        </div>
        <div className="flex flex-row flex-wrap gap-y-1.5 justify-end opacity-70">
          <a
            aria-label="Email"
            title="Email"
            href="mailto:chris@kuech.dev"
            target="_blank"
          >
            <AiOutlineMail />
            <span>chris@kuech.dev</span>
          </a>
          <a
            aria-label="Calendar"
            title="Book a Meeting"
            href="https://cal.com/chriskuech"
            target="_blank"
          >
            <AiOutlineCalendar />
            <span>Meet</span>
          </a>
          <a
            aria-label="Resume"
            title="Resume"
            href="/assets/Chris.Kuech.Resume.2024.docx"
            target="_blank"
          >
            <AiOutlineFileWord />
            <span>Resume</span>
          </a>
          <a aria-label="Location" title="Location">
            <AiOutlineEnvironment />
            <span>Seattle, WA</span>
          </a>
          <a
            aria-label="LinkedIn"
            title="LinkedIn"
            href="https://www.linkedin.com/in/chriskuech"
            target="_blank"
          >
            <AiOutlineLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            aria-label="GitHub"
            title="GitHub"
            href="https://github.com/chriskuech"
          >
            <AiOutlineGithub />
            <span>GitHub</span>
          </a>
          <a
            aria-label="Stack Overflow"
            title="Stack Overflow"
            href="https://stackoverflow.com/users/1470887/twinlakes"
          >
            <LiaStackOverflow />
            <span>Stack Overflow</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
);
