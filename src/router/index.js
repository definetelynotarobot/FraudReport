import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import CitySelection from '../views/CitySelection.vue';
import FraudReport from '../views/FraudReport.vue'; // Import the FraudReport component
import AboutMe from '@/views/ScamBlog.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'; // Adjust the path as necessary
import AvoidPrevention from '@/views/AvoidPrevention.vue';
import TermsOfUse from '@/views/TermsOfUse.vue';

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
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/terms-of-use',
    name: 'TermsOfUse',
    component: TermsOfUse
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
