/* 
  File: Contact.jsx
  Student: Dastan
  StudentID: 301454423
  Date: 2024-05-24
*/
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Email: abarzkar@my.centennialcollege.ca</p>
        <p>Phone: 647-5xx-xxxx</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Contact Number" />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;