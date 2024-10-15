<template>
  <div class="container">
    <div class="search-area">
      <h2>Select a City</h2>
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

    <!-- Scam cards container -->
    <div v-if="fraudBehaviors.length > 0" class="scam-cards">
      <div class="scam-card-container" v-for="behavior in fraudBehaviors" :key="behavior.title">
        <!-- Card Wrapper to Align Widths -->
        <div class="card-wrapper">
          <!-- Scam card with Title, Description and Mask Icon -->
          <div class="scam-card">
            <div class="icon">
              <i class="fas fa-mask" aria-hidden="true"></i> <!-- Mask icon for scams -->
            </div>
            <div class="scam-card-content">
              <h4>{{ behavior.title }}</h4>
              <p>{{ behavior.description }}</p>
            </div>
              <!-- Add this button inside your scam-card div -->
              <button @click="incrementCounter(behavior)" class="increment-button">
              Report This Scam ({{ behavior.counter }})
            </button>
          </div>

          <!-- Reported by card with Shield Icon -->
          <div class="reported-by-card">
            <div class="icon">
              <i class="fas fa-shield-alt" aria-hidden="true"></i> <!-- Shield icon for reported by -->
            </div>
            <p><strong>Reported by:</strong> {{ behavior.reportedBy }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: '',
      currentCity: '', // New property for displaying the city name
      cities: [], // Start with an empty array
      fraudBehaviors: [],
      buttonClicked: false, // Flag to track button click
    };
  },
  created() {
    this.fetchCities(); // Fetch cities when the component is created
  },
  methods: {
    fetchCities() {
      fetch('http://localhost:4000/api/cities') // Replace with your API URL
        .then(response => response.json())
        .then(data => {
          this.cities = data; // Set cities from the API response
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
        });
    },
    fetchFraudBehaviors() {
  this.fraudBehaviors = []; // Clear existing fraud behaviors
  this.buttonClicked = false; // Reset button clicked flag for fresh search

  fetch(`http://localhost:4000/api/scams/${this.selectedCity}`)
    .then(response => response.json())
    .then(data => {
      // Initialize counter to 0 for each scam behavior
      this.fraudBehaviors = (data.scams || []).map(scam => ({
        ...scam,   // Spread the original scam properties
        counter: 0 // Add the counter property
      }));
      this.currentCity = this.selectedCity; // Set currentCity to selectedCity
      this.buttonClicked = true; // Set flag to true after fetching
    })
    .catch(error => {
      console.error('Error fetching scams:', error);
    });
  },

    incrementCounter(behavior) {
    // Increment the counter locally
    behavior.counter += 1;

    // Make the API call to update the counter on the server
    fetch(`http://localhost:4000/api/scams/${behavior.id}/increment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count: behavior.counter }),
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        console.log(`Counter for ${behavior.title} updated on server.`);
      })
      .catch(error => {
        console.error('Error updating counter on server:', error);
      });
  }
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
  appearance: none; /* Remove default arrow */
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

/* Style the cards and make sure they're centered */
.scam-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scam-card-container {
  margin: 15px 0;
  width: 80%; /* Set a width so cards are centered nicely */
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Ensure both scam-card and reported-by-card have the same width */
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
  padding: 10px;
  background-color: #f4f4f9;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
}

</style>
