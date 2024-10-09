import { createApp } from 'vue'; // Use createApp
import App from './App.vue';
import router from './router';

const app = createApp(App); // Create the app instance
app.use(router); // Use the router
app.mount('#app'); // Mount the app
