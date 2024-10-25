<template>
    <div class="container">
      <h1 class="title">How to Avoid Tourist Scams and Stay Safe</h1>
      <p class="description">
        Traveling can be an incredible experience, but it's essential to be aware of potential scams that target tourists. This page provides tips and advice on how to recognize, avoid, and report scams to ensure a safe and enjoyable trip.
      </p>
  
      <section class="section">
  <h2 class="section-title">Common Tourist Scams</h2>
  <ul class="list">
    <li><span class="emoji">⚠️</span> <span><strong>Fake Tour Guides:</strong> Beware of individuals offering unofficial tours, especially in popular tourist areas. Always book through reputable companies.</span></li>
    <li><span class="emoji">💸</span> <span><strong>Overpriced Goods and Services:</strong> Be cautious of vendors selling products at inflated prices. Research the average cost of items before purchasing.</span></li>
    <li><span class="emoji">🏧</span> <span><strong>ATM Scams: </strong>Use ATMs in well-lit, populated areas. Avoid withdrawing large amounts of cash at once to minimize risk.</span></li>
    <li><span class="emoji">🏨</span> <span><strong>Hotel Scams: </strong>Some hotels may charge hidden fees or provide subpar service. Read reviews and verify booking sites before confirming reservations.</span></li>
  </ul>
</section>

<section class="section">
  <h2 class="section-title">How to Recognize Scams</h2>
  <ul class="list">
    <li><span class="emoji">🤔</span> <span><strong>Unusual Behavior: </strong>If someone approaches you aggressively or seems overly friendly, trust your instincts and walk away.</span></li>
    <li><span class="emoji">💥</span> <span><strong>Too Good to Be True Offers:</strong> If a deal seems too good to be true, it probably is. Always question suspicious offers.</span></li>
    <li><span class="emoji">⏳</span> <span><strong>Pressure Tactics:</strong> Scammers may rush you to make a decision. Take your time to think things through and don’t hesitate to say no.</span></li>
  </ul>
</section>

<section class="section">
  <h2 class="section-title">Prevention Tips</h2>
  <ul class="list">
    <li><span class="emoji">📖</span> <span><strong>Stay Informed: </strong>Read about common scams in your destination before traveling. Knowledge is your best defense.</span></li>
    <li><span class="emoji">🌐</span> <span><strong>Use Trusted Sources: </strong>Rely on travel blogs, official tourism websites, and reviews from fellow travelers to gather information.</span></li>
    <li><span class="emoji">🔒</span> <span><strong>Keep Valuables Secure:</strong> Use anti-theft bags or pouches and avoid displaying expensive items while exploring.</span></li>
    <li><span class="emoji">📱</span> <span><strong>Stay Connected:</strong> Share your itinerary with friends or family, and consider using location-sharing apps to keep them updated on your whereabouts.</span></li>
  </ul>
</section>

<section class="section">
  <h2 class="section-title">What to Do If You Encounter a Scam</h2>
  <ul class="list">
    <li><span class="emoji">😌</span> <span><strong>Stay Calm:</strong> If you realize you're being scammed, remain calm and collected.</span></li>
    <li><span class="emoji">🚶</span> <span><strong>Remove Yourself from the Situation: </strong>Politely but firmly leave the area.</span></li>
    <li><span class="emoji">📞</span> <span><strong>Report the Incident:</strong> Contact local authorities or your embassy if you feel threatened. Reporting scams can help prevent others from falling victim.</span></li>
    <li><span class="emoji">✉️</span> <span><strong>Contact Us:</strong> We will make sure it gets known so that the other travelers can be more cautious.</span></li>
  </ul>
</section>

  
      <section class="section section-cta">
        <h2 class="section-title">Share Your Experience</h2>
        <p>
          Encourage users to share their experiences with scams in the comments or through a submission form. This can help build a community of informed travelers.
        </p>
        <router-link to="/share-experience" class="button">Share Your Experience</router-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AvoidPrevention',
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  p{
    font-family:"Montserrat", sans-serif
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .description {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .section {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .list {
  padding: 0;
}

.list li {
  display: flex;
  align-items: center;
  background-color: #f1f1f1; /* Light grey background for the cards */
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  font-size: 1rem;
  line-height: 1.5;
}
.list li .emoji {
  font-size: 2rem; /* Increase the size of the emoji */
  /*transform: rotate(-45deg);  Rotate emoji by 45 degrees */
  display: inline-block;
  margin-right: 10px;
}

.list li span {
  margin-left: 10px;
}
section.section.section-cta {
    display: flex;
    align-items: center;
    flex-direction: column;
}

  
  .button {
    display: inline-block;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 1rem;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  
  </style>
  