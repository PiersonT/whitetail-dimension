import React from 'react';
import { Link } from 'react-router-dom';
import trophy from '../images/trophy.jpeg';
import heroImg from '../images/hero.jpeg';
import foodPlot from '../images/services/food-plot.jpeg';
import treeStand from '../images/services/tree-stand.jpeg';
import treeClearing from '../images/services/tree-clearing.jpeg';
import trailClearing from '../images/services/trail-clearing.jpeg';
import consultation from '../images/services/consultation.jpeg';

function Home() {
  return (
    <div>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(30,12,0,0.72), rgba(30,12,0,0.72)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1>Prime Land For Premium Hunting</h1>
        <p>Expert land preparation and seasonal hunting rental in central Missouri. Proven results with trophy-class whitetail deer.</p>
        <div className="btns">
          <Link to="/rental" className="btn btn-gold">Explore Rental Property</Link>
          <Link to="/services" className="btn btn-outline">View Our Services</Link>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="cards-section">
        <div className="cards">
          <div className="card">
            <img src={foodPlot} alt="Food Plot Planting" className="card-img"/>
            <h3>Food Plot Planting</h3>
            <p>Carefully selected and planted crops designed to attract and hold trophy-class deer year-round on your property.</p>
          </div>
          <div className="card">
            <img src={treeStand} alt="Tree Stand & Blind Setup" className="card-img"/>
            <h3>Tree Stand & Blind Setup</h3>
            <p>Strategic positioning and professional setup for maximum effectiveness and safety in the best vantage points.</p>
          </div>
          <div className="card">
            <img src={treeClearing} alt="Tree Clearing" className="card-img"/>
            <h3>Tree Clearing</h3>
            <p>We clear trees and brush to open up land for food plot creation and better deer movement across your property.</p>
          </div>
          <div className="card">
            <img src={trailClearing} alt="Trail Creation" className="card-img"/>
            <h3>Trail Creation</h3>
            <p>Designed deer corridors that guide movement naturally and increase your odds of success during hunting season.</p>
          </div>
          <div className="card">
            <img src={consultation} alt="Land Consultation" className="card-img"/>
            <h3>Land Consultation</h3>
            <p>We come to your property, assess the land, and build a custom plan of action — staying in contact throughout the entire process.</p>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-text">
            <h2>40 Years in the Woods</h2>
            <p>Our founder has been a dedicated hunter and woodsman since childhood. With deep knowledge of whitetail behavior and land management, every property we prepare is built for results.</p>
            <p>Strategic land preparation combined with proven techniques yields trophy-class deer and unforgettable hunts — season after season.</p>
            <Link to="/about" className="btn btn-gold">Learn More About Us</Link>
          </div>
         <div className="photo-box">
            <img src={trophy} alt="Trophy Results" style={{width: '100%', height: 'auto', borderRadius: '8px', border: '4px solid #c9a876'}}/>
          </div>
        </div>
      </section>

      {/* CONTACT BAR */}
      <section className="contact-bar">
        <div className="contact-inner">
          <h2>Ready to Get Started?</h2>
          <div className="contact-details">
            <span>📞 660-815-0155</span>
            <span>✉️ whitetaildimensionllc@gmail.com</span>
            <span>📍 Sweet Springs, MO</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;