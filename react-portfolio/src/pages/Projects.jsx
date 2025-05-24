/* 
  File: Projects.jsx
  Student: Dastan
  StudentID: 301454423
  Date: 2024-05-24
*/
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <h2>Highlighted Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <img src="/51IfiEqitAL.png" alt="Weather App" className="project-img" />
          <h3>Weather App</h3>
          <p>
            <strong>Role:</strong> Frontend Developer<br />
            <strong>Outcome:</strong> Built a responsive weather dashboard with React, using real-time API data to deliver accurate local weather information.
          </p>
        </div>
        <div className="project-card">
          <img src="/5-best-free-ecommerce-flatform.png" alt="E-commerce Platform" className="project-img" />
          <h3>E-commerce Platform</h3>
          <p>
            <strong>Role:</strong> Full Stack Developer<br />
            <strong>Outcome:</strong> Developed a full-featured online store with user authentication, product listings, and secure payments using MERN stack.
          </p>
        </div>
        <div className="project-card">
          <img src="/Personal-Portfolio-website-templates.png" alt="Portfolio Website" className="project-img" />
          <h3>Personal Portfolio</h3>
          <p>
            <strong>Role:</strong> Designer & Developer<br />
            <strong>Outcome:</strong> Created this responsive React portfolio website to showcase my skills, projects, and contact information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;