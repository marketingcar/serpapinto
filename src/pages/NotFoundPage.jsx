import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Serpa Pinto Veterinary Clinic</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Helmet>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="bg-white p-12 rounded-2xl shadow-2xl max-w-lg w-full"
        >
          <AlertTriangle className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-6xl font-extrabold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Page Not Found</h2>
          <p className="text-slate-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <Home className="mr-2 h-5 w-5" />
              Go Back Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;