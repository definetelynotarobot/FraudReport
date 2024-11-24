<template>
  <div class="blog-container">
    <main class="main-content">
      <!-- Hero Section -->
      <section v-if="activeSection === 'home'" class="hero">
        <h2>Stay Safe While Exploring the World</h2>
        <p class="hero-text">
          Join our community of informed travelers sharing experiences and tips 
          to prevent tourist scams worldwide.
        </p>
        <button @click="activeSection = 'articles'" class="cta-button">
          Read Latest Stories
        </button>
      </section>

      <!-- Articles Section -->
      <section v-if="activeSection === 'articles'" class="articles">
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
            :class="{ expanded: activePost === post.id }"
            @click="togglePost(post.id)"
          >
            <div class="post-header">
              <div class="post-meta">
                <h3>{{ post.title }}</h3>
                <div class="tags">
                  <span v-for="tag in post.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
              <span class="post-date">{{ post.date }}</span>
            </div>

            <Transition name="fade">
              <div v-if="activePost === post.id" class="post-content">
                <p v-for="(paragraph, index) in post.content" 
                   :key="index"
                   class="post-paragraph"
                >
                  {{ paragraph }}
                </p>
                <div v-if="post.tips" class="tips-section">
                  <h4>Key Tips:</h4>
                  <ul>
                    <li v-for="(tip, index) in post.tips" 
                        :key="index"
                        class="tip-item"
                    >
                      {{ tip }}
                    </li>
                  </ul>
                </div>
                <div class="post-footer">
                  <div class="engagement">
                    <button @click.stop="likePost(post.id)" 
                            class="engagement-button"
                    >
                      👍 {{ post.likes }}
                    </button>
                    <button @click.stop="sharePost(post.id)"
                            class="engagement-button"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
          </article>
        </TransitionGroup>
      </section>

      <!-- Share Story Section -->
      <section v-if="activeSection === 'share story'" class="share-story">
        <h2>Share Your Experience</h2>
        <form @submit.prevent="submitStory" class="story-form">
          <div class="form-group">
            <label>Title</label>
            <input v-model="newStory.title" required class="form-input" />
          </div>
          <div class="form-group">
            <label>Your Story</label>
            <textarea 
              v-model="newStory.content" 
              required 
              class="form-textarea"
              rows="5"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Location</label>
            <input v-model="newStory.location" required class="form-input" />
          </div>
          <div class="form-group">
            <label>Tags</label>
            <div class="tag-selector">
              <button 
                v-for="tag in tags"
                :key="tag"
                type="button"
                @click="toggleStoryTag(tag)"
                :class="{ 'selected': newStory.tags.includes(tag) }"
                class="tag-button"
              >
                {{ tag }}
              </button>
            </div>
          </div>
          <button type="submit" class="submit-button">Share Story</button>
        </form>
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
export default {
  name: 'ScamAwarenessBlog',
  data() {
    return {
      activeSection: 'articles',
      activePost: null,
      selectedTags: [],
      notification: null,
      tags: ['Digital', 'Cultural', 'Transportation', 'Accommodation', 'Street'],
      newStory: {
        title: '',
        content: '',
        location: '',
        tags: []
      },
      posts: [
        {
          id: 1,
          title: '🌐 Digital Dangers: Emerging Travel Scams in the Internet Age',
          date: 'October 22, 2024',
          tags: ['Digital'],
          likes: 45,
          content: [
            'As technology advances, so do the methods of scammers targeting travelers. Digital travel scams have become increasingly sophisticated, catching even the most cautious tourists off guard.',
            'One emerging trend is fake booking websites that look incredibly legitimate. These sites mirror authentic travel platforms, offering seemingly unbeatable deals on accommodations and flights.',
            'Another growing concern is social media impersonation scams. Scammers create detailed profiles mimicking travel agencies, tour operators, and even individual travelers.'
          ],
          tips: [
            'Always verify website authenticity',
            'Use secure, reputable booking platforms',
            'Be skeptical of deals that seem "too good to be true"',
            'Check website security certificates',
            'Use credit cards with fraud protection'
          ]
        },
        {
          id: 2,
          title: '🌏 Cultural Intelligence: Your Best Scam Defense',
          date: 'October 22, 2024',
          tags: ['Cultural', 'Street'],
          likes: 38,
          content: [
            "Understanding local customs and cultural nuances isn't just about respect—it's also a powerful tool in preventing travel scams.",
            "Many fraudulent schemes exploit tourists' lack of local knowledge and cultural context.",
            "Language barriers often make travelers vulnerable. Scammers may use complex local dialects or rapid speech to confuse and manipulate."
          ],
          tips: [
            'Research local customs before traveling',
            'Learn basic local language phrases',
            'Observe how locals interact',
            'Trust your instincts',
            'Stay confident and composed'
          ]
        },
        {
          id: 3,
          title: '🚕 Transportation Tricks: Avoiding Taxi and Rental Scams',
          date: 'November 1, 2024',
          tags: ['Transportation'],
          likes: 62,
          content: [
            "Transportation scams are among the most common pitfalls for travelers, often occurring when we're most vulnerable – just after arriving in a new destination.",
            "Unlicensed taxis, rigged meters, and long-hauling (taking unnecessarily long routes) are classic schemes that continue to trap unwary tourists.",
            "Rental car scams have also evolved, with some companies charging for pre-existing damage or adding hidden fees that significantly inflate the final bill.",
            "The rise of ride-sharing hasn't eliminated these risks – some scammers now pose as legitimate drivers on popular platforms, using fake apps and profiles."
          ],
          tips: [
            'Only use official taxi stands at airports and stations',
            'Verify ride-share driver and car details before entering',
            'Take photos of rental cars before and after use',
            'Research typical taxi rates for common routes',
            'Always ask for a meter or agree on a price beforehand'
          ]
        },
        {
          id: 4,
          title: '🏨 Accommodation Alert: Hotel and Rental Property Scams',
          date: 'November 5, 2024',
          tags: ['Accommodation', 'Digital'],
          likes: 51,
          content: [
            'The rise of vacation rental platforms has created new opportunities for scammers to target travelers seeking authentic local experiences.',
            'Fake listings with stolen photos and too-good-to-be-true prices are increasingly sophisticated, often including detailed descriptions and fake reviews.',
            'Some scammers now create duplicate listings of legitimate properties, intercepting communications and payments between real hosts and guests.',
            "Even traditional hotels aren't immune, with some properties hiding resort fees, charging for 'complimentary' services, or misrepresenting their locations and amenities."
          ],
          tips: [
            'Book through verified platforms with buyer protection',
            'Be wary of hosts pushing off-platform communication',
            'Verify property addresses through multiple sources',
            'Read recent reviews carefully, especially negative ones',
            'Screenshot all listings and communication for reference'
          ]
        },
        {
          id: 5,
          title: '🍽️ Food and Restaurant Scams: Dining with Caution',
          date: 'November 10, 2024',
          tags: ['Food', 'Cultural'],
          likes: 43,
          content: [
            'Food-related scams can not only ruin your travel budget but also potentially affect your health and safety.',
            'Tourist-trap restaurants often employ various tactics: having staff lure passersby, hiding prices, adding automatic "tourist charges," or serving different portions to locals and tourists.',
            'Street food vendors might use rigged scales or swap premium ingredients for cheaper alternatives after showing you the original product.',
            'Some establishments even run elaborate schemes where "friendly locals" recommend their restaurant, leading to grossly inflated bills.'
          ],
          tips: [
            'Research restaurants in advance when possible',
            'Always check menu prices before ordering',
            'Ask for itemized bills and verify charges',
            'Be wary of overly pushy restaurant touts',
            'Observe where locals eat and follow their lead'
          ]
        },
        {
          id: 6,
          title: '🛍️ Shopping Scams: From Markets to Luxury Stores',
          date: 'November 15, 2024',
          tags: ['Shopping', 'Street'],
          likes: 35,
          content: [
            'Shopping scams remain one of the most prevalent tourist traps, evolving to target both budget-conscious travelers and luxury shoppers.',
            'Counterfeit goods are becoming increasingly sophisticated, with some fake markets even providing "authentic" receipts and fake certificates of authenticity.',
            'The ancient art of bargaining has been weaponized in some tourist areas, with vendors using psychological tactics and fake "wholesale" prices to create artificial anchors.',
            'Even legitimate-looking luxury stores in tourist areas sometimes sell authentic-looking counterfeits, especially in areas known for shopping tourism.'
          ],
          tips: [
            'Research typical prices for desired items beforehand',
            'Be extremely cautious with street vendor electronics',
            'Learn basic bargaining phrases in local language',
            'Keep receipts and credit card slips for all purchases',
            'Verify luxury goods at official brand stores when possible'
          ]
        },
        {
          id: 7,
          title: '📱 Tech-Savvy Travel: Protecting Your Digital Life Abroad',
          date: 'November 20, 2024',
          tags: ['Digital', 'Cultural'],
          likes: 55,
          content: [
            'As travelers become more dependent on technology, cybercriminals are developing increasingly sophisticated methods to exploit digital vulnerabilities.',
            'Public Wi-Fi networks in tourist areas are often compromised, with hackers setting up legitimate-looking networks to intercept personal data.',
            'Digital pickpockets now use RFID scanners to steal credit card information from unsuspecting tourists in crowded areas.',
            'Some scammers have even started targeting travelers through popular travel apps and social media platforms, using location data to make their approaches more convincing.'
          ],
          tips: [
            'Use a reliable VPN when connecting to public Wi-Fi',
            'Enable two-factor authentication on all accounts',
            'Use RFID-blocking wallets for credit cards',
            'Download apps only from official stores',
            'Avoid conducting sensitive transactions on public networks'
          ]
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      if (this.selectedTags.length === 0) return this.posts;
      return this.posts.filter(post => 
        post.tags.some(tag => this.selectedTags.includes(tag))
      );
    }
  },
  methods: {
    togglePost(postId) {
      this.activePost = this.activePost === postId ? null : postId;
    },
    toggleFilter(tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag);
      } else {
        this.selectedTags.push(tag);
      }
    },
    likePost(postId) {
      const post = this.posts.find(p => p.id === postId);
      if (post) {
        post.likes++;
        this.showNotification('Thanks for your feedback!', 'success');
      }
    },
    toggleStoryTag(tag) {
      if (this.newStory.tags.includes(tag)) {
        this.newStory.tags = this.newStory.tags.filter(t => t !== tag);
      } else {
        this.newStory.tags.push(tag);
      }
    },
    submitStory() {
      // Simulate story submission
      this.showNotification('Your story has been submitted for review!', 'success');
      this.newStory = {
        title: '',
        content: '',
        location: '',
        tags: []
      };
    },
    showNotification(message, type = 'info') {
      this.notification = { message, type };
      setTimeout(() => {
        this.notification = null;
      }, 3000);
    }
  }
}
</script>

<style scoped>
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

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 1rem;
  color: white;
  margin-bottom: 2rem;
}

.hero-text {
  max-width: 600px;
  margin: 1rem auto;
  font-size: 1.25rem;
  line-height: 1.75;
}

.cta-button {
  background-color: white;
  color: #2563eb;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
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

.tip-item {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.tip-item::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: #2563eb;
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

.story-form {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

.tag-selector {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
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

.submit-button {
  width: 100%;
  padding: 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-button:hover {
  background: #1d4ed8;
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

/* Transitions */
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

/* Responsive Design */
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

  .hero {
    padding: 2rem 1rem;
  }

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
  background: #94a3b8;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

/* Print Styles */
@media print {
  .navbar,
  .filters,
  .engagement,
  .notification {
    display: none;
  }

  .post {
    break-inside: avoid;
    box-shadow: none;
  }

  .main-content {
    margin: 0;
    padding: 0;
  }
}
</style>