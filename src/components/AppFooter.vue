<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Fraud Alert System. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter', // Changed from 'Footer' to 'AppFooter'
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
/* Make the html and body take up the full height */
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

/* The container grows to fill the space between header and footer */
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers the content vertically when there's no content */
  padding: 20px; /* Add padding to avoid the content touching the edges */
}

/* Footer sits at the bottom naturally without sticking */
.AppFooter {
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  border-top: 1px solid #ddd;
  margin-top: auto;
}

/* Add margin to ensure the footer doesn't overlap with the content */
footer {
  margin-top: auto;
}
</style>
