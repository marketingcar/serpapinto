import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GhostPage from '@/components/GhostPage';
import { getPageBySlug } from '@/lib/ghost';
import { Loader, PawPrint } from 'lucide-react';

const DynamicGhostPage = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      const fetchedPage = await getPageBySlug(slug);
      setPage(fetchedPage);
      setLoading(false);
    };

    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="relative flex justify-center items-center">
          <Loader className="w-16 h-16 text-[#566e61] animate-spin" />
          <PawPrint className="w-8 h-8 text-[#deb47a] absolute" />
        </div>
        <p className="mt-4 text-lg text-slate-700">Loading page...</p>
      </div>
    );
  }

  return <GhostPage page={page} />;
};

export default DynamicGhostPage;
