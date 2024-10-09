import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import CitySelection from '../views/CitySelection.vue';
import FraudReport from '../views/FraudReport.vue'; // Import the FraudReport component

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/city-selection',
    name: 'CitySelection',
    component: CitySelection,
  },
  {
    path: '/fraud-report',
    name: 'FraudReport', // Add this route for the Fraud Report
    component: FraudReport,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
