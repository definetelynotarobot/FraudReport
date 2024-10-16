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

    <div v-if="fraudBehaviors.length > 0" class="scam-cards">
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
            <!--
            <button @click="incrementCounter(behavior)" class="increment-button">
              Report This Scam ({{ behavior.counter }})
            </button>-->
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
export default {
  data() {
    return {
      selectedCity: '',
      cities: [],
      fraudBehaviors: [],
      buttonClicked: false,
    };
  },
  created() {
    this.fetchCities();
  },
  methods: {
  async fetchCities() {
  try {
    const response = await fetch('http://localhost:4000/api/cities');
    if (!response.ok) throw new Error('Error fetching cities');
    const data = await response.json();
    this.cities = data.map(city => city.city); // Extract city names
    } catch (error) {
    console.error('Error fetching cities:', error);
    }
  },
    async fetchFraudBehaviors() {
      this.fraudBehaviors = [];
      this.buttonClicked = false;

      try {
        const response = await fetch(`http://localhost:4000/api/scams/${this.selectedCity}`);
        if (!response.ok) throw new Error('Error fetching scams');
        const data = await response.json();

        this.fraudBehaviors = (data.scams || []).map(scam => ({
          ...scam,
          counter: scam.counter,
        }));
        this.buttonClicked = true;
      } catch (error) {
        console.error('Error fetching scams:', error);
      }
    },/*
    async incrementCounter(behavior) {
      behavior.counter += 1;

      try {
        const response = await fetch(`http://localhost:4000/api/scams/${behavior._id}/increment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ count: behavior.counter }),
        });
        if (!response.ok) throw new Error('Error updating counter on server');
        console.log(`Counter for ${behavior.title} updated on server.`);
      } catch (error) {
        console.error('Error updating counter on server:', error);
      }
    },*/
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
