<template>
  <div class="fraud-report">
    <h2>Report a Fraud Incident</h2>
    <p class="disclaimer">
      Disclaimer: Please select from the dropdown options to report possible
      fraud incidents. Avoid providing any personal opinions or unverified
      information.
    </p>
    <form @submit.prevent="submitReport">
      <label for="city">Choose a city:</label>
      <select v-model="selectedCity" id="city" required>
        <option value="" disabled>Select a city</option>
        <option v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </option>
      </select>

      <label for="fraudType">Choose a type of fraud:</label>
      <select v-model="selectedFraud" id="fraudType" required>
        <option value="" disabled>Select a type of fraud</option>
        <option v-for="fraud in fraudTypes" :key="fraud" :value="fraud">
          {{ fraud }}
        </option>
      </select>

      <button type="submit">Submit Report</button>
    </form>

    <FraudReportModal
      v-if="showModal"
      :isVisible="showModal"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import FraudReportModal from '../components/FraudReportModal.vue'

export default {
  name: 'FraudReport',
  components: {
    FraudReportModal,
  },
  data() {
    return {
      selectedCity: '',
      selectedFraud: '',
      cities: ['New York', 'Paris', 'Tokyo'], // Add actual cities data
      fraudTypes: ['Pickpocketing', 'Scam Calls', 'Fake Taxis'], // Add actual fraud types data
      showModal: false,
    }
  },
  methods: {
    submitReport() {
      console.log('City:', this.selectedCity)
      console.log('Fraud Type:', this.selectedFraud)
      this.showModal = true
      this.selectedCity = ''
      this.selectedFraud = ''
    },
  },
}
</script>

<style scoped>
.fraud-report {
  padding: 2rem;
  background-color: #f3f4f6; /* Light Gray Background */
  border-radius: 10px;
  max-width: 450px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 1rem;
  color: #1f2937; /* Slate for the header */
  text-align: center;
  font-size: 1.8rem;
}

.disclaimer {
  font-size: 0.95rem;
  color: #6b7280; /* Gray text for the disclaimer */
  margin-bottom: 1.5rem;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151; /* Dark Slate for labels */
  font-size: 1rem;
}

select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  border: 1px solid #d1d5db; /* Light Gray border */
  background-color: #ffffff; /* White background for select boxes */
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6; /* Blue button background */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2563eb; /* Darker blue on hover */
}

button:active {
  background-color: #1d4ed8; /* Even darker blue on active click */
}

/* Media Queries for responsiveness */
@media (max-width: 480px) {
  .fraud-report {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
}
</style>
