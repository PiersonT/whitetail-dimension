import React from 'react';
import { Link } from 'react-router-dom';
import us from '../images/us.jpeg';

function About() {
  return (
    <div>

      {/* PAGE HERO */}
      <section className="page-hero">
        <h1>About Whitetail Dimension</h1>
        <p>40 years in the woods — built on passion, experience, and results.</p>
      </section>

      {/* FOUNDER STORY */}
      <section className="page-section">
        <div className="about-inner">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Whitetail Dimension was built on a lifetime of hunting and land management experience. Our founder grew up in the woods of central Missouri, learning the land, the deer, and what it takes to consistently produce trophy-class whitetail.</p>
            <p>With over 40 years as a hunter and woodsman, he has developed a deep understanding of deer behavior, habitat management, and the strategic preparation that turns ordinary land into exceptional hunting ground.</p>
            <p>That knowledge is now available to you — whether you want us to prep your own property or rent our fully configured land for the season.</p>
          </div>
         <div className="photo-box">
            <img src={us} alt="Whitetail Dimension" style={{width: '100%', height: 'auto', borderRadius: '8px', border: '4px solid #c9a876'}}/>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="dark-section">
        <div className="dark-section-inner">
          <h2>What We Stand For</h2>
          <div className="included-grid">
            <div className="included-card">
              <div className="card-icon">🦌</div>
              <h3>Passion for the Hunt</h3>
              <p>Hunting isn't just a business for us — it's a way of life. That passion drives everything we do.</p>
            </div>
            <div className="included-card">
              <div className="card-icon">🌲</div>
              <h3>Respect for the Land</h3>
              <p>We manage land responsibly, working with nature to create sustainable, productive hunting environments.</p>
            </div>
            <div className="included-card">
              <div className="card-icon">✅</div>
              <h3>Proven Results</h3>
              <p>We don't just talk about results — our trophy wall and satisfied clients speak for themselves.</p>
            </div>
            <div className="included-card">
              <div className="card-icon">🤝</div>
              <h3>Personal Service</h3>
              <p>Every client gets personal attention. We assess your land and build a custom plan that fits your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="page-section">
        <div className="terms-inner">
          <h2>Our Experience</h2>
          <div className="terms-grid">
            <div className="term-item">
              <h3>🗓 40+ Years Hunting</h3>
              <p>A lifetime of experience in the Missouri woods — understanding deer behavior, habitat, and land management at the deepest level.</p>
            </div>
            <div className="term-item">
              <h3>📍 Based in Sweet Springs, MO</h3>
              <p>Rooted in central Missouri with a deep knowledge of the local terrain, deer population, and seasonal patterns.</p>
            </div>
            <div className="term-item">
              <h3>🦌 Trophy Track Record</h3>
              <p>Our own property has produced trophy-class whitetail deer consistently — proof that our methods work.</p>
            </div>
            <div className="term-item">
              <h3>🌎 Statewide Service</h3>
              <p>We bring our expertise to properties across Missouri — no matter where your land is located.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-bar">
        <div className="contact-inner">
          <h2>Let's Talk About Your Property</h2>
          <p>Reach out today for a free consultation.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-gold">Contact Us</Link>
            <a href="tel:6608150155" className="btn btn-outline">Call 660-815-0155</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;