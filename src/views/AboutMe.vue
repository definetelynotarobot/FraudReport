<template>
    <div class="about-me">
      <h1>About Me</h1>
      <section class="bio">
        <h2>Who I Am</h2>
        <p>
          Hello! I'm Echo, a passionate developer with a keen interest in web technologies and a love for creating engaging user experiences. I believe in the power of code to transform ideas into reality.
        </p>
      </section>
      <section class="background">
        <h2>My Background</h2>
        <p>
          I interned at a major automotive company, where I gained valuable experience in quality assurance and development. My journey has led me to focus on web development, where I enjoy building innovative solutions that make a difference.
        </p>
      </section>
      <section class="interests">
        <h2>My Interests</h2>
        <ul>
          <li>Web Development</li>
          <li>Travel and Exploration</li>
          <li>Gaming and Technology</li>
        </ul>
      </section>
      <section class="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out if you'd like to connect! You can find me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a> or email me at <a href="mailto:youremail@example.com">youremail@example.com</a>.
        </p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutMe',
  };
  </script>
  
  <style scoped>
  .about-me {
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
  
  .bio,
  .background,
  .interests,
  .contact {
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  ul li {
    font-size: 1.1rem;
    color: #1e293b;
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
  
    p, ul li {
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
  
    p, ul li {
      font-size: 0.9rem;
    }
  }
  </style>
  