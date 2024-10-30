<template>
  <div class="blog">
    <h1>Tourist Scam Awareness Blog</h1>

    <section class="intro">
      <p>
        This blog is dedicated to raising awareness about various tourist scams around the world. Our mission is to provide travelers with valuable insights to help them stay safe and informed during their journeys.
      </p>
    </section>

    <section class="posts">
  <article class="post heartbeat" @click="togglePost" :class="{ 'is-clickable': true }">
    <div class="post-header">
      <h3>🌍 Why We Built This Website ?</h3>
    </div>
    <div class="post-content" v-if="activePost">
      <p>
        In an age where travel is more accessible than ever, the excitement of exploring new destinations can sometimes be overshadowed by the lurking dangers of scams targeting unsuspecting tourists. That's why we decided to create this platform—to empower travelers with essential knowledge about potential scams and frauds they might encounter on their journeys.
      </p>
      <p>
        Our mission is simple: to provide a safe space where travelers can share their experiences, warn others, and learn how to navigate the complexities of tourism with confidence. We believe that informed travelers are safer travelers. Every story shared here contributes to a community-driven resource that can help someone else avoid a costly mistake or, worse, a dangerous situation. 🌟
      </p>
      <p>
        We aim to cover a wide range of scams, from the subtle to the outrageous, and provide practical tips on how to identify and avoid them. Whether you’re wandering the bustling streets of a new city or lounging on a tropical beach, we want you to feel empowered and secure in your travels. 
      </p>
      <p>
        Join us in our mission to create a safer travel experience for everyone! If you have tips or stories to share, we invite you to contribute to our growing community. Together, we can make the world of travel a little brighter and a lot safer. ✈️✨
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
      activePost: false // Track whether the post is currently active
    };
  },
  methods: {
    togglePost() {
      // Toggle the active post; close it if it's already open
      this.activePost = !this.activePost;
    }
  }
};
</script>

<style scoped>
.blog {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  color: #1e293b; /* Text color: Slate */
  background-color: #f3f4f6; /* Light Gray background */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.posts .post {
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.2s;
}

.posts .post.is-clickable:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
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
  color: #1e3a8a; /* Deep Blue for headers */
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

h2 {
  color: #f97316; /* Orange for subheaders */
  margin-top: 1.5rem;
  font-size: 1.8rem;
}

.intro,
.contact {
  margin-bottom: 20px;
}
.cta-title{
  color:#1e3a8a;
  font-weight: bold;
  font-family: 'Montserrat';
}
.posts {
  display: flex;
  flex-direction: column; /* Single column for the post */
  gap: 20px; /* Space between posts */
}

.post {
  padding: 10px;
  border: 1px solid #e5e7eb; /* Light gray border */
  border-radius: 12px;
  background-color: white; /* White background for each post */
  cursor: pointer; /* Show pointer cursor on hover */
  transition: box-shadow 0.3s ease;
}

.post-header {
  padding: 10px;
}

.post h3 {
  font-size: 1.5rem;
  color: #1e3a8a; /* Deep Blue for post titles */
  margin: 0;
}

.post-content {
  padding: 10px;
}

a {
  color: #3b82f6; /* Light Blue for links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
