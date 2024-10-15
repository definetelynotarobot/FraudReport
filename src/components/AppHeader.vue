<template>
  <header class="app-header">
    <div class="logo">
      <router-link to="/">
        <h1>Tourist Guard</h1>
      </router-link>
      <p>Your trusted guide for safe travel</p>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about-me">About Me</router-link></li>
        <li><router-link to="/scams">Reported Scams</router-link></li>
        <li><router-link to="/report-scams">Submit a Report</router-link></li>
        <li><router-link to="/contact">Contact Me</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.app-header {
  background-color: #1e3a8a; /* Deep Blue */
  color: white; /* Text color */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* For responsiveness */
}

.logo {
  text-align: left;
}

h1 {
  margin: 0;
  font-size: 2.5rem; /* Larger for the header */
  color: white;
}

p {
  margin: 0;
  font-size: 1.1rem;
  color: #f97316; /* Accent color: Orange */
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap; /* Make it responsive */
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  color: white; /* Link color */
  text-decoration: none;
  font-size: 1.1rem; /* Increase size */
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav ul li a:hover {
  background-color: #3b82f6; /* Light Blue on hover */
}

/* Responsiveness */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  nav ul {
    justify-content: center;
  }

  nav ul li {
    margin-left: 10px;
  }

  nav ul li a {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 0.9rem;
  }

  nav ul li a {
    font-size: 0.9rem;
  }
}
</style>
