<template>
  <div id="app" class="app-container">
    <AppHeader />
    <div class="app-content">
      <router-view />
    </div>
    <AppFooter />
    <CookiesConsent v-if="isLandingPage && showCookiesPopup" @close="showCookiesPopup = false" />
  </div>
</template>

<script>
/* global ga */
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import CookiesConsent from './components/CookiesConsent.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    CookiesConsent,
  },
  data() {
    return {
      showCookiesPopup: true,
    };
  },
  computed: {
    isLandingPage() {
      return this.$route.path === '/';  // Only show on landing page
    },
  },
  mounted() {
    // Check if consent is already given or rejected
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      this.showCookiesPopup = false;
      // Load or block cookies based on consent status
      if (consent === 'all') {
        this.loadAllCookies();
      } else if (consent === 'rejected') {
        this.blockAllCookies();
      }
    }
  },
  methods: {
    loadAllCookies() {
      const analyticsId = process.env.VUE_APP_GA_ID;

      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

      ga('create', analyticsId, 'auto');
      ga('send', 'pageview');

      console.log("All cookies have been loaded.");
    },
    blockAllCookies() {
      // Block any unwanted cookies
      document.cookie = "ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      console.log("Cookies are blocked; no tracking scripts loaded.");
    },
    acceptAllCookies() {
      localStorage.setItem('cookieConsent', 'all');
      this.loadAllCookies();
      this.showCookiesPopup = false;
    },
    rejectCookies() {
      localStorage.setItem('cookieConsent', 'rejected');
      this.blockAllCookies();
      this.showCookiesPopup = false;
    }
  }
};
</script>

<style>
/* Global styles */
body {
  font-family: 'Montserrat', 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

.app-content {
  flex-grow: 1; /* Pushes footer to the bottom when content is minimal */
}

.app-footer {
  background-color: #1e3a8a; /* Deep Blue */
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
