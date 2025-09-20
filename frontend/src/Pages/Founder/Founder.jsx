import React from "react";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users } from "lucide-react";
import PublicationCard from "../../Components/PublicationCard/PublicationCard";
import "./Founder.css";

const keyPublicationsData = [
  {
    title:
      "Decoding the Interplay Between Latency, Reliability, Cost, and Energy While Provisioning Resources in Fog-Computing-Enabled IoT Networks.",
    author: "K. E. Srinivasa Desikan, Vĳeth J. Kotagi, & C. Siva Ram Murthy",
    conference: "IEEE Internet of Things Journal, 2023",
    doi: "https://doi.org/10.1109/JIOT.2022.3204944", // Example DOI link
  },
  {
    title:
      "A Novel Matching Theory-Based Data Offloading Framework for a Fog Network With Selfish and Rational Nodes.",
    author: "K. E. Srinivasa Desikan, Vĳeth J. Kotagi, & C. Siva Ram Murthy",
    conference: "IEEE Networking Letters, 2021",
    doi: "https://doi.org/10.1109/LNET.2021.3113303", // Example DOI link
  },
  {
    title:
      "Topology Control in Fog Computing Enabled IoT Networks for Smart Cities",
    author: "K. E. Srinivasa Desikan, Vĳeth J. Kotagi, & C. Siva Ram Murthy",
    conference: "Computer Networks, 2020",
    doi: "https://doi.org/10.1016/j.comnet.2020.107270", // Example DOI link
  },
];

const awardsData = [
  {
    title: "Huawei Fellowship for Excellence",
    year: "2022",
    description: "For research work done during the Ph.D. program.",
  },
  {
    title: "Star TA Award",
    year: "2018",
    description:
      "For valuable contribution as a teaching assistant in Foundations of Computer Systems Design course.",
  },
  {
    title: "Best Outgoing Student Award",
    year: "2008",
    description:
      "Bharatiya Vidya Bhavan's Sri Venkateswara Vidyalaya, Tirupati",
  },
];

const educationData = [
  {
    degree: "M.S - Ph.D Dual Degree in Computer Science and Engineering",
    university: "IIT Madras",
    year: "2015-2022",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Pondicherry Engineering College",
    year: "2010-2014",
  },
  {
    degree: "CBSE Class XII",
    university: "P.S Senior Secondary School, Chennai",
    year: "2010",
  },
  {
    degree: "CBSE Class X",
    university: "Bharatiya Vidya Bhavan's Sri Venkateswara Vidyalaya, Tirupati",
    year: "2008",
  },
];

const experienceData = [
  {
    title: "Founder & Principal Researcher",
    company: "Next Gen Computing and Networking (NGCN)",
    years: "2024 - Present",
    description:
      "Founded and leads NGCN research group, focusing on edge computing, IoT, and machine learning applications.",
  },
  {
    title: "Assistant Professor in CSE",
    company: "IIITDM Kurnool",
    years: "2022 - Present",
    description:
      "Subjects: OOP, Software Engineering, Game Theory, IOTs, Computer Architecture, DSA, Discrete Mathematics, Computer Networks",
  },
  {
    title: "Teaching Assistant, CSE",
    company: "IIT Madras",
    years: "2017 - 2021",
    description:
      "Subjects: Introduction to Programming, Foundations of Computer Systems Design, COA, Computer Networks, Advanced DSA",
  },
  {
    title: "Project Associate, CSE",
    company: "IIT Madras",
    years: "2015 - 2017",
    description:
      "Project: Investigating Capacity, Coverage, and Energy-efficiency in Heterogeneous Wireless Networks",
  },
];

const researchInterests = [
  "Edge Computing & IoT",
  "Federated Learning",
  "Distributed Systems",
  "Machine Learning",
  "Privacy & Security",
  "Quantum Computing",
  "Network Optimization",
  "Cloud-Edge Integration",
];

export default function Founder() {
  return (
    <div className="ngcn-founder-root">
      <section className="about-founders">
        <div className="founder-card">
          <div className="founder-photo">
            <img src="Prof_Desikan_pic.svg" alt="Dr. K. E. Srinivasa Desikan" />
          </div>
          <div className="founder-info">
            <h3>Dr. K. E. Srinivasa Desikan</h3>
            <p className="role">Founder & Principal Researcher, NGCN</p>
            <p className="role">Researcher, Educator, Innovator</p>
            <div className="founder-msg">
              <p>
                Dr. Kaniyambakkam Elayavilli Srinivasa Desikan, currently
                working as an Assistant Professor at IIITDM Kurnool, leads the
                Next Gen Computing and Networking (NGCN) Group. The team focuses
                on emerging research areas such as Artificial Intelligence, IoT,
                Networks, and other advanced computing technologies.
              </p>
              {/* <Link to="/about" className="know-more-btn"><button>Know More</button></Link> */}
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/srinivasa-desikan-kaniyambakkam-elayavilli-553449217/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:srinivasadesikan@iiitk.ac.in">
                <i className="fa-solid fa-envelope"></i>
              </a>
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

      <section className="Vision">
        <h3>Vision</h3>
        <p>
          To contribute meaningfully to the advancement of computer science
          through impactful research, student-centered teaching, and
          collaborative innovation.
        </p>
        <p>
          I envision building a nurturing and inclusive academic environment
          that inspires critical thinking, fosters interdisciplinary research,
          and equips students with both theoretical foundations and practical
          skills. My goal is to bridge the gap between academia and industry,
          solve real-world challenges using emerging technologies, and cultivate
          the next generation of ethical and socially responsible engineers and
          researchers.
        </p>
      </section>
      {/* ------------------------------------------------------------------------------ */}

      {/* --- Education and Experience Section --- */}
      <section className="education-experience">
        {/* Education Card */}
        <div className="ee-card">
          <div className="ee-header">
            {/* Using lucide-react*/}
            <BookOpen className="ee-icon" />
            <h3>Education</h3>
          </div>
          <div className="ee-list">
            {educationData.map((item, index) => (
              <div key={index} className="ee-item">
                <p className="ee-title">{item.degree}</p>
                <p className="ee-subtitle">{item.university}</p>
                <p className="ee-meta">
                  <span>{item.year}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience Card */}
        <div className="ee-card">
          <div className="ee-header">
            {/* Using lucide-react */}
            <Users className="ee-icon" />
            <h3>Professional Experience</h3>
          </div>
          <div className="ee-list">
            {experienceData.map((item, index) => (
              <div key={index} className="ee-item">
                <p className="ee-title">{item.title}</p>
                <p className="ee-subtitle">{item.company}</p>
                <p className="ee-meta">
                  <i className="fa-regular fa-calendar-days ee-calendar-icon"></i>{" "}
                  {/* Font Awesome calendar icon */}
                  <span>{item.years}</span>
                </p>
                <p className="ee-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------ */}
      <section className="awards-recognition">
        <div className="section-header">
          <h2>Awards and Achievements</h2>
          <p>
            Honors and achievements recognizing contributions to research and
            academia
          </p>
        </div>
        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-header">
                <Award className="award-icon" />
                <div className="award-title-year">
                  <h4 className="award-title">{award.title}</h4>
                  <span className="award-year">{award.year}</span>
                </div>
              </div>
              <p className="award-description">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------------------ */}
      <section className="interests">
        <h3>Research Interests</h3>
        <p>
          Areas of research focus and expertise spanning multiple domains of
          computing and networking.
        </p>
        <div className="research-badges">
          {researchInterests.map((interest, index) => (
            <span key={index} className="research-badge">
              {interest}
            </span>
          ))}
        </div>
      </section>
      {/* ------------------------------------------------------------------------------ */}
      <section className="key-publications">
        <div className="publication-header">
          <h2>Key Publications</h2>
          <p>A selection of recent and impactful research contributions.</p>
        </div>
        <div className="publications-list">
          {keyPublicationsData.map((pub, index) => (
            <PublicationCard
              key={index}
              title={pub.title}
              author={pub.author}
              conference={pub.conference}
              doi={pub.doi}
            />
          ))}
        <Link to="/publications" className="know-more-btn">
          <button>View All Publications</button>
        </Link>
        </div>
      </section>
    </div>
  );
}
