import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

//components
import SharedLayout from './components/SharedLayout/SharedLayout';
import Loader from './components/Loader/Loader';

// pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutUsPage/AboutUsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage/BlogPage'));
const BlogDetailsPage = lazy(() =>
  import('./pages/BlogDetailsPage/BlogDetailsPage')
);
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const PricingPage = lazy(() => import('./pages/PricingPage/PricingPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage/ProjectPage'));
const ProjectDetailsPage = lazy(() =>
  import('./pages/ProjectDetailsPage/ProjectDetailsPage')
);
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const ServicesDetailsPage = lazy(() =>
  import('./pages/ServicesDetailsPage/ServicesDetailsPage')
);
const TeamPage = lazy(() => import('./pages/TeamPage/TeamPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/details" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/price" element={<PricingPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/details" element={<ProjectDetailsPage />} />
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
