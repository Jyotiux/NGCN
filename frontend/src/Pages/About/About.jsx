import React from "react";
import { Link } from 'react-router-dom';
import "./About.css";

export default function About() {
  return (
    <div className="ngcn-about-root">
      <div className="title">
        <div>
          <h1>About NGCN</h1>
        </div>
        <div>
          <center>
            <p>
              NGCN is a research group focused on advancing the state-of-the-art
              in computing and networking technologies. Our work spans a wide
              range of areas, from fundamental theoretical research to practical
              system design and implementation. We are committed to pushing the
              boundaries of what is possible and creating innovative solutions
              to real-world problems.
            </p>
          </center>
        </div>
      </div>

      <section className="about-founders">
        <div className="founder-card">
          <div className="founder-photo">
            <img src="Prof_Desikan_pic.svg" alt="Dr. K. E. Srinivasa Desikan" />
          </div>
          <div className="founder-info">
            <h3>Dr. K. E. Srinivasa Desikan</h3>
            <p className="role">Founder</p>
            <div className="founder-msg">
              <p>
                Dr. Kaniyambakkam Elayavilli Srinivasa Desikan, currently
                working as an Assistant Professor at IIITDM Kurnool, leads the
                Next Gen Computing and Networking (NGCN) Group. The team focuses
                on emerging research areas such as Artificial Intelligence, IoT,
                Networks, and other advanced computing technologies.
              </p>
              <Link to="/about" className="know-more-btn"><button>Know More</button></Link>
            </div>
          </div>
        </div>

        {/* You can duplicate founder-card for co-founders / leads */}
        {/* <div className="founder-card reverse">
          <div className="founder-info">
            <h3>Research & Technical Leads</h3>
            <p className="role">Faculty | PhD | Research Students</p>
            <div className="founder-msg">
              <p>
                Our team includes faculty members and students working on ML for
                systems, edge computing, secure networking, and data-efficient
                learning. We collaborate with industry partners and other
                institutions for interdisciplinary projects.
              </p>
            </div>
          </div>
          <div className="founder-photo">
            <img src="/Images/team-placeholder.png" alt="NGCN team" />
          </div>
        </div> */}
      </section>

      <section className="about-story">
        <h3>Our Story</h3>
        <p>
          At Next Gen Computing and Networking (NGCN), we are driven by a simple
          yet powerful vision — to push the boundaries of technology and create
          solutions that matter. Our journey began with a passion for exploring
          the frontiers of computing and networking, blending rigorous research
          with practical innovation.
        </p>
        <p>
          Led by Dr. K. E. Srinivasa Desikan, a monk and researcher, NGCN
          thrives on the harmony of knowledge, creativity, and collaboration. We
          work at the intersection of theory and application, advancing ideas
          that not only deepen scientific understanding but also address
          real-world challenges.
        </p>
        <p>
          At NGCN, we believe innovation is best achieved together. By fostering
          a collaborative environment where curiosity meets excellence, we aim
          to redefine what’s possible in computing and networking — shaping
          technologies that empower communities, industries, and humanity at
          large.
        </p>
      </section>

      <section className="about-quality">
        <h3>What we focus on</h3>
        <div className="qualities">
          <div className="quality">
            <div className="emoji">🧭</div>
            <h4>Research Impact</h4>
            <p className="quality-text">
              Publishable, reproducible research with clear real-world
              applications.
            </p>
          </div>

          <div className="quality">
            <div className="emoji">🛠️</div>
            <h4>Systems & Tools</h4>
            <p className="quality-text">
              End-to-end system design — from prototypes to benchmarks and
              deployments.
            </p>
          </div>

          <div className="quality">
            <div className="emoji">🤝</div>
            <h4>Collaboration</h4>
            <p className="quality-text">
              Industry partnerships, multi-institution projects, and student
              mentoring.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
