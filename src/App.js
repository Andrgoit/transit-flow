import { Routes, Route } from 'react-router-dom';

//components
import SharedLayout from 'components/SharedLayout/SharedLayout';

// pages
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutUsPage/AboutUsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ChangeLogPage from './pages/ChangeLogPage/ChangeLogPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import LiecensesPage from 'pages/LiecensesPage/LiecensesPage';
import PricingPage from 'pages/PricingPage/PricingPage';
import ProjectPage from 'pages/ProjectPage/ProjectPage';
import ProjectDetailsPage from 'pages/ProjectDetailsPage/ProjectDetailsPage';
import ProtectionPage from 'pages/ProtectionPage/ProtectionPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ServicesDetailsPage from './pages/ServicesDetailsPage/ServicesDetailsPage';
import TeamPage from 'pages/TeamPage/TeamPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
