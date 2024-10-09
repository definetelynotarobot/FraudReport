<template>
  <header class="header">
    <h1 class="title">Fraud Alert System</h1>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/city-selection" class="nav-link"
        >City Selection</router-link
      >
      <router-link to="/fraud-report" class="nav-link"
        >Report Fraud</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader', // Changed from 'Header' to 'AppHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
}

.title {
  margin: 0;
  font-size: 2em;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
