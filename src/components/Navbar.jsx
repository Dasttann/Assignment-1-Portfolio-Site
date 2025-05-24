/* 
  File: Navbar.jsx
  Student: Dastan
  StudentID: 301454423
  Date: 2024-05-24
*/
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo-hex">
  <span className="logo-initials">D</span></div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

