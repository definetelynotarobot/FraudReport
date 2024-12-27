<template>
  <div class="blog-container">
    <main class="main-content">
      <!-- Articles Section -->
      <section v-if="activeSection === 'articles'" class="articles">
        <header class="safety-header">
          <h1>Stay Safe While Exploring the World</h1>
          <p class="disclaimer">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>This information is provided for general educational purposes only and should not be considered as legal or security advice. Always consult local authorities or legal professionals for specific situations.</span>
          </p>
        </header>

        <div class="filters">
          <button 
            v-for="tag in tags" 
            :key="tag"
            @click="toggleFilter(tag)"
            :class="{ 'active-filter': selectedTags.includes(tag) }"
            class="filter-button"
          >
            {{ tag }}
          </button>
        </div>

        <TransitionGroup name="post-list">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="post"
            :class="{ 
              'affiliate-banner': post.type === 'affiliate-banner' 
            }"
          >
            <!-- Regular post rendering -->
            <template v-if="post.type !== 'affiliate-banner'">
              <div class="post-header" @click="navigateToPost(post.title)">
                <div class="post-meta">
                  <h2>{{ post.title }}</h2>
                  <div class="tags">
                    <span v-for="tag in post.tags" :key="tag" class="tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <span class="post-date">{{ post.date }}</span>
              </div>
            </template>

            <!-- Affiliate banner rendering -->
            <template v-else>
              <a class="affiliate-cta-btn" href="https://www.hotels.com/affiliates/tourist_guards/fidelis29">
                <div v-html="post.content" class="affiliate-content"></div>
              </a>
            </template>
          </article>
        </TransitionGroup>
      </section>
    </main>

    <!-- Notification Component -->
    <Transition name="notification">
      <div v-if="notification" class="notification" :class="notification.type">
        {{ notification.message }}
      </div>
    </Transition>
  </div>
</template>


<script>
import blogs from '@/data/blogs.json'; // Import the blog post data from the JSON file

export default {
  name: 'ScamBlog',
  data() {
    return {
      activeSection: 'articles',
      selectedTags: [],
      notification: null,
      tags: ['Digital', 'Cultural', 'Transportation', 'Accommodation', 'Street'],
      newStory: {
        title: '',
        content: '',
        location: '',
        tags: []
      },
      posts: blogs, // Use the imported blog post data
    };
  },
  computed: {
    filteredPosts() {
      if (this.selectedTags.length === 0) return this.posts;
      return this.posts.filter(post => 
        post.type === 'affiliate-banner' || 
        post.tags.some(tag => this.selectedTags.includes(tag))
      );
    }
  },
  methods: {
    navigateToPost(title) {
      // Navigate to the blog detail page using Vue Router
      this.$router.push({ name: 'BlogDetail', params: { title } });
    },
    toggleFilter(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(selectedTag => selectedTag !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
    toggleStoryTag(tag) {
      if (this.newStory.tags.includes(tag)) {
        this.newStory.tags = this.newStory.tags.filter(t => t !== tag);
      } else {
        this.newStory.tags.push(tag);
      }
    },
  }
};
</script>



<style scoped>

.affiliate-content{
    background: linear-gradient(to right, #1e3a8a, #2563eb);
    color:white;
    border-radius: 10px;
    padding:10px;
}

article a{
  text-decoration: none;
  background-color :white;
}

.banner-text {
  flex-grow: 1;
}

.banner-text h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.post.affiliate-banner {
  background: linear-gradient(to right, #1e3a8a, #2563eb);
  box-shadow: none;
  padding: 10px;
  margin: 2rem 0;
  cursor: default;
}

.affiliate-content {
  width: 100%;
}

.safety-header h1{
  color:#2563eb;
  font-weight: bold;
}

.disclaimer {
  color: black;
  font-size: 0.9rem;
  max-width: 800px;
  border:#2563eb 1px solid;
  border-radius: 10px;
  display:flex;
  padding:10px;
  i{
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#ef4444;
    margin-right:10px;
  }
}

.blog-container {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: 'Inter', sans-serif;
}

.navbar {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-button {
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: #64748b;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
}

.nav-button.active {
  color: #2563eb;
}

.main-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 2rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-button.active-filter {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.post {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.post:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.post.expanded {
  cursor: default;
}

.post-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  color: #64748b;
}

.post-content {
  margin-top: 1rem;
  line-height: 1.75;
}

.post-paragraph {
  margin-bottom: 1rem;
}

.tips-section {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.post-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.engagement {
  display: flex;
  gap: 1rem;
}

.engagement-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.engagement-button:hover {
  background: #f8fafc;
}

.tag-selector {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.tag-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 2rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.tag-button.selected {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.notification {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

.notification.success {
  background: #22c55e;
  color: white;
}

.notification.error {
  background: #ef4444;
  color: white;
}

.notification.info {
  background: #3b82f6;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.post-list-move {
  transition: transform 0.5s ease;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
  /*
  .hero {
    padding: 2rem 1rem;
  }*/

  .post-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .engagement {
    justify-content: center;
  }

  .notification {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    text-align: center;
  }
}

/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
  .post:hover {
    transform: none;
  }

  .cta-button:hover {
    transform: none;
  }

  .post-list-move,
  .post-list-enter-active,
  .post-list-leave-active,
  .notification-enter-active,
  .notification-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}

/* Focus States */
.nav-button:focus,
.cta-button:focus,
.filter-button:focus,
.engagement-button:focus,
.tag-button:focus,
.form-input:focus,
.form-textarea:focus,
.submit-button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1d4ed8;
}

</style>