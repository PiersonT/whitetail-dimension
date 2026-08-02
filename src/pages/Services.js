import React from 'react';
import { Link } from 'react-router-dom';
import foodPlot from '../images/services/food-plot.jpeg';
import treeStand from '../images/services/tree-stand.jpeg';
import treeClearing from '../images/services/tree-clearing.jpeg';
import trailClearing from '../images/services/trail-clearing.jpeg';
import consultation from '../images/services/consultation.jpeg';

function Services() {
  return (
    <div>

      {/* PAGE HERO */}
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Professional land preparation services for whitetail deer hunting — statewide across Missouri.</p>
      </section>

      {/* SERVICES GRID */}
      <section className="page-section">
        <div className="services-grid-inner">
          <div className="service-card">
            <img src={foodPlot} alt="Food Plot Planting" className="card-img"/>
            <h3>Food Plot Planting</h3>
            <p>We design and plant strategic food plots using the right crops for your land and region. Food plots are the foundation of any productive whitetail property — drawing deer in and keeping them there throughout the season.</p>
          </div>
          <div className="service-card">
            <img src={treeStand} alt="Tree Stand & Blind Setup" className="card-img"/>
            <h3>Tree Stand & Blind Setup</h3>
            <p>Placement is everything. We scout your property and position stands and blinds in locations that maximize your chances — accounting for wind, deer movement, and shooting lanes.</p>
          </div>
          <div className="service-card">
            <img src={treeClearing} alt="Tree Clearing" className="card-img"/>
            <h3>Tree Clearing</h3>
            <p>We clear trees and brush to open up land for food plot creation. Whether you need a small plot or a large open area, we handle the clearing work so your land can reach its full potential.</p>
          </div>
          <div className="service-card">
            <img src={trailClearing} alt="Trail Creation" className="card-img"/>
            <h3>Trail Creation</h3>
            <p>Deer follow paths of least resistance. We design and cut trail systems that funnel deer movement through strategic corridors — putting them right where you want them during hunting season.</p>
          </div>
          <div className="service-card">
            <img src={consultation} alt="Land Consultation" className="card-img"/>
            <h3>Land Consultation</h3>
            <p>We come out to your property, walk the land with you, and put together a custom plan of action — then stay in contact throughout the entire process to guide you every step of the way.</p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="dark-section">
        <div className="dark-section-inner" style={{textAlign: 'center'}}>
          <h2>Service Area</h2>
          <p style={{fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0', lineHeight: '1.8'}}>
            We offer land preparation services statewide across Missouri. Whether your property is near Sweet Springs or anywhere else in the state, we will come to you and get your land ready for an exceptional hunting season.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="page-section">
        <div className="terms-inner">
          <h2>Why Choose Whitetail Dimension?</h2>
          <div className="terms-grid">
            <div className="term-item">
              <h3>🦌 40 Years Experience</h3>
              <p>Our founder has been a hunter and woodsman since childhood — that knowledge goes into every property we prep.</p>
            </div>
            <div className="term-item">
              <h3>📍 Statewide Service</h3>
              <p>We travel across Missouri to bring our land prep expertise directly to your property.</p>
            </div>
            <div className="term-item">
              <h3>✅ Proven Results</h3>
              <p>Our own rental property is proof — strategic land prep produces trophy-class deer season after season.</p>
            </div>
            <div className="term-item">
              <h3>🤝 Custom Approach</h3>
              <p>Every property is different. We assess your land and build a plan that fits your terrain, goals, and budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-bar">
        <div className="contact-inner">
          <h2>Ready to Transform Your Land?</h2>
          <div className="btns">
            <Link to="/contact" className="btn btn-gold">Get In Touch</Link>
            <a href="tel:6608150155" className="btn btn-outline">Call 660-815-0155</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Services;