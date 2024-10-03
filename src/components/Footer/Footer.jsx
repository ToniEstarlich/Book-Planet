import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Make sure to import the corresponding CSS file

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        {/* Social Media Section */}
        <div className='footer-social'>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF /> Facebook
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className='footer-links'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="#!">Contact</a></li>
            <li><a href="#!">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Logo and Info Section */}
        <div className='footer-logo'>
          <h2>Planet Book</h2>
          <p>Your gateway to knowledge</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='footer-bottom'>
        <p>&copy; 2024 Planet Book. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
