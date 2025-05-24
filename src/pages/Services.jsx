/* 
  File: Services.jsx
  Student: Dastan
  StudentID: 301454423
  Date: 2024-05-24
*/
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      <h2>My Services</h2>
      <div className="services-list">
        <div className="service-item">
          <img src="/which-development-job-is-right-for-you.jpg" alt="Web Development" className="service-img" />
          <h4>Web Development</h4>
          <p>Building modern, responsive websites using the latest technologies.</p>
        </div>
        <div className="service-item">
          <img src="/unnamed.jpg" alt="Mobile Apps" className="service-img" />
          <h4>Mobile Apps</h4>
          <p>Designing and developing intuitive mobile applications for Android and iOS.</p>
        </div>
        <div className="service-item">
          <img src="/programmer-1653351_640_0_1200x768.avif" alt="Programming" className="service-img" />
          <h4>General Programming</h4>
          <p>Solving problems with efficient, maintainable code in Python, JavaScript, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;