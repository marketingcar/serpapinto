import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import BlogList from '@/components/BlogList';
import { getPosts } from '@/lib/ghost';
import { Loader, PawPrint } from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="relative flex justify-center items-center">
          <Loader className="w-16 h-16 text-[#566e61] animate-spin" />
          <PawPrint className="w-8 h-8 text-[#deb47a] absolute" />
        </div>
        <p className="mt-4 text-lg text-slate-700">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Vet Serpa Pinto</title>
        <meta
          name="description"
          content="Read the latest news, tips, and insights about pet care and veterinary services."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Vet Serpa Pinto" />
        <meta property="og:description" content="Read the latest news, tips, and insights about pet care and veterinary services." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Vet Serpa Pinto" />
        <meta name="twitter:description" content="Read the latest news, tips, and insights about pet care and veterinary services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Expert advice, pet care tips, and the latest veterinary insights
            </p>
          </header>

          <BlogList posts={posts} />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
