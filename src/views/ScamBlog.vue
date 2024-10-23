<template>
  <div class="blog">
    <h1>Tourist Scam Awareness Blog</h1>

    <section class="intro">
      <h2>Welcome to Our Blog</h2>
      <p>
        This blog is dedicated to raising awareness about various tourist scams around the world. Our mission is to provide travelers with valuable insights to help them stay safe and informed during their journeys.
      </p>
    </section>

    <section class="posts">
      
      <article class="post">
        <h3>Why We Built This Website</h3>
        <p>
          This platform was created to empower travelers with information about potential scams and frauds they might encounter. We believe that informed travelers are safer travelers, and our goal is to provide a community-driven resource where you can share experiences and tips.
        </p>
        <a href="#">Read more</a>
      </article>
      <h2>Recent Posts</h2>
      <article class="post">
        <h3>Common Tourist Scams in Major Cities</h3>
        <p>
          Traveling can be an exciting experience, but it's essential to be aware of common scams that target tourists. In this post, we highlight some of the most prevalent scams in popular tourist destinations and how to avoid falling victim to them.
        </p>
        <a href="#">Read more</a>
      </article>

      <article class="post">
        <h3>The Fake Charity Scam</h3>
        <p>
          One of the most heartbreaking scams involves individuals posing as charity workers. Learn how to identify these scams and protect your generosity while traveling.
        </p>
        <a href="#">Read more</a>
      </article>

    </section>

    <section class="contact">
      <h2>Get Involved</h2>
      <p>
        If you have experienced a scam or have tips to share, please reach out to us! Your insights can help other travelers stay safe. Contact us via email at <a href="mailto:youremail@example.com">youremail@example.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ScamBlog',
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
.posts,
.contact {
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.post {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #e5e7eb; /* Light gray border */
  border-radius: 4px;
}

.post h3 {
  font-size: 1.5rem;
  color: #1e3a8a; /* Deep Blue for post titles */
}

a {
  color: #3b82f6; /* Light Blue for links */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Responsiveness */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
