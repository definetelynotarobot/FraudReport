<template>
  <div class="landing-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="content">
        <div class="animated-text">
          <h1>Better safe than <span class="highlight">sorry</span></h1>
          <p class="subtitle">Stay informed about potential travel risks in various cities worldwide.</p>
          <router-link to="/scams" class="cta-button">
            Discover Possible Scams
          </router-link>
        </div>
      </div>
      
      <!-- Animated Background -->
      <div class="animated-background">
        <!-- Passport -->
        <div class="floating-icon passport">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="3" width="20" height="18" rx="2" />
            <circle cx="12" cy="10" r="3" />
            <path d="M6 17h12" />
          </svg>
        </div>
        <!-- Plane -->
        <div class="floating-icon plane">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 12L3 20l3.5-8L3 4l19 8z" />
          </svg>
        </div>
        <!-- Shield -->
        <div class="floating-icon shield">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <!-- Map Pin -->
        <div class="floating-icon map-pin">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <!-- Alert -->
        <div class="floating-icon alert">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 8v4M12 16h.01" />
            <path d="M12 2L2 20h20L12 2z" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-grid">
        <div v-for="(stat, index) in stats" 
             :key="index" 
             class="stat-card"
             :class="{ 'appear': true }">
          <div class="stat-icon">{{ stat.icon }}</div>
          <h3>{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Add Navigation Links Section after Stats Section -->
    <section class="links-section">
      <div class="links-grid">
        <div class="link-card">
          <h3>🔍 Explore More</h3>
          <ul>
            <li><router-link to="/scams">Latest Scam Reports</router-link></li>
            <li><router-link to="/blog">Travel Safety Blog</router-link></li>
            <li><router-link to="/share-experience">Report an Incident</router-link></li>
          </ul>
        </div>
        <div class="link-card">
          <h3>🌐 Official Resources</h3>
          <ul>
            <li><a href="https://travel.state.gov/content/travel.html" target="_blank" rel="noopener">US Travel Advisory</a></li>
            <li><a href="https://www.who.int/travel-advice" target="_blank" rel="noopener">WHO Travel Advice</a></li>
            <li><a href="https://www.interpol.int/en/Crimes/Financial-crime" target="_blank" rel="noopener">Interpol Financial Crime</a></li>
          </ul>
        </div>
        <div class="link-card">
          <h3>🤝 Community</h3>
          <ul>
            <li><a href="https://twitter.com/TouristGuards" target="_blank" rel="noopener">Follow us on Twitter</a></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2>Why Choose Our Platform?</h2>
      <div class="features-grid">
        <div v-for="(feature, index) in features" 
             :key="index"
             class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      stats: [
        { icon: '🌍', value: '100+', label: 'Cities Covered' },
        { icon: '⚠️', value: '300+', label: 'Scams Documented' },
        { icon: '👥', value: '5K+', label: 'Travelers Protected' },
        { icon: '📱', value: '24/7', label: 'Available Support' }
      ],
      features: [
        {
          icon: '🔍',
          title: 'Real-Time Updates',
          description: 'Get the latest information about emerging scams and threats in various destinations.'
        },
        {
          icon: '📱',
          title: 'Mobile Friendly',
          description: 'Access critical information on-the-go from any device, anywhere in the world.'
        },
        {
          icon: '👥',
          title: 'Community Verified',
          description: 'Real experiences shared by real travelers, verified by our expert team.'
        },
        {
          icon: '🔔',
          title: 'Alert System',
          description: 'Receive insights about new/existing scams in your planned destination.'
        }
      ]
    }
  },
  metaInfo: {
    title: "Tourist Guards - Stay Safe, Travel Smarter",
    meta: [
      {
        name: "description",
        content: "Discover potential travel scams across 100+ cities worldwide. Stay informed, protect yourself, and travel smarter with Tourist Guards.",
      },
      {
        name: "keywords",
        content: "travel scams, tourist safety, travel tips, city scams, safe travel",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  },
  mounted() {
    const ldJsonScript = document.createElement('script');
    ldJsonScript.type = 'application/ld+json';
    ldJsonScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Tourist Guards - Travel Smarter",
      "description": "Discover and avoid travel scams with Tourist Guards. Covering 100+ cities worldwide.",
      "publisher": {
        "@type": "Organization",
        "name": "Tourist Guards"
      }
    });
    document.head.appendChild(ldJsonScript);
  }
}
</script>


<style scoped>
.landing-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
}

.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  padding: 0 2rem;
}

.animated-text h1 {
  font-size: 5rem;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  animation: slideUp 0.8s ease-out;
  line-height: 1.2;
}

.highlight {
  color: #dc143c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  display: inline-block;
}

.subtitle {
  font-size: 1.8rem;
  color: #4b5563;
  margin-bottom: 2.5rem;
  animation: slideUp 0.8s ease-out 0.2s backwards;
  line-height: 1.4;
}

.cta-button {
  display: inline-block;
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: slideUp 0.8s ease-out 0.4s backwards;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 15px rgba(59, 130, 246, 0.3);
}

.animated-background {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.floating-icon {
  position: absolute;
  width: 80px;
  height: 80px;
  opacity: 0.08;
  animation: float ease-in-out infinite;
}

.floating-icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 1.5;
}

/* Positioning and specific animations for each icon */
.passport {
  top: 20%;
  left: 15%;
  animation-duration: 4s;
  animation-delay: 0s;
}

.plane {
  top: 40%;
  right: 15%;
  animation-duration: 6s;
  animation-delay: 1s;
  transform: rotate(-15deg);
}

.shield {
  bottom: 30%;
  left: 20%;
  animation-duration: 5s;
  animation-delay: 2s;
}

.map-pin {
  top: 25%;
  right: 25%;
  animation-duration: 7s;
  animation-delay: 1.5s;
}

.alert {
  bottom: 25%;
  right: 20%;
  animation-duration: 5.5s;
  animation-delay: 0.5s;
}

/* Enhanced float animation */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

/* Rest of the animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .animated-text h1 {
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }

  .cta-button {
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
  }

  .floating-icon {
    width: 60px;
    height: 60px;
  }
  .hero {
    padding: 1rem;
  }

  .content {
    margin-left: 5%;
  }

  .animated-text h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .animated-text h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.1rem;
  }

  .floating-icon {
    width: 40px;
    height: 40px;
  }
  .stats-grid, .features-grid {
    grid-template-columns: 1fr;
  }
}
/* Stats Section */
.stats-section {
  padding: 4rem 2rem;
  background: white;
}

.stats-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transform: translateY(20px);
  opacity: 0;
  animation: appear 0.6s ease-out forwards;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.stat-card h3 {
  font-size: 2.5rem;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

/* Features Section */
.features-section {
  padding: 4rem 2rem;
  background: #f8fafc;
}

.features-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #1e3a8a;
  margin-bottom: 3rem;
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Replace the existing links-section related styles with these enhanced ones */
.links-section {
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
  position: relative;
}

.links-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  padding: 0 1rem;
}

.link-card {
  padding: 2.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
  overflow: hidden;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.link-card h3 {
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.link-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-card ul li {
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
}

.link-card ul li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3b82f6;
  transition: transform 0.2s ease;
}

.link-card ul li a {
  color: #4b5563;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1.1rem;
  line-height: 1.5;
  display: block;
  padding: 0.4rem 0;
  font-weight: 500;
}

.link-card ul li a:hover {
  color: #2563eb;
  transform: translateX(5px);
}

.link-card ul li:hover:before {
  transform: translateX(3px);
}

/* External link styles */
.link-card ul li a[target="_blank"] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.link-card ul li a[target="_blank"]:after {
  content: "↗";
  font-size: 0.9em;
  transition: transform 0.2s ease;
}

.link-card ul li a[target="_blank"]:hover:after {
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  .links-section {
    padding: 4rem 1rem;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .link-card {
    padding: 2rem;
  }
  
  .link-card h3 {
    font-size: 1.4rem;
  }
  
  .link-card ul li a {
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .link-card,
  .link-card ul li a,
  .link-card ul li:before {
    transition: none;
  }
}
</style>