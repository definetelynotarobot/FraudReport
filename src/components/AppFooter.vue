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
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-top: 1px solid #eaeaea;
}
</style>
