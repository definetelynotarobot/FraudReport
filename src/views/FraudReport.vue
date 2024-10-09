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
import FraudReportModal from '../components/FraudReportModal.vue' // Ensure this is correct

export default {
  name: 'FraudReport',
  components: {
    FraudReportModal, // Ensure this is correctly registered
  },
  data() {
    return {
      selectedCity: '',
      selectedFraud: '',
      cities: ['Budapest', 'Rome', 'Paris', 'New York', 'Tokyo'],
      fraudTypes: [
        'Taxi Fraud',
        'Hotel Scam',
        'Pickpocketing',
        'Fake Tour Guides',
        'Card Skimming',
      ],
      showModal: false, // Controls modal visibility
    }
  },
  methods: {
    submitReport() {
      console.log('City:', this.selectedCity)
      console.log('Fraud Type:', this.selectedFraud)
      this.showModal = true // Show the modal
      this.selectedCity = '' // Reset the form
      this.selectedFraud = '' // Reset the form
    },
  },
}
</script>

<style scoped>
.fraud-report {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 5px;
  max-width: 400px;
  margin: auto;
}

h2 {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.disclaimer {
  font-size: 0.9em;
  color: #6c757d;
  margin-bottom: 1rem;
}
</style>
