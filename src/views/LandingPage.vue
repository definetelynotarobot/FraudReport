<template>
  <div class="container">
    <div class="landing-page">
      <div class="content">
        <h1>Better safe than <span class="head-style-txt">sorry</span></h1>
        <p>
          Are you traveling soon? Stay informed about potential scam risks in various cities.
        </p>
        <router-link to="/scams">
          <button class="cta-button">Discover possible scams</button>
        </router-link>
      </div>
      <div class="hero">
        <img
  src="@/assets/hero/hero-img-4.webp" 
  alt="Infographic with Luggage"
  class="hero-img"
  loading="eager"
  fetchpriority="high"
/>
      </div>
    </div>

    <!-- About Us Section -->
    <section class="about-us" id="about">
      <div class="section-header">
        <h2>Who We Are</h2>
        <p>Empowering travelers with knowledge and protection</p>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h3>Protecting Your Journey</h3>
          <p>
            We're a dedicated team committed to helping travelers stay safe. 
            Our mission is to provide up-to-date, comprehensive information 
            about potential scams and risks in various destinations worldwide.
          </p>
          <div class="about-stats">
            <div class="stat-item">
          <div class="stat-icon">🌍</div>
          <h3>50+</h3>
          <p>Cities Covered</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">⚠️</div>
          <h3>100+</h3>
          <p>Scams Documented</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">👥</div>
          <h3>5K+</h3>
          <p>Travelers Protected</p>
        </div>
        <div class="stat-item">
          <div class="stat-icon">📱</div>
          <h3>24/7</h3>
          <p>Available in any device</p>
        </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Feature Highlights Section -->
    <section class="features-section">
      <h2>Why Choose Our Platform?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>Real-Time Updates</h3>
          <p>Get the latest information about emerging scams and threats in various destinations.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Mobile Friendly</h3>
          <p>Access critical information on-the-go from any device, anywhere in the world.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Community Verified</h3>
          <p>Real experiences shared by real travelers, verified by our expert team.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔔</div>
          <h3>Alert System</h3>
          <p>Receive insights about new/existing scams in your planned destination.</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Select Destination</h3>
          <p>Choose your travel destination from our comprehensive database.</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Review Risks</h3>
          <p>Get detailed information about known scams and safety concerns.</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Stay Informed</h3>
          <p>Receive updates and insights about new threats in your chosen location.</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>
.landing-page {
  display: flex;
  align-items: center; /* Center items vertically */
  height: 100vh;
  background-color: white; /* Soft Gray */
  padding: 20px; /* Responsive padding for smaller screens */
}

.content {
  flex: 1; /* Take up remaining space */
  text-align: left; /* Align text to the left */
}
.head-style-txt{
  color:#dc143c;
  background-color: white;
  font-weight:bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.hero {
  flex: 1; /* Take up remaining space */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */

}
.hero-img {
  max-width: 100%; /* Make sure the image is responsive */
  height: auto; /* Maintain aspect ratio */
  transition: opacity 1s ease-in-out; /* Smooth transition */
}
h1 {
  font-family: 'Montserrat', sans-serif; /* Restore original font */
  font-size: 4em;
  margin-bottom: 0.5em;
  color: #1e3a8a; /* Deep Blue */
}

p {
  font-family: 'Montserrat', sans-serif; /* Restore original font */
  font-size: 1.3em;
  font-weight: 500;
  margin-bottom: 2em;
  color: #374151; /* Dark Gray for text */
}

.cta-button {
  font-family: "Montserrat";
  font-weight:500;
  padding: 12px 24px;
  font-size: 1.2em;
  color: #fff;
  background-color: #3b82f6; /* Light Blue */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1e3a8a; /* Deep Blue on hover */
}

/* Responsiveness */
@media (max-width: 768px) {
  .landing-page {
    flex-direction: column; /* Stack vertically on smaller screens */
    height: auto; /* Allow height to adjust */
  }

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.1em;
    margin-bottom:10px;
  }

  .cta-button {
    font-size: 1em;
    padding: 10px 20px;
    margin-bottom:10px;
  }
 


  .hero img {
    max-width: 80%; /* Limit size on smaller screens */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8em;
  }

  p {
    font-size: 1em;
  }
  .content{
    margin-bottom:10px;
  }

  .cta-button {
    font-size: 0.9em;
    padding: 8px 16px;
  }
}
/* About Us Section Base Styles */
.about-us {
  padding: 3rem 1rem;
  background-color: #f8fafc;
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-family: 'Montserrat', sans-serif;
  color: #1e3a8a;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 0.5rem;
}

.section-header p {
  color: #374151;
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 1.5rem;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-text {
  margin-bottom: 2rem;
}

.about-text h3 {
  color: #1e3a8a;
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  margin-bottom: 1rem;
}

.about-text p {
  color: #374151;
  line-height: 1.6;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  margin-bottom: 2rem;
}

/* Stats Grid Layout */
.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.stat-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-icon {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: 0.5rem;
}

.stat-item h3 {
  color: #1e3a8a;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin: 0.5rem 0;
}

.stat-item p {
  color: #374151;
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  margin: 0;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .about-us {
    padding: 2rem 1rem;
  }

  .about-content {
    padding: 0 0.5rem;
  }

  .about-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .about-stats {
    grid-template-columns: 1fr;
  }

  .stat-item {
    padding: 1rem;
  }
}
/* Quick Stats Section */

.stat-item {
  text-align: center;
  flex: 1;
  min-width: 200px;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-item h3 {
  color: #1e3a8a;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

/* Features Section */
.features-section {
  padding: 4rem 2rem;
  background-color: white;
}

.features-section h2 {
  text-align: center;
  color: #1e3a8a;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* How It Works Section */
.how-it-works {
  background-color: #f8fafc;
  padding: 4rem 2rem;
  text-align: center;
}

.how-it-works h2 {
  color: #1e3a8a;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.steps-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.step {
  flex: 1;
  min-width: 250px;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  position: relative;
}

.step-number {
  width: 40px;
  height: 40px;
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .steps-container {
    flex-direction: column;
  }
}
</style>