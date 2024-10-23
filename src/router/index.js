import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import CitySelection from '../views/CitySelection.vue';
import FraudReport from '../views/FraudReport.vue'; // Import the FraudReport component
import AboutMe from '@/views/ScamBlog.vue';

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
    path: '/scams',
    name: 'scams',
    component: CitySelection,
  },
  {
    path: '/report-scams',
    name: 'FraudReport', // Add this route for the Fraud Report
    component: FraudReport,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
