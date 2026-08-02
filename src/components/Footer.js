import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/rental">Land Rental</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <p><strong>Phone:</strong> 660-815-0155</p>
          <p><strong>Email:</strong> whitetaildimensionllc@gmail.com</p>
          <p><strong>Location:</strong> Sweet Springs, MO</p>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <p><a href="https://www.facebook.com/WhitetailDimension" target="_blank" rel="noreferrer">Facebook — Whitetail Dimension</a></p>
          <p><a href="mailto:whitetaildimensionllc@gmail.com">Send Us an Email</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Whitetail Dimension LLC. All rights reserved. | Proudly serving hunters across Missouri.</p>
      </div>
    </footer>
  );
}

export default Footer;