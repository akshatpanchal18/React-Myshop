import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <Wraper>
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Contact Information</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-company">
          <h3>Your Company Name</h3>
          <p>123 Main St, Anytown, ST 12345</p>
          <p>&copy; {new Date().getFullYear()} Mystore. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
    </Wraper>
  );
};
const Wraper=styled.section`
.footer {
  background-color: #222; /* Darker background color for better contrast */
  color: white; /* Text color */
  padding: 40px 0; /* Increased padding for more space */
  text-align: center; /* Center align text */
}

.footer-content {
  display: flex;
  justify-content: space-around; /* Space between sections */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  max-width: 1200px; /* Max width for the content */
  margin: 0 auto; /* Center the content */
  padding: 0 20px; /* Padding for inner spacing */
}

.footer-links,
.footer-info,
.footer-company {
  flex: 1; /* Allow equal space distribution */
  min-width: 200px; /* Minimum width for responsiveness */
  margin: 10px; /* Space between sections */
}

.footer-links ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
}

.footer-links li {
  margin: 10px 0; /* Space between links */
}

.footer-links a {
  color: #66b3ff; /* Lighter link color for better visibility */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s; /* Transition effect for hover */
}

.footer-links a:hover {
  color: #007bff; /* Change color on hover */
}

.footer-bottom {
  margin-top: 20px; /* Space above the copyright */
  font-size: 0.9rem; /* Smaller font size for copyright */
}

.footer-company h3 {
  margin-bottom: 10px; /* Space below the company name */
}

.footer-info p,
.footer-company p {
  margin: 5px 0; /* Space between paragraphs */
}

/* Social Media Section */
.footer-social {
  margin-top: 20px; /* Space above social icons */
}

.footer-social h3 {
  margin-bottom: 10px; /* Space below heading */
}

.social-icons {
  display: flex;
  justify-content: center; /* Center align the icons */
  gap: 15px; /* Space between icons */
}

.social-icons a {
  color: white; /* Icon color */
  font-size: 1.5rem; /* Size of the icons */
  transition: color 0.3s; /* Transition effect for hover */
}

.social-icons a:hover {
  color: #007bff; /* Change icon color on hover */
}


`
export default Footer;
