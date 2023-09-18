import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './index.css';

//components
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Loader from 'components/Loader/Loader';

// pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutUsPage/AboutUsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage/BlogPage'));
const ChangeLogPage = lazy(() => import('./pages/ChangeLogPage/ChangeLogPage'));
const ContactPage = lazy(() => import('pages/ContactPage/ContactPage'));
const LiecensesPage = lazy(() => import('pages/LiecensesPage/LiecensesPage'));
const PricingPage = lazy(() => import('pages/PricingPage/PricingPage'));
const ProjectPage = lazy(() => import('pages/ProjectPage/ProjectPage'));
const ProjectDetailsPage = lazy(() =>
  import('pages/ProjectDetailsPage/ProjectDetailsPage')
);
const ProtectionPage = lazy(() =>
  import('pages/ProtectionPage/ProtectionPage')
);
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const ServicesDetailsPage = lazy(() =>
  import('./pages/ServicesDetailsPage/ServicesDetailsPage')
);
const TeamPage = lazy(() => import('pages/TeamPage/TeamPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/change" element={<ChangeLogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/licenses" element={<LiecensesPage />} />
          <Route path="/price" element={<PricingPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/details" element={<ProjectDetailsPage />} />
          <Route path="/protection" element={<ProtectionPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/details" element={<ServicesDetailsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
