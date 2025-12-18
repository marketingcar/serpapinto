import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogList = ({ posts }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-600 text-lg">No blog posts available yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {post.feature_image && (
            <Link to={`/blog/${post.slug}`}>
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={post.feature_image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </Link>
          )}

          <div className="p-6">
            {post.primary_tag && (
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#566e61] bg-emerald-100 rounded-full mb-3">
                {post.primary_tag.name}
              </span>
            )}

            <Link to={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-[#566e61] transition-colors">
                {post.title}
              </h2>
            </Link>

            {post.excerpt && (
              <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
              {post.published_at && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <time dateTime={post.published_at}>
                    {formatDate(post.published_at)}
                  </time>
                </div>
              )}
              {post.reading_time && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.reading_time} min read</span>
                </div>
              )}
            </div>

            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center text-[#566e61] hover:text-[#deb47a] font-semibold transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
