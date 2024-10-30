<template>
  <div class="fraud-report">
    <b-card
      title="Report a Fraud Incident"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Fraud Reporting Image"
      img-top
      style=" margin: auto; padding: 2rem"
      class="mb-4"
    >
      <p class="disclaimer">
        Disclaimer: Please fill out the form to report possible
        scam incidents. Avoid providing any personal opinions or unverified
        information. We will also scan through them and update our database according to the verified information.
      </p>
      <div class="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdRLFoGfDsSLrUNktxsyUPqSq3-X_hYh2mVJaWfutDAQcj-gg/viewform?embedded=true"
          width="100%"
          height="1002"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Yükleniyor…
        </iframe>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'FraudReport',
  methods: {
    submitReport() {
      console.log('Submit button clicked');
    },
  },
};
</script>

<style scoped>
.fraud-report {
  display: flex;
  justify-content: center;
  padding: 1rem;
}


.disclaimer {
  font-size: 0.95rem;
  color: #6b7280; /* Gray text for the disclaimer */
  margin-bottom: 1.5rem;
  text-align: center;
}

.form {
  display: flex;
  justify-content: center; /* Center the iframe horizontally */
}

iframe {
  max-width: 100%; /* Ensure iframe doesn't overflow */
  height: 1002px; /* Set the height */
  border: none; /* Remove the default border */
}
</style>
