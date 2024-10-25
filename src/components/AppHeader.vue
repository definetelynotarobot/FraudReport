<template>
<header class="app-header">
  <div class="logo">
    <router-link to="/">
      <div class="container">
        <img :src="require('@/assets/logo.png')" alt="Tourist Guard Logo" class="logo-image" loading="lazy"/>
        <h1 class="logo-header">Tourist Guards</h1>
      </div>
    </router-link>
  </div>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/scams">Reported Scams</router-link></li>
      <li><router-link to="/Avoid">Avoid/Prevention</router-link></li>
      <li><router-link to="/Share-Experience">Share Experience</router-link></li>
      
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
.container{
  display:inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding:0;
}
.logo{
  display:flex;
  align-items: center;
}
.logo-image {
  width: 75px; /* Adjust the width as needed */
  height: 85px; /* Maintain aspect ratio */
  margin-right:10px;
  animation: fadeIn 1s ease-in-out;
}
/* Animation keyframes for h1 text coming from logo */
@keyframes slideFromLogo {
  0% {
    transform: translateX(-100%); /* Start from the logo */
    opacity: 0; /* Invisible at start */
  }
  100% {
    transform: translateX(0); /* End at normal position */
    opacity: 1; /* Fully visible */
  }
}

/* Fade-in effect for logo */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
h1.logo-header{
  display:inline-flex;
  opacity: 0; /* Initially hidden */
  transform: translateX(-100%); /* Positioned off-screen initially */
  animation: slideFromLogo 1s ease-out 0.5s forwards; /* Animation starts with a delay */
}

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
  display:contents;
}

h1 {
  margin: 0;
  font-size: 2.0rem; /* Larger for the header */
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
  font-family: "Montserrat";
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
