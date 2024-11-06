<template>
  <div class="blog">
    <h1>Tourist Scam Awareness Blog</h1>

    <section class="intro">
      <p>
        This blog is dedicated to raising awareness about various tourist scams around the world. Our mission is to provide travelers with valuable insights to help them stay safe and informed during their journeys.
      </p>
    </section>

    <section class="posts">
      <article 
        :class="{'post heartbeat': !isClicked, 'post': isClicked}" 
        @click="togglePost('mission')"
      >
        <div class="post-header">
          <h3>🌍 Why We Built This Website</h3>
          <span class="post-date">Published: October 15, 2024</span>
        </div>
        <div class="post-content" v-if="activePost === 'mission'">
          <p>
            In an age where travel is more accessible than ever, the excitement of exploring new destinations can sometimes be overshadowed by the lurking dangers of scams targeting unsuspecting tourists. That's why we decided to create this platform—to empower travelers with essential knowledge about potential scams and frauds they might encounter on their journeys.
          </p>
          <p>
            Our mission is simple: to provide a safe space where travelers can share their experiences, warn others, and learn how to navigate the complexities of tourism with confidence. We believe that informed travelers are safer travelers. Every story shared here contributes to a community-driven resource that can help someone else avoid a costly mistake or, worse, a dangerous situation. 🌟
          </p>
          <p>
            We aim to cover a wide range of scams, from the subtle to the outrageous, and provide practical tips on how to identify and avoid them. Whether you're wandering the bustling streets of a new city or lounging on a tropical beach, we want you to feel empowered and secure in your travels. 
          </p>
          <p>
            Join us in our mission to create a safer travel experience for everyone! If you have tips or stories to share, we invite you to contribute to our growing community. Together, we can make the world of travel a little brighter and a lot safer. ✈️✨
          </p>
        </div>
      </article>
      <article 
        class="post" 
        @click="togglePost('digital')"
      >
        <div class="post-header">
          <h3>🌐 Digital Dangers: Emerging Travel Scams in the Internet Age</h3>
          <span class="post-date">Published: October 22, 2024</span>
        </div>
        <div class="post-content" v-if="activePost === 'digital'">
          <p>
            As technology advances, so do the methods of scammers targeting travelers. Digital travel scams have become increasingly sophisticated, catching even the most cautious tourists off guard.
          </p>
          <p>
            One emerging trend is fake booking websites that look incredibly legitimate. These sites mirror authentic travel platforms, offering seemingly unbeatable deals on accommodations and flights. The catch? Your personal and payment information is stolen, or you arrive at your destination to find no reservation exists.
          </p>
          <p>
            Another growing concern is social media impersonation scams. Scammers create detailed profiles mimicking travel agencies, tour operators, and even individual travelers. They engage potential victims with convincing stories, ultimately attempting to extract money or sensitive information.
          </p>
          <p><b> Protect yourself by: <br>
            - Always verify website authenticity <br>
            - Use secure, reputable booking platforms <br>
            - Be skeptical of deals that seem "too good to be true" <br>
            - Check website security certificates <br>
            - Use credit cards with fraud protection<br></b>
          </p>
        </div>
      </article>

      <!-- Third Post: Cultural Awareness and Scam Prevention -->
      <article 
        class="post" 
        @click="togglePost('cultural')"
      >
        <div class="post-header">
          <h3>🌏 Cultural Intelligence: Your Best Scam Defense</h3>
          <span class="post-date">Published: October 22, 2024</span>
        </div>
        <div class="post-content" v-if="activePost === 'cultural'">
          <p>
            Understanding local customs and cultural nuances isn't just about respect—it's also a powerful tool in preventing travel scams. Many fraudulent schemes exploit tourists' lack of local knowledge and cultural context.
          </p>
          <p>
            Take, for instance, street vendor scams common in tourist-heavy destinations. In some countries, what might seem like a friendly interaction can quickly turn into an aggressive sales pitch or even a sophisticated theft attempt. Knowing local interaction norms can help you navigate these situations confidently.
          </p>
          <p>
            Language barriers often make travelers vulnerable. Scammers may use complex local dialects or rapid speech to confuse and manipulate. Learning basic local phrases and maintaining a polite but firm demeanor can significantly reduce your risk.
          </p>
          <p><b> Tips for cultural scam prevention: <br>
            - Research local customs before traveling<br>
            - Learn basic local language phrases<br>
            - Observe how locals interact<br>
            - Trust your instincts<br>
            - Stay confident and composed<br></b>
          </p>
        </div>
      </article>
    </section>

    <section class="contact">
      <h2 class="cta-title">Get Involved</h2>
      <p>
        If you have experienced a scam or have tips to share, please reach out to us! Your insights can help other travelers stay safe. Send tips at <a href="/Share-Experience">our Share experience page</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ScamBlog',
  data() {
    return {
      activePost: null // Track which post is active
    };
  },
  methods: {
    togglePost(postId) {
      this.activePost = this.activePost === postId ? null : postId;
      this.isClicked = true;
    }
  }
};
</script>

<style scoped>
.blog {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  color: #1e293b;
  background-color: #f3f4f6;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.posts .post {
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1);
  }
}

.heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.3s;
}

h1 {
  text-align: center;
  color: #1e3a8a;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

h2 {
  color: #f97316;
  margin-top: 1.5rem;
  font-size: 1.8rem;
}

.intro,
.contact {
  margin-bottom: 20px;
}

.cta-title {
  color: #1e3a8a;
  font-weight: bold;
  font-family: 'Montserrat';
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: white;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.post-header {
  padding: 10px;
}

.post h3 {
  font-size: 1.5rem;
  color: #1e3a8a;
  margin: 0;
}

.post-content {
  padding: 10px;
}

a {
  color: #3b82f6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
