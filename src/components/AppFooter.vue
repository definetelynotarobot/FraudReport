<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Logo and Copyright Section -->
      <div class="footer-brand">
        <div class="brand-container">
          <img :src="require('@/assets/logo.png')" alt="Tourist Guard Logo" class="footer-logo" loading="lazy"/>
          <div class="brand-text">
            <h3 class="company-name">Tourist Guards</h3>
            <p class="copyright">&copy; {{ currentYear }} All rights reserved.</p>
          </div>
        </div>
      </div>

      <!-- Footer Links -->
      <nav class="footer-nav">
        <ul class="footer-links">
          <li>
            <a href="https://x.com/TouristGuards" class="footer-link" target="_blank" rel="noopener">
              <i class="fab fa-x-twitter"></i>
              @TouristGuards
            </a>
          </li>
          <li>
            <a href="/privacy" @click.prevent="showPrivacy" class="footer-link">
              <i class="fas fa-shield-alt"></i>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" @click.prevent="showTerms" class="footer-link">
              <i class="fas fa-gavel"></i>
              Terms of Use
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <PolicyModal 
      :visible="isModalVisible" 
      @update:visible="isModalVisible = $event" 
      :title="modalTitle"
    >
      <template v-if="modalType === 'privacy'">
        <p class="modal-text">
          Your privacy is important to us. This policy explains what data we collect and how we use it.
          <a href="/privacy-policy">Show Privacy Policy</a>
        </p>
      </template>
      <template v-else-if="modalType === 'terms'">
        <p class="modal-text">
          By using our site, you agree to the following terms...
          <a href="/terms-of-use">Show Terms Of Use</a>
        </p>
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
.app-footer {
  background: linear-gradient(to right, #1e3a8a, #2563eb);
  padding: 1.5rem;
  color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  animation: fadeIn 0.8s ease-out;
}

.footer-brand {
  flex-shrink: 0;
}

.brand-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  width: 50px;
  height: 60px;
  object-fit: contain;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.copyright {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.25rem 0 0 0;
}

.footer-nav {
  padding: 0.5rem 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
}

.footer-link i {
  font-size: 1rem;
  opacity: 0.8;
}

.footer-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-link {
    justify-content: center;
  }

  .brand-container {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-logo {
    width: 40px;
    height: 50px;
  }

  .company-name {
    font-size: 1.3rem;
  }
}
</style>