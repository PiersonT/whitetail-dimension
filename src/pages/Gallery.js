
import React from 'react';
import land1 from '../images/land/land1.jpeg';
import land2 from '../images/land/land2.jpeg';
import land3 from '../images/land/land3.jpeg';
import land4 from '../images/land/land4.jpeg';
import foodPlot1 from '../images/land-transformations/foodplot1.jpeg';
import foodPlot2 from '../images/land-transformations/foodplot2.jpeg';
import trail1 from '../images/land-transformations/trail1.jpeg';
import trail2 from '../images/land-transformations/trail2.jpeg';
import treeStand1 from '../images/land-transformations/treestand1.jpeg';
import treeStand2 from '../images/land-transformations/treestand2.jpeg';
import trophy1 from '../images/trophy-results/trophy1.jpeg';
import trophy2 from '../images/trophy-results/trophy2.jpeg';
import trophy3 from '../images/trophy-results/trophy3.jpeg';
import trophy4 from '../images/trophy-results/trophy4.jpeg';
import trophy5 from '../images/trophy-results/trophy5.jpeg';
import trophy6 from '../images/trophy-results/trophy6.jpeg';
import trophy7 from '../images/trophy-results/trophy7.jpeg';
import trophy8 from '../images/trophy-results/trophy8.jpeg';

function Gallery() {
  return (
    <div>

      {/* PAGE HERO */}
      <section className="page-hero">
        <h1>Gallery</h1>
        <p>Trophy results and land transformations from Whitetail Dimension.</p>
      </section>

    {/* TROPHY PHOTOS */}
      <section className="page-section">
        <div className="gallery-inner">
          <h2>Trophy Results</h2>
          <p className="gallery-subtitle">These are the results of strategic land management — trophy-class whitetail deer season after season.</p>
          <div className="gallery-grid">
            <img src={trophy1} alt="Trophy 1" className="gallery-img"/>
            <img src={trophy2} alt="Trophy 2" className="gallery-img"/>
            <img src={trophy3} alt="Trophy 3" className="gallery-img"/>
            <img src={trophy4} alt="Trophy 4" className="gallery-img"/>
            <img src={trophy5} alt="Trophy 5" className="gallery-img"/>
            <img src={trophy6} alt="Trophy 6" className="gallery-img"/>
            <img src={trophy7} alt="Trophy 7" className="gallery-img"/>
            <img src={trophy8} alt="Trophy 8" className="gallery-img"/>
          </div>
        </div>
      </section> 

      {/* LAND TRANSFORMATIONS */}
      <section className="dark-section">
        <div className="dark-section-inner">
          <h2>Land Transformations</h2>
          <p className="gallery-subtitle" style={{color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '2rem'}}>See what strategic land prep looks like.</p>
          <div className="transformation-grid">
            <div className="transformation-card">
              <h4>Food Plots</h4>
              <div className="transformation-imgs">
                <img src={foodPlot1} alt="Food Plot 1" className="transformation-img"/>
                <img src={foodPlot2} alt="Food Plot 2" className="transformation-img"/>
              </div>
            </div>
            <div className="transformation-card">
              <h4>Trail Systems</h4>
              <div className="transformation-imgs">
                <img src={trail1} alt="Trail 1" className="transformation-img"/>
                <img src={trail2} alt="Trail 2" className="transformation-img"/>
              </div>
            </div>
            <div className="transformation-card">
              <h4>Tree Stand Setup</h4>
              <div className="transformation-imgs">
                <img src={treeStand1} alt="Tree Stand 1" className="transformation-img"/>
                <img src={treeStand2} alt="Tree Stand 2" className="transformation-img"/>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* PROPERTY SHOTS */}
      <section className="page-section">
        <div className="gallery-inner">
          <h2>The Property</h2>
          <p className="gallery-subtitle">A look at our premier rental property in central Missouri.</p>
          <div className="gallery-grid">
            <img src={land1} alt="Property 1" className="gallery-img"/>
            <img src={land2} alt="Property 2" className="gallery-img"/>
            <img src={land3} alt="Property 3" className="gallery-img"/>
            <img src={land4} alt="Property 4" className="gallery-img"/>
          </div>
        </div>
      </section> 

    </div>
  );
}

export default Gallery;