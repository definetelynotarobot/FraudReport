<template>
  <footer class="footer">
    <p class="rights-reserved">&copy; {{ currentYear }} Tourist Guards. All rights reserved. <a class="made-by" href="https://x.com/Mehmet_vue">| Made by @Mehmet_vue</a></p>
    <div class="footer-links">
      <a href="/privacy" @click.prevent="showPrivacy" class="footer-link">Privacy</a>
      <span>|</span>
      <a href="/terms"  @click.prevent="showTerms" class="footer-link">Terms of Use</a>
    </div>
    <PolicyModal 
      :visible="isModalVisible" 
      @update:visible="isModalVisible = $event" 
      :title="modalTitle"
    >
      <template v-if="modalType === 'privacy'">
        <p class="modal-text">
          Your privacy is important to us. This policy explains what data we collect and how we use it.
          <a href="privacy-policy.html" id="privacy-policy-link">Show Privacy Policy</a></p>
      </template>
      <template v-else-if="modalType === 'terms'">
        <p class="modal-text">By using our site, you agree to the following terms...<a href="terms-of-use.html" id="privacy-policy-link">Show Terms Of Use</a></p>
      </template>
    </PolicyModal>
  </footer>
</template>

<script>
import PolicyModal from './PolicyModal.vue';
export default {
  name: 'AppFooter',
  components: {
    PolicyModal,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isModalVisible: false,
      modalTitle: '',
      modalType: '',
    }
  },
  methods: {
    showPrivacy() {
      this.modalTitle = 'Privacy Policy';
      this.modalType = 'privacy';
      this.isModalVisible = true;
    },
    showTerms() {
      this.modalTitle = 'Terms of Use';
      this.modalType = 'terms';
      this.isModalVisible = true;
    },
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
.made-by{
  color:white;
  text-decoration: none;
}
.rights-reserved{
  color:white;
}
.modal-text{
  color:black;
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
