<template>
  <div>
    <h2>Welcome to the Tourist Guards</h2>
    <router-link to="/city-selection">Select a City</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Changed from 'Home' to 'HomePage'
}
</script>

<style>
h2 {
  color: #333;
}
</style>
