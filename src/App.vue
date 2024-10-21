<template>
  <div id="app" class="app-container">
    <AppHeader />
    <div class="app-content">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue' 
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader, 
    AppFooter,
  },
}
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
