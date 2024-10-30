<template> 
	<div id="cookies-popup"> 
		<i class='fas fa-cookie-bite' style='font-size:80px;'> </i> 
		<p>This website uses cookies to ensure you get the best experience on our website.</p> 
		<div class="btn-cont"> 
			<button @click="acceptCookies">Accept All Cookies</button> 
			<!--<button @click="acceptNecessaryCookies">Necessary Cookies Only</button> -->
			<button @click="rejectCookies">Reject All Cookies</button> 
		</div> 
		<!--<button class="btn-cust" @click="customizeSettings">Customize Settings</button> -->
	</div> 
</template>

<script>
export default {
  name: 'CookiesConsent',
  methods: {
    acceptCookies() {
      localStorage.setItem('cookieConsent', 'all');
      this.$emit('close');
    },
    rejectCookies() {
      localStorage.setItem('cookieConsent', 'rejected');
      this.$emit('close');
    },
  },
  mounted() {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      this.$emit('close');
    }
  }
};
</script>

<style>
  #cookies-popup {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 400px;
    max-width: 70%; /* Ensure it doesn’t exceed the viewport on mobile */
    background: #1e3a8a;
    color: #fff;
    padding: 20px; /* Reduced padding for smaller screens */
    text-align: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    border-radius: 8px;
  }

  #cookies-popup p {
    margin: 10px 0; /* Smaller margins for mobile */
    font-size: 1em; /* Responsive font size */
  }

  .btn-cont {
    display: flex;
    flex-direction: column; /* Stack buttons on mobile */
    margin: 10px 0;
  }

  .btn-cont button {
    background: #fff;
    color: #1e3a8a;
    border: none;
    padding: 10px; /* Adjusted padding for smaller buttons */
    cursor: pointer;
    font-weight: bold;
    margin: 5px 0; /* Stack spacing */
    border-radius: 4px;
  }

  .btn-cust {
    padding: 10px; /* Reduced padding */
    font-size: 1em; /* Responsive font size */
    font-weight: bold;
    color: #1e3a8a;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 4px;
  }

  /* Media query for small screens */
  @media (max-width: 600px) {
    #cookies-popup {
		
      padding: 15px;
      bottom: 10px;
      left: 10px;
    }

    .btn-cont {
      flex-direction: column;
    }

    .btn-cont button, .btn-cust {
      width: 100%; /* Full-width buttons on mobile */
    }

    i.fas.fa-cookie-bite {
      font-size: 50px; /* Adjust icon size for mobile */
    }
  }
</style>

