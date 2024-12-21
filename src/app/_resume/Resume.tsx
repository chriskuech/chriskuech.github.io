import {
  AiOutlineCalendar,
  AiOutlineDeploymentUnit,
  AiOutlineDownload,
  AiOutlineEnvironment,
  AiOutlineFileWord,
  AiOutlineFire,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineRight,
  AiOutlineRise,
} from "react-icons/ai";
import { LiaBrainSolid, LiaStackOverflow } from "react-icons/lia";
import { RxCube } from "react-icons/rx";
import Image from "next/image";
import "./Resume.css";

export const Resume = () => (
  <div className="container">
    <header>
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

    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <figure>
        <Image
          title="Chris Kuech at TeamLab Planets"
          src="/assets/me-yellow-square.jpg"
          width={200}
          height={200}
          alt="Chris Kuech at TeamLab Planets"
        />
        <figcaption>
          @
          <a href="https://www.teamlab.art/w/typhoon_balls/" target="_blank">
            TeamLab Planets
          </a>
        </figcaption>
      </figure>
      <section className="intro">
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

    <section style={{ width: "max-content", margin: "0 auto" }}>
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
          <div>manufacturing, supply chain, construction, and agriculture</div>
        </li>
        <li>
          Complex problems
          <div>
            simulations, <mark>business process automation</mark>, AI, system{" "}
            design, broad scope
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
          <div>art installations, three.js, audio synthesis, ambient music</div>
        </li>
      </ul>
    </section>

    <section style={{ width: "max-content", margin: "0 auto" }}>
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

    <section style={{ display: "none" }}>
      <div className="label">Projects</div>

      <p>Chris has experience shipping the following features&mdash;</p>

      <div className="card-group">
        <div className="card">
          <div className="card-title">
            <AiOutlineDeploymentUnit />
            High-Compliance Infrastructure and Architecture
          </div>
          <ul className="card-list">
            <li>ITAR, CMMC, ISO-8100</li>
            <li>Microservices Platforms</li>
            <li>Microservice Architectures</li>
            <li>High-Availability Systems</li>
            <li>High-Scale Systems</li>
            <li>Multi-Region, Multi-Domain Systems</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-title">
            <LiaBrainSolid />
            Intelligent Agents
          </div>
          <ul className="card-list">
            <li>
              Process inbound emails and PDFs with AI to automate data entry and
              drive workflows
            </li>
            <li>
              Implement Human-in-the-Loop safeguards to leverage AI without risk
            </li>
            <li>Send automated updates and alerts from the system</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-title">
            <AiOutlineRise />
            Workflow Optimization
          </div>
          <ul className="card-list">
            <li>Audit workflows for efficiency and optimization</li>
            <li>
              Integrate with custom systems, ERPs, 3rd Party APIs, Low-Code
              Platforms (AirTable, Google Sheets, etc.)
            </li>
            <li>
              Embed and tie in e-commerce website purchasing directly into your
              workflow, supported by McMaster-Carr, Amazon, Newegg, and other
              major e-commerce providers
            </li>
            <li>Generate attractive customized emails and PDFs, including</li>
            <li>
              Automate Requisition, RFQ, RFP, PO, Job Traveler, Invoice,
              Shipping, and other processes.
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-title">
            <RxCube />
            Visualize and Analyze CAD models
          </div>
          <ul className="card-list">
            <li>Extract Geometric Dimensioning and Tolerancing from PDFs</li>
            <li>
              Partner with Computational Geometers to integrate feature
              detection, manufacturability analysis, cost estimation, material
              stock size, part similarity search, etc.
            </li>
            <li>
              Enable visualizing STEP and other manufacturing design files as
              thumbnails and in an interactive viewer within existing workflows,
              while adhering to CMMC and other requirements.
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card-title">
            <AiOutlineProject />
            Project Management
          </div>
          <ul className="card-list">
            <li>Leading teams</li>
          </ul>
        </div>
        <div className="card">
          <div className="card-title">
            <AiOutlineFire />
            Rapid Development
          </div>
          <ul className="card-list">
            <li>Leading teams</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
