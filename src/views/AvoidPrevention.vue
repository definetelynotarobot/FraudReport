<template>
  <main class="safety-container">
    <header class="safety-header">
      <h1>Travel Safety Guide: Recognizing and Avoiding Tourist Scams</h1>
      <p class="disclaimer">
        This information is provided for general educational purposes only and should not be considered as legal or security advice. Always consult local authorities or legal professionals for specific situations.
      </p>
    </header>

    <article class="safety-content">
      <p class="intro">
        While traveling can offer enriching experiences, it's important to stay informed about potential risks. 
        The following information represents commonly reported situations and general safety recommendations.
      </p>

      <section class="safety-section">
        <h2>Reported Common Situations to Be Aware Of</h2>
        <div class="card-grid">
          <div class="safety-card">
            <span class="icon">🏛️</span>
            <div class="card-content">
              <h3>Unauthorized Tour Services</h3>
              <p>Consider booking through licensed tourism operators or your accommodation. Research service providers thoroughly before making commitments.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">💰</span>
            <div class="card-content">
              <h3>Price Variations</h3>
              <p>Local prices may vary by location and season. Consider researching standard rates in your destination area for better price awareness.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">🏧</span>
            <div class="card-content">
              <h3>Financial Safety</h3>
              <p>Consider using ATMs located inside financial institutions during business hours. Many travelers find it helpful to notify their banks of travel plans.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">🏨</span>
            <div class="card-content">
              <h3>Accommodation Bookings</h3>
              <p>Review all terms and conditions before confirming reservations. Consider keeping copies of all booking confirmations and correspondence.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="safety-section">
        <h2>General Safety Awareness Tips</h2>
        <div class="card-grid">
          <div class="safety-card">
            <span class="icon">🤝</span>
            <div class="card-content">
              <h3>Social Interactions</h3>
              <p>Trust your judgment in social situations. You may choose to disengage from any interaction that makes you uncomfortable.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">📋</span>
            <div class="card-content">
              <h3>Evaluating Offers</h3>
              <p>Take time to review and understand any offers or agreements. Consider seeking additional information if needed.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">⏰</span>
            <div class="card-content">
              <h3>Decision Making</h3>
              <p>You have the right to take time to make decisions. Consider declining any situation where you feel rushed or pressured.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="safety-section">
        <h2>Preventive Measures to Consider</h2>
        <div class="card-grid">
          <div class="safety-card">
            <span class="icon">📱</span>
            <div class="card-content">
              <h3>Stay Connected</h3>
              <p>Consider sharing your itinerary with trusted contacts and maintaining regular communication during your travels.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">🔒</span>
            <div class="card-content">
              <h3>Personal Property</h3>
              <p>Consider using appropriate security measures for valuable items. Many travelers find travel insurance beneficial.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">📖</span>
            <div class="card-content">
              <h3>Research</h3>
              <p>Consider consulting official tourism websites and reputable travel resources for destination-specific information.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="safety-section">
        <h2>If You Encounter Concerning Situations</h2>
        <div class="card-grid">
          <div class="safety-card">
            <span class="icon">📞</span>
            <div class="card-content">
              <h3>Seeking Assistance</h3>
              <p>Contact local authorities or your country's nearest embassy if you require assistance. Keep emergency contact numbers readily available.</p>
            </div>
          </div>

          <div class="safety-card">
            <span class="icon">✉️</span>
            <div class="card-content">
              <h3>Reporting Options</h3>
              <p>Consider reporting incidents to relevant authorities. This may help inform other travelers and improve safety measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="share-section">
        <h2>Share Your Travel Insights</h2>
        <p>Your experiences can help inform other travelers. Consider sharing your travel insights through our feedback system.</p>
        <router-link to="/share-experience" class="share-button">Share Your Experience</router-link>
      </section>
    </article>

    <footer class="safety-footer">
      <p>Last updated: {{ currentDate }}</p>
      <p class="legal-notice">
        The information provided is for general informational purposes only and should not be relied upon as legal, security, or professional advice. 
        Specific situations may vary. Always exercise appropriate judgment and consult relevant authorities or professionals when needed.
      </p>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'TravelSafetyGuide',
  computed: {
    currentDate() {
      return new Date().toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.safety-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
  color: #333;
}

.safety-header {
  text-align: center;
  margin-bottom: 3rem;
}

.safety-header h1 {
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 1rem;
}

.disclaimer {
  color: #666;
  font-size: 0.9rem;
  max-width: 800px;
  margin: 1rem auto;
}

.intro {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #2d3748;
}

.safety-section {
  margin-bottom: 3rem;
}

.safety-section h2 {
  color: #2c5282;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.safety-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  display: flex;
  align-items: flex-start;
}

.safety-card:hover {
  transform: translateY(-2px);
}

.icon {
  font-size: 2rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.card-content h3 {
  color: #2d3748;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card-content p {
  color: #4a5568;
  line-height: 1.5;
  margin: 0;
}

.share-section {
  text-align: center;
  padding: 2rem;
  background: #f7fafc;
  border-radius: 12px;
  margin: 3rem 0;
}

.share-button {
  display: inline-block;
  background: #3182ce;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  margin-top: 1rem;
  transition: background 0.2s ease;
}

.share-button:hover {
  background: #2c5282;
}

.safety-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  font-size: 0.9rem;
  color: #666;
}

.legal-notice {
  max-width: 800px;
  margin: 1rem auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .safety-container {
    padding: 1rem;
  }

  .safety-header h1 {
    font-size: 2rem;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>