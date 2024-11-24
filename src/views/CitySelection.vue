<template>
  <div class="container">
    <div class="search-area">
      <h2 class="section-title">
        <span class="emoji">📍</span>Select a City
      </h2>
      <select v-model="selectedCity" class="custom-select">
        <option disabled value="">Please select one</option>
        <option v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </option>
      </select>
      <button @click="fetchFraudBehaviors" :disabled="!selectedCity" class="custom-button">
        View Potential Scams
      </button>
      <p v-if="!selectedCity && buttonClicked" class="error-message">
        Please select a city before proceeding.
      </p>
    </div>

    <!-- Modern cards for popular scams -->
    <div v-if="!selectedCity" class="popular-scams">
      <h3 class="section-subtitle">Most Common Scams in Popular Cities</h3>
      <div class="scam-grid">
        <div v-for="(scam, index) in popularScams" 
             :key="index" 
             class="scam-card-wrapper">
          <div class="scam-card">
            <div class="card-header">
              <div class="city-badge">
                <i class="fas fa-map-marker-alt"></i>
                {{ scam.city }}
              </div>
              <div class="scam-type">{{ scam.title }}</div>
            </div>
            <div class="card-content">
              <p>{{ scam.description }}</p>
            </div>
            <div class="card-footer">
              <div class="source">
                <i class="fas fa-shield-alt"></i>
                <span>{{ scam.reportedBy }}</span>
              </div>
              <div class="severity" :class="scam.severityLevel">
                {{ scam.severity }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dynamic scam cards -->
    <div v-if="fraudBehaviors.length > 0" class="scam-cards">
      <div class="prevention-banner">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p class="prevention-text">
          Get prevention tips on our 
          <a href="/avoid" class="prevention-link">Avoid/Prevention</a> page
        </p>
      </div>
      
      <div class="scam-grid">
        <div v-for="behavior in fraudBehaviors" 
             :key="behavior.id" 
             class="scam-card-wrapper">
          <div class="scam-card">
            <div class="card-header">
              
              <div class="scam-type"><i class="fa-solid fa-person-circle-question"></i> {{ behavior.title }}</div>
            </div>
            <div class="card-content">
              <p>{{ behavior.description }}</p>
            </div>
            <div class="card-footer">
              <div class="source">
                <i class="fas fa-shield-alt"></i>
                <span>{{ behavior.reportedBy }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  data() {
    return {
      selectedCity: '',
      cities: [],
      fraudBehaviors: [],
      buttonClicked: false,
      popularScams: [
        {
          city: 'Istanbul',
          title: 'Taxi Overcharge',
          description: 'Some taxi drivers may overcharge tourists by taking longer routes or by claiming higher rates.',
          reportedBy: 'Tourist reports',
          severity: 'Medium Risk',
          severityLevel: 'medium'
        },
        {
          city: 'Paris',
          title: 'Bracelet Scam',
          description: 'Scammers place a bracelet on tourists and then demand payment for it, sometimes becoming aggressive.',
          reportedBy: 'Tourist reports',
          severity: 'High Risk',
          severityLevel: 'high'
        },
        {
          city: 'Barcelona',
          title: 'Pickpocketing',
          description: 'Pickpockets target tourists, especially in crowded areas like La Rambla and public transport.',
          reportedBy: 'Local authorities',
          severity: 'High Risk',
          severityLevel: 'high'
        }
      ]
    };
  },
  watch: {
    selectedCity(newCity) {
      // Update meta tags dynamically when city changes
      useHead({
        title: newCity ? `${newCity} - Tourist Scams` : 'Select a City for Scams Info',
        meta: [
          {
            name: 'description',
            content: newCity
              ? `Discover the most common scams in ${newCity} and stay safe during your travels.`
              : 'Explore potential scams and fraud risks in different cities around the world.',
          },
          {
            name: 'keywords',
            content: newCity
              ? `${newCity}, tourist scams, travel scams, ${newCity} scams`
              : 'tourist scams, travel fraud, city scams, stay safe while traveling',
          },
          {
            property: 'og:title',
            content: newCity
              ? `${newCity} Scams - Stay Safe`
              : 'Tourist Guards - Fraud Info in Various Cities',
          },
          {
            property: 'og:description',
            content: newCity
              ? `Here are the most reported scams in ${newCity}. Know before you go!`
              : 'Discover tourist scams reported in major cities and keep your travels safe.',
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: window.location.href,
          },
        ],
      });
    },
  },
  created() {
    this.fetchCities();
  },
  methods: {
    async fetchCities() {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/api/cities`);
        if (!response.ok) throw new Error('Error fetching cities');
        const data = await response.json();
        this.cities = data.map((city) => city.city); // Extract city names
        this.cities.sort((a, b) => a.localeCompare(b)); // Sort cities alphabetically
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },
    async fetchFraudBehaviors() {
      this.fraudBehaviors = [];
      this.buttonClicked = false;

      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/api/scams/${this.selectedCity}`);
        if (!response.ok) throw new Error('Error fetching scams');
        const data = await response.json();
        this.fraudBehaviors = (data.scams || []).map((scam) => ({
          ...scam,
          counter: scam.counter,
        }));
        this.buttonClicked = true;
      } catch (error) {
        console.error('Error fetching scams:', error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.search-area {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.emoji {
  font-size: 1.75rem;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}

.custom-select {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  background-color: white;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.custom-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.custom-button {
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(59, 130, 246, 0.25);
  transition: all 0.3s ease;
}
@media (min-width: 768px) {

  
  .custom-button {
    margin-left:10px;
  }
}

.custom-button:hover:not(:disabled) {
  background-color: #2563eb;
  transform: translateY(-1px);
}

.custom-button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

.error-message {
  color: #ef4444;
  margin-top: 0.5rem;
}

.scam-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.scam-card-wrapper {
  transition: transform 0.3s ease;
}

.scam-card-wrapper:hover {
  transform: translateY(-8px);
}

.scam-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.card-header {
  padding: 1.5rem;
  background: linear-gradient(to right, #f0f7ff, #f0f4ff);
}

.city-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.city-badge i {
  margin-right: 0.25rem;
  color: #3b82f6;
}

.scam-type {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.card-content {
  padding: 1.5rem;
}

.card-content p {
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
}

.card-footer {
  padding: 1rem 1.5rem;
  background-color: #f8fafc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.source {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #64748b;
}

.source i {
  color: #22c55e;
  margin-right: 0.5rem;
}

.severity {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.severity.high {
  background-color: #fee2e2;
  color: #991b1b;
}

.severity.medium {
  background-color: #fef3c7;
  color: #92400e;
}

.severity.low {
  background-color: #dcfce7;
  color: #166534;
}

.prevention-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: #fff7ed;
  border: 1px solid #fed7aa;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.prevention-banner i {
  font-size: 1.5rem;
  color: #f97316;
}

.prevention-text {
  font-size: 1.125rem;
  color: #1f2937;
  margin: 0;
}

.prevention-link {
  color: #16a34a;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: rgba(22, 163, 74, 0.3);
  transition: all 0.3s ease;
}

.prevention-link:hover {
  color: #15803d;
}

@media (max-width: 768px) {
  .scam-grid {
    grid-template-columns: 1fr;
  }
  
  .custom-select {
    max-width: 100%;
  }
}
</style>
