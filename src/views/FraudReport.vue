<template>
  <div class="fraud-report">
    <b-card
      title="Report a Fraud Incident"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Fraud Reporting Image"
      img-top
      style="margin: auto; padding: 2rem"
      class="mb-4"
    >
      <p class="disclaimer">
        Disclaimer: Please fill out the form to report possible
        scam incidents. Avoid providing any personal opinions or unverified
        information. We will also scan through them and update our database according to the verified information.
      </p>

      <!-- Internal Links Section -->
      <div class="internal-links">
  <h5 class="resources-title">Essential Safety Resources</h5>
  <div class="links-container">
    <router-link to="/scams" class="internal-link">
      <span class="link-icon">⚠️</span>
      <div class="link-content">
        <div class="link-text">Common Travel Scams</div>
        <div class="link-subtext">Recognize frequent fraud patterns</div>
      </div>
    </router-link>

    <router-link to="/Avoid" class="internal-link">
      <span class="link-icon">🛡️</span>
      <div class="link-content">
        <div class="link-text">Scam Prevention Guide</div>
        <div class="link-subtext">Proactive protection strategies</div>
      </div>
    </router-link>

    <router-link to="/Blog" class="internal-link">
      <span class="link-icon">📚</span>
      <div class="link-content">
        <div class="link-text">Latest Safety Updates</div>
        <div class="link-subtext">Recent reports & advisories</div>
      </div>
    </router-link>

    <router-link to="/Share-Experience" class="internal-link">
      <span class="link-icon">💡</span>
      <div class="link-content">
        <div class="link-text">Share Your Expertise</div>
        <div class="link-subtext">Contribute to community safety</div>
      </div>
    </router-link>
  </div>
</div>

      <div class="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdRLFoGfDsSLrUNktxsyUPqSq3-X_hYh2mVJaWfutDAQcj-gg/viewform?embedded=true"
          width="100%"
          height="1002"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          loading...
        </iframe>
      </div>
    </b-card>
  </div>
</template>
<style scoped>
.disclaimer {
  font-size: 0.95rem;
  color: #6b7280;
  margin: 1.5rem auto 2rem;
  max-width: 800px;
  text-align: center; /* Ensures centering */
}

.internal-links {
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f0f7ff 100%);
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}

.resources-title {
  color: #1e3a8a;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.resources-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: #2563eb;
}

.links-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.internal-link {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: #1e3a8a;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
}

.internal-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.1);
  border-color: #2563eb;
}

.link-icon {
  font-size: 1.75rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.link-content {
  display: flex;
  flex-direction: column;
}

.link-text {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.link-subtext {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .internal-links {
    padding: 1.5rem;
  }
  
  .internal-link {
    padding: 1rem;
  }
  
  .link-icon {
    font-size: 1.5rem;
  }
}
</style>