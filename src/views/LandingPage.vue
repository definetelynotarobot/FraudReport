<template>
  <div class="landing-page">
    <h1>Welcome to the Fraud Alert System</h1>
    <p>
      Are you traveling soon? Stay informed about potential fraud risks in various cities.
    </p>
    <router-link to="/scams">
      <button class="cta-button">Go to Fraud Alert System</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9fafb; /* Soft Gray */
  text-align: center;
  padding: 20px; /* Responsive padding for smaller screens */
}

h1 {
  font-size: 3em;
  margin-bottom: 0.5em;
  color: #1e3a8a; /* Deep Blue */
}

p {
  font-size: 1.3em;
  margin-bottom: 2em;
  color: #374151; /* Dark Gray for text */
}

.cta-button {
  padding: 12px 24px;
  font-size: 1.2em;
  color: #fff;
  background-color: #3b82f6; /* Light Blue */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #1e3a8a; /* Deep Blue on hover */
}

/* Responsiveness */
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.1em;
  }

  .cta-button {
    font-size: 1em;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8em;
  }

  p {
    font-size: 1em;
  }

  .cta-button {
    font-size: 0.9em;
    padding: 8px 16px;
  }
}
</style>
