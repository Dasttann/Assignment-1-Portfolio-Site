/* 
  File: About.jsx
  Student: Dastan
  StudentID: 301454423
  Date: 2024-05-24
*/

import './About.css';

function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <img src="/HeadShot.jpg" alt="Dastan" className="profile-photo" />
      <div className="resume-link-row">
        <a
          className="resume-link"
          href="/resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
      </div>
      <div className="about-description">
        <p>
          Hi! I'm Dastan, an enthusiastic web developer with a passion for creating beautiful, functional, and user-friendly websites. I enjoy bringing ideas to life through code and design, and I'm always eager to learn new technologies.
        </p>
        <p>
          With a background in both design and programming, I love working on projects that make a difference and help people connect. I value teamwork, creativity, and continuous growth.
        </p>
        <p>
          Outside of coding, you'll find me exploring new tech trends, playing strategy games, or enjoying a good book. I'm excited to share my work with you—feel free to check out my projects and reach out if you'd like to collaborate!
        </p>
      </div>
    </div>
  );
}

export default About;


