<template>
    <div class="blog-detail-container">
      <div v-if="post" class="blog-detail">
        <header class="post-header">
          <h1>{{ post.title }}</h1>
          <div class="post-meta">
            <span class="post-date">{{ post.date }}</span>
            <div class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </header>
  
        <section class="post-content">
          <!-- Loop through content and render each section -->
          <div v-for="(section, index) in post.content" :key="index" class="content-section">
            <h2>{{ section.subtitle }}</h2>
            <p>{{ section.text }}</p>
            
            <!-- Render image if available -->
            <img v-if="section.image" :src="section.image" :alt="section.subtitle" class="content-image" />
          </div>
  
          <!-- Render the tips section if available -->
          <div v-if="post.tips" class="tips-section">
            <h4>Key Tips:</h4>
            <ul>
                <li v-for="(tip, index) in post.tips" :key="index" class="tip-item">
    <strong>{{ tip.tip_title }}:</strong> <span v-html="tip.tip"></span>
  </li>
            </ul>
          </div>
        </section>
  
        <footer class="post-footer">
          <div class="engagement">
            <button @click="sharePost(post.id)" class="engagement-button">
              Share
            </button>
          </div>
        </footer>
      </div>
  
      <!-- Loading state or error -->
      <div v-else class="loading">Loading...</div>
    </div>
  </template>
  
  <script>
  import blogs from '@/data/blogs.json'; // Import the blog posts
  
  export default {
    name: 'BlogDetail',
    data() {
      return {
        post: null, // Store the current post
      };
    },
    computed: {
      // Find the blog post based on the title in the URL
      postTitle() {
        return this.$route.params.title;
      },
    },
    watch: {
      // Watch for changes in the route to load a new post
      '$route.params.title': 'loadPost',
    },
    created() {
      // Load the post when the component is created
      this.loadPost();
    },
    methods: {
      loadPost() {
        // Find the post by its title
        this.post = blogs.find(post => post.title === decodeURIComponent(this.postTitle));
      },
      sharePost() {
        const post = this.post;
        if (!post) {
          console.error('Post not found.');
          return;
        }
  
        const shareData = {
          title: post.title,
          text: post.content[0], // First paragraph as a preview
          url: `${window.location.origin}/blog/${encodeURIComponent(post.title)}`
        };
  
        if (navigator.share) {
          // Use the Web Share API
          navigator.share(shareData)
            .then(() => console.log('Post shared successfully!'))
            .catch(err => console.error('Sharing failed:', err));
        } else {
          // Fallback: Copy the URL to clipboard
          navigator.clipboard.writeText(shareData.url)
            .then(() => console.log('Post link copied to clipboard!'))
            .catch(err => console.error('Copying failed:', err));
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-detail-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, sans-serif;
  }
  
  .post-header h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  
  .post-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .post-date {
    color: #666;
    font-size: 0.9rem;
  }
  
  .tags {
    display: flex;
    gap: 0.5rem;
  }
  
  .tag {
    background-color: #f3f4f6;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    color: #4b5563;
  }
  
  .post-content {
    line-height: 1.8;
    color: #374151;
  }
  
  .post-image {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
  }
  
  .tips-section {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #f9fafb;
    border-radius: 0.5rem;
  }
  
  .tips-section h4 {
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  
  .tip-item {
    margin-bottom: 0.5rem;
  }
  
  .post-footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
    text-align: center;
  }
  
  .engagement-button {
    background-color: #3b82f6;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .engagement-button:hover {
    background-color: #2563eb;
  }
  
  .loading {
    text-align: center;
    color: #6b7280;
    font-size: 1.125rem;
    padding: 4rem 0;
  }
  </style>
  