<template>
  <footer class="footer">
    <p>&copy; {{ currentYear }} Tourist Guards. All rights reserved.</p>
    <div class="footer-links">
      <a href="/privacy" class="footer-link">Privacy</a>
      <span>|</span>
      <a href="/terms" class="footer-link">Terms of Use</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

.footer {
  width: 100%;
  padding: 10px;
  background-color: #1e3a8a; /* Set the background color to your blue */
  color: white; /* Change text color to white for contrast */
  text-align: center;
  border-top: 1px solid #ddd;
  margin-top: auto;
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center items vertically */
  p{
    margin-bottom:0;
  }
}
.footer-links {
  display: flex; /* Align links in a row */
  align-items: center; /* Center links vertically */
}

.footer-link {
  color: white; /* Link color */
  text-decoration: none; /* Remove underline from links */
  margin: 0 10px; /* Space between links */
}

.footer-link:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>
