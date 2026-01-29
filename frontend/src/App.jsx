import React, { useState } from 'react';
import './App.css';

// Import assets
import logo from './assets/images/logo.svg'; 
import heroImage from './assets/images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // 1. This handles typing in the input boxes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // 2. This sends the data to your LIVE Python backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // UPDATED LINE: Now pointing to your Render Backend
      const response = await fetch('https://flipr-backend-j8qz.onrender.com/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Success! " + data.message);
        // Clear form after success
        setFormData({ name: '', email: '', phone: '' });
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to connect to server. Is the backend deployed?");
    }
  };

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Company Logo" className="logo-img" onError={(e) => {e.target.style.display='none';}} />
          <span style={{fontWeight:'bold', fontSize:'1.2rem', marginLeft:'10px'}}>FliprRealEstate</span>
        </div>
        <div className="nav-links">
          <button>Contact Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Home With Confidence</h1>
          <p>We connect you with the best properties and agents in the market. Get a free consultation today.</p>
          
          {/* Lead Gen Form */}
          <div className="form-container">
            <h3>Get a Free Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  placeholder="Full Name" 
                  required 
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  placeholder="Email Address" 
                  required 
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  placeholder="Phone Number" 
                  required 
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-btn">Request Call Back</button>
            </form>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Real Estate Consultation" />
        </div>
      </section>
    </div>
  );
}

export default App;