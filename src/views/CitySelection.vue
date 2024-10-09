<template>
  <div>
    <h2>Select a City</h2>
    <select v-model="selectedCity">
      <option disabled value="">Please select one</option>
      <option v-for="city in cities" :key="city" :value="city">
        {{ city }}
      </option>
    </select>
    <button @click="fetchFraudBehaviors">View Potential Fraud Behaviors</button>

    <div v-if="fraudBehaviors.length > 0">
      <h3>Potential Fraud Behaviors in {{ selectedCity }}:</h3>
      <ul>
        <li v-for="behavior in fraudBehaviors" :key="behavior">
          {{ behavior }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: '',
      cities: ['Budapest', 'Paris', 'New York'],
      fraudBehaviors: [],
    }
  },
  methods: {
    fetchFraudBehaviors() {
      // Simulate fetching data based on the selected city
      const fraudData = {
        Budapest: [
          'Overcharging for taxi rides',
          'Fake taxi drivers',
          'Bait and switch tactics with tours',
        ],
        Paris: [
          'Pickpocketing in crowded areas',
          'Scams involving fake charity collections',
        ],
        NewYork: [
          'Taxi drivers refusing to use the meter',
          'Street vendor scams',
        ],
      }

      this.fraudBehaviors = fraudData[this.selectedCity] || []
    },
  },
}
</script>

<style>
select {
  margin: 10px 0;
}
button {
  margin-top: 10px;
}
</style>
