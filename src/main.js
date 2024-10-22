import { createApp } from 'vue'; // Use createApp
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import { createHead } from '@vueuse/head';
/* import VueGtag from 'vue-gtag';

//GOOGLE ANALYTICS
Vue.use(VueGtag, {

  config: {

    id: process.env.GOOGLE_ANALYTICS_PROPERTY_ID

  }

});*/

const app = createApp(App); // Create the app instance
const head = createHead(); // Create the head manager
app.use(head);
app.use(router); // Use the router
app.mount('#app'); // Mount the app
