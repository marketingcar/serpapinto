import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Loader, PawPrint } from 'lucide-react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const LocationPage = lazy(() => import('@/pages/LocationPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const DynamicGhostPage = lazy(() => import('@/pages/DynamicGhostPage'));

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LoadingSpinner = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
    <div className="relative flex justify-center items-center">
      <Loader className="w-16 h-16 text-[#566e61] animate-spin" />
      <PawPrint className="w-8 h-8 text-[#deb47a] absolute" />
    </div>
    <p className="mt-4 text-lg text-slate-700">Loading...</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/page/:slug" element={<DynamicGhostPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppWidget />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;