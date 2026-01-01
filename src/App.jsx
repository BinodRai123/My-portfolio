import React from "react";
import "./App.css";

const App = () => {
   return (
      <div className="portfolio-container">
         {/* Navigation */}
         <nav className="navbar">
            <div className="logo">DevPortfolio</div>
            <ul className="nav-links">
               <li>Projects</li>
               <li>Skills</li>
               <li>Certificates</li>
            </ul>
            <button className="contact-btn-nav">Contact Me</button>
         </nav>

         {/* Hero Section */}
         <header className="hero">
            <div className="hero-content">
               <span className="badge">AVAILABLE FOR WORK</span>
               <h1>
                  Hello, I'm <span className="highlight">Alex</span>,<br />
                  Full Stack Dev.
               </h1>
               <p>
                  Building scalable, high-performance web applications with modern technologies. Bridging the
                  gap between complex backend logic and sleek frontend design.
               </p>
               <div className="hero-btns">
                  <button className="primary-btn">View Projects →</button>
                  <button className="secondary-btn">Download CV</button>
               </div>
            </div>
            <div className="hero-image">
               <div className="hexagon-wrapper">
                  <img
                     src="https://i.pinimg.com/736x/fb/31/37/fb3137e1e851320d806809d0473f446d.jpg"
                     alt="Alex Profile"
                  />
               </div>
            </div>
         </header>

         {/* Stats Section */}
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

         {/* Tech Stack */}
         <section className="tech-stack">
            <h3>Tech Stack</h3>
            <p className="subtitle">Technologies I use to build seamless solutions</p>
            <div className="tech-grid">
               {["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"].map((tech) => (
                  <div key={tech} className="tech-card">
                     <div className="tech-icon-placeholder"></div>
                     <span>{tech}</span>
                  </div>
               ))}
            </div>
         </section>

         {/* Projects Section */}
         <section className="projects">
            <div className="section-header">
               <h2>Featured Projects</h2>
               <span className="view-all">View all Projects →</span>
            </div>
            <div className="project-grid">
               <ProjectCard title="FinTech Dashboard" tags={["React", "TypeScript", "Tailwind"]} />
               <ProjectCard title="AI Content Generator" tags={["Python", "OpenAI", "NextJS"]} />
               <ProjectCard title="NeonShop" tags={["Shopify", "Nodejs", "React"]} />
               <ProjectCard title="HealthTracker" tags={["React Native", "Firebase", "Redux"]} />
            </div>
         </section>

         <div className="portfolio-container">
            {/* ... Previous sections (Nav, Hero, Stats, Tech) remain same ... */}

            {/* Certificates Section - Refined */}
            <section className="certificates">
               <h3 className="section-title">Certificates & Achievements</h3>
               <div className="cert-grid">
                  <div className="cert-card">
                     <div className="cert-banner aws-bg">
                        <img
                           src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                           alt="AWS"
                           className="cert-icon"
                        />
                     </div>
                     <div className="cert-info">
                        <h4>AWS Certified Solutions Architect</h4>
                        <p>Issued Jan 2023</p>
                        <a href="#" className="verify-link">
                           Verify Credential ↗
                        </a>
                     </div>
                  </div>

                  <div className="cert-card">
                     <div className="cert-banner meta-bg">
                        <span className="cert-placeholder-text">Meta</span>
                     </div>
                     <div className="cert-info">
                        <h4>Meta Frontend Developer</h4>
                        <p>Issued Feb 2023</p>
                        <a href="#" className="verify-link">
                           Verify Credential ↗
                        </a>
                     </div>
                  </div>

                  <div className="cert-card">
                     <div className="cert-banner google-bg">
                        <span className="cert-placeholder-text">Google</span>
                     </div>
                     <div className="cert-info">
                        <h4>Google UX Design Professional</h4>
                        <p>Issued Mar 2023</p>
                        <a href="#" className="verify-link">
                           Verify Credential ↗
                        </a>
                     </div>
                  </div>

                  <div className="cert-card">
                     <div className="cert-banner docker-bg">
                        <span className="cert-placeholder-text">Docker</span>
                     </div>
                     <div className="cert-info">
                        <h4>Docker Certified Associate</h4>
                        <p>Issued Dec 2022</p>
                        <a href="#" className="verify-link">
                           Verify Credential ↗
                        </a>
                     </div>
                  </div>
               </div>
            </section>

            {/* Contact Section - Re-engineered for Stability */}
            <section className="contact-wrapper">
               <div className="contact-container">
                  <div className="contact-left">
                     <h2 className="contact-heading">
                        Let's Build Something <br />
                        <span className="highlight">Incredible</span>
                     </h2>
                     <p className="contact-desc">
                        Have a project in mind or want to discuss the latest tech trends? My inbox is always
                        open.
                     </p>

                     <div className="contact-details">
                        <div className="detail-item">
                           <span className="icon">✉️</span>
                           <div>
                              <p className="label">Email Me</p>
                              <p className="value">hello@alexdev.com</p>
                           </div>
                        </div>
                        <div className="detail-item">
                           <span className="icon">📍</span>
                           <div>
                              <p className="label">Location</p>
                              <p className="value">San Francisco, CA</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="contact-right">
                     <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                           <input type="text" placeholder="John Doe" required />
                           <input type="email" placeholder="john@example.com" required />
                        </div>
                        <input type="text" placeholder="Product Inquiry" />
                        <textarea placeholder="Tell me about your project" rows="5"></textarea>
                        <button type="submit" className="send-btn">
                           <span>➤</span> Send Message
                        </button>
                     </form>
                  </div>
               </div>
            </section>

            <footer className="footer-bottom">
               <p>© 2024 Alex Developer. All rights reserved.</p>
            </footer>
         </div>
      </div>
   );
};

const ProjectCard = ({ title, tags }) => (
   <div className="project-card">
      <div className="project-img"></div>
      <div className="project-details">
         <h4>{title}</h4>
         <div className="tags">
            {tags.map((tag) => (
               <span key={tag}>{tag}</span>
            ))}
         </div>
         <div className="project-links">
            <button className="link-btn">Live Demo</button>
            <button className="link-btn outline">Source</button>
         </div>
      </div>
   </div>
);

export default App;
