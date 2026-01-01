import React from "react";
import "./App.css";

const Navbar = () => (
   <nav className="navbar">
      <div className="logo">DevPortfolio</div>
      <div className="nav-links">
         <a href="#projects">Projects</a>
         <a href="#skills">Skills</a>
         <a href="#certificates">Certificates</a>
      </div>
      <button className="btn-primary contact-btn">Contact Me</button>
   </nav>
);

const Hero = () => (
   <section className="hero">
      <div className="hero-content">
         <span className="status-badge">● AVAILABLE FOR WORK</span>
         <h1>
            Hello, I'm <span className="highlight">Alex</span>,<br />
            Full Stack Dev.
         </h1>
         <p>
            Building scalable, high-performance web applications with modern technologies. Bridging the gap
            between complex backend logic and sleek frontend design.
         </p>
         <div className="hero-btns">
            <button className="btn-primary">View Projects →</button>
            <button className="btn-secondary">Download CV</button>
         </div>
      </div>
      <div className="hero-image">
         <div className="hexagon-wrapper">
            <img src="https://via.placeholder.com/300" alt="Alex" />
         </div>
      </div>
   </section>
);

const Stats = () => (
   <section className="stats">
      <div className="stat-item">
         <h2>50+</h2>
         <p>PROJECTS COMPLETED</p>
      </div>
      <div className="stat-item">
         <h2>98%</h2>
         <p>CLIENT SATISFACTION</p>
      </div>
      <div className="stat-item">
         <h2>5+</h2>
         <p>YEARS EXPERIENCE</p>
      </div>
   </section>
);

const TechStack = () => {
   const skills = [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "PostgreSQL", icon: "🐘" },
   ];
   return (
      <section className="tech-stack">
         <h3>Tech Stack</h3>
         <p>Technologies I use to build scalable solutions</p>
         <div className="skill-grid">
            {skills.map((skill) => (
               <div key={skill.name} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <p>{skill.name}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

const ProjectCard = ({ title, desc, tags, image }) => (
   <div className="project-card">
      <div className="project-img">
         <img src={image} alt={title} />
      </div>
      <div className="project-info">
         <h4>{title}</h4>
         <p>{desc}</p>
         <div className="tags">
            {tags.map((tag) => (
               <span key={tag}>{tag}</span>
            ))}
         </div>
         <div className="project-links">
            <button className="btn-outline">Live Demo</button>
            <button className="btn-outline">Source</button>
         </div>
      </div>
   </div>
);

const Certificates = () => {
   const certs = [
      {
         title: "AWS Solutions Architect",
         date: "Jan 2023",
         issuer: "AWS",
         color: "linear-gradient(135deg, #232f3e, #ff9900)",
      },
      {
         title: "Meta Frontend Developer",
         date: "Feb 2023",
         issuer: "Meta",
         color: "linear-gradient(135deg, #0668E1, #00f2fe)",
      },
      {
         title: "Google UX Professional",
         date: "Mar 2022",
         issuer: "Google",
         color: "linear-gradient(135deg, #4285F4, #34A853)",
      },
      {
         title: "Docker Certified Associate",
         date: "Dec 2022",
         issuer: "Docker",
         color: "linear-gradient(135deg, #2496ed, #1d6391)",
      },
   ];

   return (
      <section id="certificates" className="section-padding">
         <h3>Certificates & Achievements</h3>
         <div className="cert-grid">
            {certs.map((cert, index) => (
               <div key={index} className="cert-card">
                  <div className="cert-banner" style={{ background: cert.color }}>
                     <span>{cert.issuer}</span>
                  </div>
                  <div className="cert-info">
                     <h4>{cert.title}</h4>
                     <p>Issued: {cert.date}</p>
                     <a href="#" className="verify-link">
                        Verify Credential ↗
                     </a>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

const Contact = () => (
   <section id="contact" className="contact-section section-padding">
      <div className="contact-container">
         <div className="contact-info">
            <h2 className="contact-title">
               Let's Build Something <br />
               <span className="highlight">Incredible</span>
            </h2>
            <p>Have a project in mind or want to discuss the latest tech trends? My inbox is always open.</p>

            <div className="contact-methods">
               <div className="method">
                  <span className="icon">✉️</span>
                  <div>
                     <p className="label">Email Me</p>
                     <p>hello@alexdev.com</p>
                  </div>
               </div>
               <div className="method">
                  <span className="icon">📍</span>
                  <div>
                     <p className="label">Location</p>
                     <p>San Francisco, CA</p>
                  </div>
               </div>
            </div>
         </div>

         <form className="contact-form">
            <div className="form-row">
               <div className="input-group">
                  <label>Name</label>
                  <input type="text" placeholder="John Doe" />
               </div>
               <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" />
               </div>
            </div>
            <div className="input-group">
               <label>Subject</label>
               <input type="text" placeholder="Project Inquiry" />
            </div>
            <div className="input-group">
               <label>Message</label>
               <textarea rows="5" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="btn-primary full-width">
               Send Message →
            </button>
         </form>
      </div>
   </section>
);

const App = () => {
   return (
      <div className="portfolio-container">
         <Navbar />
         <main>
            <Hero />
            <Stats />
            <TechStack />
            <section id="projects" className="projects-section">
               <h3>Featured Projects</h3>
               <div className="project-grid">
                  <ProjectCard
                     title="FinTech Dashboard"
                     desc="Real-time analytics platform handling over 10k transactions per second."
                     tags={["React", "TypeScript", "Tailwind"]}
                     image="https://via.placeholder.com/400x250"
                  />
                  <ProjectCard
                     title="AI Content Generator"
                     desc="SaaS application leveraging OpenAI API to generate marketing copy."
                     tags={["Python", "FastAPI", "Next.js"]}
                     image="https://via.placeholder.com/400x250"
                  />
               </div>
            </section>

            <Certificates />
            <Contact />
         </main>
      </div>
   );
};

export default App;
