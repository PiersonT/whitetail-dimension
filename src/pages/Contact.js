import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Land Rental',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>

      {/* PAGE HERO */}
      <section className="page-hero">
        <h1>Contact Us</h1>
        <p>Ready to get started? Reach out and we'll get back to you as soon as possible.</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="page-section">
        <div className="contact-page-inner">

          {/* CONTACT INFO */}
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We'd love to hear about your property or answer any questions about our rental. Give us a call, send an email, or fill out the form and we'll be in touch.</p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <span className="contact-info-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:6608150155">660-815-0155</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:whitetaildimensionllc@gmail.com">whitetaildimensionllc@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Sweet Springs, MO</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📘</span>
                <div>
                  <h4>Facebook</h4>
                  <a href="https://www.facebook.com/WhitetailDimension" target="_blank" rel="noreferrer">Whitetail Dimension</a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <h3>✅ Message Sent!</h3>
                <p>Thanks for reaching out! We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label>I'm Interested In</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option>Land Rental</option>
                    <option>Land Consultation</option>
                    <option>Food Plot Planting</option>
                    <option>Tree Stand & Blind Setup</option>
                    <option>Tree Clearing</option>
                    <option>Trail Creation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property or what you're looking for..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-gold" style={{width: '100%', fontSize: '1.1rem', padding: '1rem'}}>
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;