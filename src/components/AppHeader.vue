<template>
  <header class="app-header">
    <div class="header-container">
      <router-link to="/" class="logo-wrapper">
        <div class="logo-container">
          <img :src="require('@/assets/logo.png')" alt="Tourist Guard Logo" class="logo-image" loading="lazy"/>
          <h1 class="logo-text">Tourist Guards</h1>
        </div>
      </router-link>

      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" @click="isMenuOpen = !isMenuOpen">
        <span class="hamburger-icon" :class="{ 'open': isMenuOpen }"></span>
      </button>

      <!-- Navigation -->
      <nav class="nav-menu" :class="{ 'nav-open': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
            <router-link :to="item.path" class="nav-link" @click="isMenuOpen = false">
              <i :class="item.icon"></i>
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        { name: 'Home', path: '/', icon: 'fas fa-home' },
        { name: 'Blog', path: '/blog', icon: 'fas fa-blog' },
        { name: 'Reported Scams', path: '/scams', icon: 'fas fa-exclamation-triangle' },
        { name: 'Avoid/Prevention', path: '/Avoid', icon: 'fas fa-shield-alt' },
        { name: 'Share Experience', path: '/Share-Experience', icon: 'fas fa-share-alt' }
      ]
    };
  }
};
</script>

<style scoped>
.app-header {
  background: linear-gradient(to right, #1e3a8a, #2563eb);
  padding: 0.75rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-wrapper {
  text-decoration: none;
  color: white;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-image {
  width: 60px;
  height: 70px;
  object-fit: contain;
  animation: logoAppear 0.8s ease-out;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin: 0;
  animation: textSlide 0.8s ease-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-menu {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link i {
  font-size: 1.1rem;
  opacity: 0.8;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}

.hamburger-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  position: relative;
  transition: all 0.3s ease;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
}

.hamburger-icon::before {
  top: -8px;
}

.hamburger-icon::after {
  bottom: -8px;
}

.hamburger-icon.open {
  background: transparent;
}

.hamburger-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger-icon.open::after {
  transform: rotate(-45deg);
  bottom: 0;
}

@keyframes logoAppear {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, #1e3a8a, #2563eb);
    padding: 1rem;
    clip-path: circle(0% at top right);
    transition: clip-path 0.4s ease-out;
    flex-direction: column;
  }

  .nav-menu.nav-open {
    clip-path: circle(150% at top right);
  }

  .nav-list {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .nav-link {
    padding: 1rem;
    justify-content: flex-start;
  }

  .logo-image {
    width: 50px;
    height: 60px;
  }

  .logo-text {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .logo-text {
    font-size: 1.3rem;
  }

  .logo-image {
    width: 40px;
    height: 50px;
  }
}
</style>