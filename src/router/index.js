import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import CitySelection from '../views/CitySelection.vue';
import FraudReport from '../views/FraudReport.vue'; // Import the FraudReport component
import AboutMe from '@/views/ScamBlog.vue';
import AvoidPrevention from '@/views/AvoidPrevention.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: AboutMe,
  },
  {
    path: '/Scams',
    name: 'scams',
    component: CitySelection,
  },
  {
    path: '/Share-Experience',
    name: 'FraudReport', // Add this route for the Fraud Report
    component: FraudReport,
  },
  {
    path: '/Avoid',
    name: 'AvoidPrevention',
    component: AvoidPrevention,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
