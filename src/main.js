import { createApp } from 'vue'; // Use createApp
import App from './App.vue';
import router from './router';
import VueGtag from 'vue-gtag';
import '@fortawesome/fontawesome-free/css/all.css';
import { createHead } from '@vueuse/head';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


const app = createApp(App); // Create the app instance
const head = createHead(); // Create the head manager
app.use(head);

if (process.env.NODE_ENV === 'production') {
  app.use(VueGtag, {
    config: { id: process.env.VUE_APP_GA_ID }, 
  });
}
app.use(router); 
app.mount('#app'); // Mount the app
