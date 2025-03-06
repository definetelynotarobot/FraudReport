<template>
  <div class="blog-container">
    <!-- Add meta tags -->
    <vue-meta>
      <template v-slot:meta>
        <!-- Canonical URL -->
        <link rel="canonical" :href="canonicalUrl" />
        
        <!-- Open Graph Tags -->
        <meta property="og:title" content="Travel Safety Blog - Tourist Guard" />
        <meta property="og:description" content="Stay informed about latest travel scams and safety tips for tourists worldwide. Expert advice on avoiding common tourist traps and travel fraud." />
        <meta property="og:url" :content="canonicalUrl" />
        <meta property="og:type" content="website" />
        
        <!-- Twitter Card -->
        <meta name="twitter:site" content="@TouristGuards" />
        <meta name="twitter:title" content="Travel Safety Blog - Tourist Guard" />
        <meta name="twitter:description" content="Stay informed about latest travel scams and safety tips for tourists worldwide." />
      </template>
    </vue-meta>
    
    <main class="main-content">
      <!-- Articles Section -->
      <section v-if="activeSection === 'articles'" class="articles">
        <header class="safety-header">
          <h1>Travel Safety Blog: Scam Alerts & Prevention Tips</h1>
          <p class="subtitle">Stay informed about the latest travel scams and learn how to protect yourself while exploring the world.</p>
          <p class="disclaimer">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>This information is provided for general educational purposes only and should not be considered as legal or security advice. Always consult local authorities or legal professionals for specific situations.</span>
          </p>
        </header>

        <nav class="blog-navigation">
          <router-link to="/Share-Experience" class="nav-link">Report Incident</router-link>
          <router-link to="/Avoid" class="nav-link">Safety Resources</router-link>
        </nav>

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

        <section class="related-resources">
          <h2>Useful Resources</h2>
          <ul class="resource-links">
            <li><a href="https://travel.state.gov/content/travel.html" target="_blank" rel="noopener">U.S. Department of State Travel</a></li>
            <li><a href="https://www.who.int/travel-advice" target="_blank" rel="noopener">WHO Travel Advice</a></li>
            <li><router-link to="/safety-tips">Travel Safety Tips</router-link></li>
          </ul>
        </section>
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
    /* eslint-disable */
    canonicalUrl() {
      return `https://touristguard.com${this.$route.path}`;
    },
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
  },
  metaInfo() {
    return {
      title: 'Travel Safety Blog - Tourist Guard',
      meta: [
        { 
          vmid: 'description', 
          name: 'description', 
          content: 'Stay informed about latest travel scams and safety tips for tourists worldwide. Expert advice on avoiding common tourist traps and travel fraud.' 
        }
      ]
    };
  }
};
</script>



<style scoped>
.affiliate-content {
    background: linear-gradient(to right, #1e3a8a, #2563eb);
    color: white;
    border-radius: 10px;
    padding: 10px;
}

.post.affiliate-banner {
  background: linear-gradient(to right, #1e3a8a, #2563eb);
  box-shadow: none;
  padding: 10px;
  margin: 2rem 0;
  cursor: default;
}

.safety-header h1 {
  color: #2563eb;
  font-weight: bold;
}

.disclaimer {
  color: black;
  font-size: 0.9rem;
  max-width: 800px;
  border: #2563eb 1px solid;
  border-radius: 10px;
  display: flex;
  padding: 10px;
}

.disclaimer i {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  margin-right: 10px;
}

.blog-container {
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: 'Inter', sans-serif;
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
  .post-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .notification {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .post:hover {
    transform: none;
  }

  .post-list-move,
  .post-list-enter-active,
  .post-list-leave-active,
  .notification-enter-active,
  .notification-leave-active {
    transition: none;
  }
}

.nav-button:focus,
.filter-button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
article a{
  text-decoration: none;
  background-color :white;
}

/* Add these new styles */
.blog-navigation {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.nav-link {
  color: #2563eb;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #f1f5f9;
}

.related-resources {
  margin-top: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.resource-links {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.resource-links li {
  margin-bottom: 1rem;
}

.resource-links a {
  color: #2563eb;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 0;
}

.resource-links a:hover {
  text-decoration: underline;
}

.subtitle {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 2rem;
}
</style>