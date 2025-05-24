/* 
  File: Home.jsx
  Student: Dastan
  StudentID: 301454423
  Date: 2024-05-24
*/
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi! I'm Dastan, a passionate web developer.<br />
        Explore my projects, skills, and contact info using the menu above.
      </p>
      <button className="about-btn" onClick={() => window.location.href='/about'}>
        Learn More About Me
      </button>
    </div>
  );
}

export default Home;