<template>
  <div class="container">
    <div class="landing-page">
      <div class="content">
        <h1>Better safe than <span class="head-style-txt">sorry</span></h1>
        <p>
          Are you traveling soon? Stay informed about potential scam risks in various cities.
        </p>
        <router-link to="/scams">
          <button class="cta-button">Discover possible scams</button>
        </router-link>
      </div>
      <div class="hero">
        <img
          src="@/assets/hero/hero-img-4.png" 
          alt="Infographic with Luggage"
          class="hero-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>
.landing-page {
  display: flex;
  align-items: center; /* Center items vertically */
  height: 100vh;
  background-color: white; /* Soft Gray */
  padding: 20px; /* Responsive padding for smaller screens */
}

.content {
  flex: 1; /* Take up remaining space */
  text-align: left; /* Align text to the left */
}
.head-style-txt{
  color:#dc143c;
  background-color: white;
  font-weight:bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.hero {
  flex: 1; /* Take up remaining space */
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  .hero-img {
  max-width: 100%; /* Make sure the image is responsive */
  height: auto; /* Maintain aspect ratio */
  transition: opacity 1s ease-in-out; /* Smooth transition */
}
}
.fade-out {
  opacity: 0;
}

h1 {
  font-family: 'Montserrat', sans-serif; /* Restore original font */
  font-size: 4em;
  margin-bottom: 0.5em;
  color: #1e3a8a; /* Deep Blue */
}

p {
  font-family: 'Montserrat', sans-serif; /* Restore original font */
  font-size: 1.3em;
  font-weight: 500;
  margin-bottom: 2em;
  color: #374151; /* Dark Gray for text */
}

.cta-button {
  font-family: "Montserrat";
  font-weight:500;
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
  .landing-page {
    flex-direction: column; /* Stack vertically on smaller screens */
    height: auto; /* Allow height to adjust */
  }

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.1em;
    margin-bottom:10px;
  }

  .cta-button {
    font-size: 1em;
    padding: 10px 20px;
    margin-bottom:10px;
  }
 


  .hero img {
    max-width: 80%; /* Limit size on smaller screens */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8em;
  }

  p {
    font-size: 1em;
  }
  .content{
    margin-bottom:10px;
  }

  .cta-button {
    font-size: 0.9em;
    padding: 8px 16px;
  }
}
</style>
