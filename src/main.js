import { createApp } from 'vue'; // Use createApp
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App); // Create the app instance
app.use(router); // Use the router
app.mount('#app'); // Mount the app
