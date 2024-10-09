<template>
  <div id="app">
    <AppHeader />
    <!-- Changed from Header to AppHeader -->
    <router-view />
    <AppFooter />
    <!-- Keep this as it is if you previously renamed it -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue' // Changed import name
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader, // Changed from Header to AppHeader
    AppFooter,
  },
}
</script>

<style>
/* Global styles can go here */
body {
  font-family: 'Space', sans-serif; /* Use this to set a base font */
  margin: 0;
  padding: 0;
}
</style>
