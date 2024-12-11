<template>
    <a :href="link" target="_blank" class="affiliate-card-link">
      <div class="affiliate-card last-card fade-in">
        <div class="floating-icons">
          <i class="floating-icon fas fa-globe"></i>
          <i class="floating-icon fas fa-map-marked-alt"></i>
          <i class="floating-icon fas fa-umbrella-beach"></i>
          <i class="floating-icon fas fa-suitcase-rolling"></i>
          <i class="floating-icon fas fa-route"></i>
        </div>
        <h3 class="affiliate-title">
          <i class="fas fa-plane-departure"></i> {{ title }}
        </h3>
        <p class="affiliate-description">{{ description }}</p>
        <a :href="link" target="_blank" class="affiliate-button">
          <i class="fas fa-arrow-right"></i> {{ buttonText }}
        </a>
      </div>
    </a>
  </template>
  
  <script>
  export default {
    name: "AffiliateCard",
    props: {
      link: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      buttonText: {
        type: String,
        required: true,
      }
    }
  };
  </script>
  
  <style scoped>
    a {
      text-decoration: none;
    }
  
    .affiliate-card {
      background: #fff5e6;
      border: 1px solid #ffcc80;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      margin: 20px 0;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
    }
  
    .affiliate-card.last-card {
      background: linear-gradient(to right, #1e3a8a, #2563eb);
      border: 1px solid #80d4ff;
    }
  
    .affiliate-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      color: white;
    }
  
    .affiliate-description {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 15px;
    }
  
    .affiliate-button {
      display: inline-block;
      padding: 12px 25px;
      background-color: #fff;
      color: #0073e6;
      text-decoration: none;
      font-weight: bold;
      border-radius: 30px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .affiliate-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: all 0.6s ease;
    }
  
    .affiliate-button:hover {
      transform: translateY(-3px);
      background: linear-gradient(to right, #00C9FF, #92FE9D);
      box-shadow: 0 4px 6px rgba(0, 201, 255, 0.3);
    }
  
    .affiliate-button:hover::before {
      left: 100%;
    }
  
    .affiliate-button i {
      margin-right: 8px;
      transition: transform 0.3s ease;
    }
  
    .affiliate-button:hover i {
      transform: translateX(5px);
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    .fade-in {
      animation: fadeIn 0.8s ease-in-out;
    }
  
    /* Floating Icons Animation */
    @keyframes float {
      0% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(10px, -10px) rotate(15deg); }
      100% { transform: translate(-10px, 10px) rotate(-15deg); }
    }
  
    .floating-icons {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  
    .floating-icon {
      position: absolute;
      color: rgba(255, 255, 255, 0.3);
      animation: float 3s ease-in-out infinite alternate;
      font-size: 30px;
    }
  
    .floating-icon:nth-child(1) { top: 10%; left: 5%; animation-delay: -0.5s; }
    .floating-icon:nth-child(2) { top: 20%; right: 10%; animation-delay: -1s; }
    .floating-icon:nth-child(3) { bottom: 15%; left: 15%; animation-delay: -1.5s; }
    .floating-icon:nth-child(4) { bottom: 25%; right: 5%; animation-delay: -2s; }
    .floating-icon:nth-child(5) { top: 30%; left: 20%; animation-delay: -2.5s; }
  </style>
  