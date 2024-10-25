<template>
  <div class="container">
    <div class="search-area">
      <h2>📍Select a City</h2>
      <select v-model="selectedCity" class="custom-select">
        <option disabled value="">Please select one</option>
        <option v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </option>
      </select>
      <button @click="fetchFraudBehaviors" :disabled="!selectedCity" class="custom-button">
        View Potential Scams
      </button>
      <p v-if="!selectedCity && buttonClicked">Please select a city before proceeding.</p>

    </div>

    <div v-if="fraudBehaviors.length > 0" class="scam-cards">
      <div class="prevention-card" v-if="fraudBehaviors.length > 0">
        <div class="prevent-container">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <p class="avoid-direct">If you want to get info/tips about how to avoid these scams please refer to our <a href="/avoid">Avoid/Prevention</a> page</p>
        </div>
      </div>
      <div class="scam-card-container" v-for="behavior in fraudBehaviors" :key="behavior.id">
        <div class="card-wrapper">
          <div class="scam-card">
            <div class="icon">
              <i class="fas fa-mask" aria-hidden="true"></i>
            </div>
            <div class="scam-card-content">
              <h4>{{ behavior.title }}</h4>
              <p>{{ behavior.description }}</p>
            </div>
          </div>
          <div class="reported-by-card">
            <div class="icon">
              <i class="fas fa-shield-alt" aria-hidden="true"></i>
            </div>
            <p><strong>Reported by:</strong> {{ behavior.reportedBy }}</p>
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

<style>
/* Center everything in the container */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.search-area {
  text-align: center;
}

.custom-select {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  appearance: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease;
}

.custom-select:focus {
  border-color: #007bff;
  outline: none;
}

.custom-button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 400;
  transition: background-color 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.custom-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.scam-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scam-card-container {
  margin: 15px 0;
  width: 80%;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.scam-card, .reported-by-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
}

.scam-card {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-bottom: 10px;
}
.prevention-card {
  background-color: #fff; /* White background for contrast */
  border: 1px solid #bd2c08; /* Border color for attention */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  padding: 10px; /* Padding inside the card */
  margin: 20px; /* Margin outside the card */
  display: flex; /* Flexbox for layout */
  align-items: center; /* Center items vertically */
  width:80%;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s; /* Smooth hover effect */
  i{
    color:rgb(211, 60, 14);
    margin-right:10px;
    font-size:2em;
  }
  a{
    text-decoration: none;
    font-weight:500;
    color:#04b104;
  }
}
.prevent-container{
  display:flex;
  align-items: center;
}

.prevention-card:hover {
  transform: translateY(-2px); /* Lift effect on hover */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Deeper shadow on hover */
}
.avoid-direct {
  font-size: 16px; /* Font size for the text */
  color: #333; /* Text color */
  margin: 0; /* Remove default margin */
}

.avoid-link {
  color: #007bff; /* Link color */
  text-decoration: underline; /* Underline link */
}

.avoid-link:hover {
  text-decoration: none; /* Remove underline on hover */
}


.icon {
  margin-right: 10px;
  font-size: 24px;
}

.scam-card-content {
  flex-grow: 1;
}

h4 {
  margin: 0 0 5px;
}

.reported-by-card {
  font-family:"Montserrat";
  font-weight: 500;
  padding: 10px;
  background-color: #f4f4f9;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  p{
    margin-bottom:0;
  }
}

.reported-by-card i {
  color: #04b104;
}
</style>
