import React from 'react';
import { Link } from 'react-router-dom';
import land from '../images/land.jpeg';
import foodPlot from '../images/services/food-plot.jpeg';
import treeStand from '../images/services/tree-stand.jpeg';
import trailClearing from '../images/services/trail-clearing.jpeg';
import trophy from '../images/2-trophy.jpeg';

function Rental() {
  return (
    <div>

      {/* PAGE HERO */}
      <section className="page-hero">
        <h1>Hunting Land Rental</h1>
        <p>A fully prepped, proven property in central Missouri — ready for your best season yet.</p>
      </section>

      {/* PROPERTY OVERVIEW */}
      <section className="page-section">
        <div className="section-inner">
          <div className="section-text">
            <h2>Our Premier Property</h2>
            <p>This property has been meticulously configured over years of dedicated land management. Strategic food plots, cleared shooting lanes, established trail systems, and perfectly positioned tree stands make this one of the most productive whitetail hunting properties in central Missouri.</p>
            <p>The results speak for themselves — this land consistently yields trophy-class whitetail deer every season.</p>
          </div>
         <div className="photo-box">
            <img src={land} alt="Rental Property" style={{width: '100%', height: 'auto', borderRadius: '8px', border: '4px solid #c9a876'}}/>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="dark-section">
        <div className="dark-section-inner">
          <h2>What's Included</h2>
          <div className="included-grid">
            <div className="included-card">
              <img src={foodPlot} alt="Food Plots" className="card-img"/>
              <h3>Food Plots</h3>
              <p>Strategically planted and maintained crops that attract and hold deer throughout the season.</p>
            </div>
            <div className="included-card">
              <img src={treeStand} alt="Tree Stands" className="card-img"/>
              <h3>Tree Stands</h3>
              <p>Multiple professionally positioned stands for optimal shot opportunities and wind advantage.</p>
            </div>
            <div className="included-card">
              <img src={trailClearing} alt="Trail Systems" className="card-img"/>
              <h3>Trail Systems</h3>
              <p>Established deer corridors designed to funnel movement through your shooting lanes.</p>
            </div>
            <div className="included-card">
              <img src={trophy} alt="Trophy Results" className="card-img"/>
              <h3>Trophy Results</h3>
              <p>This property has produced trophy-class whitetail deer consistently year after year.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RENTAL TERMS */}
      <section className="page-section">
        <div className="terms-inner">
          <h2>Rental Terms</h2>
          <div className="terms-grid">
            <div className="term-item">
              <h3>⏱ Flexible Duration</h3>
              <p>Rent for a weekend, a few weeks, or the entire season — we work around your schedule.</p>
            </div>
            <div className="term-item">
              <h3>👥 Group Friendly</h3>
              <p>Bring your hunting party — we accommodate groups of all sizes.</p>
            </div>
            <div className="term-item">
              <h3>📅 Seasonal Availability</h3>
              <p>Rental is available during Missouri's fall hunting season. Contact us early to secure your dates.</p>
            </div>
            <div className="term-item">
              <h3>💬 Custom Quotes</h3>
              <p>Every rental is priced based on duration and party size. Contact us for a personalized quote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-bar">
        <div className="contact-inner">
          <h2>Interested in Renting?</h2>
          <p>Contact us today to check availability and get a custom quote.</p>
          <div className="btns">
            <Link to="/contact" className="btn btn-gold">Get a Quote</Link>
            <a href="tel:6608150155" className="btn btn-outline">Call 660-815-0155</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Rental;