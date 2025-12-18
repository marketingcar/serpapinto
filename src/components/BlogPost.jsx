import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const BlogPost = ({ post }) => {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-gray-600">Post not found</p>
      </div>
    );
  }

  const {
    title,
    html,
    excerpt,
    feature_image,
    meta_title,
    meta_description,
    og_image,
    og_title,
    og_description,
    twitter_image,
    twitter_title,
    twitter_description,
    published_at,
    updated_at,
    canonical_url,
    reading_time,
    primary_author,
    primary_tag,
  } = post;

  const pageTitle = meta_title || title;
  const pageDescription = meta_description || excerpt || '';
  const pageImage = og_image || feature_image || '';
  const ogTitleTag = og_title || pageTitle;
  const ogDescriptionTag = og_description || pageDescription;
  const twitterImageTag = twitter_image || pageImage;
  const twitterTitleTag = twitter_title || pageTitle;
  const twitterDescriptionTag = twitter_description || pageDescription;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {canonical_url && <link rel="canonical" href={canonical_url} />}

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitleTag} />
        <meta property="og:description" content={ogDescriptionTag} />
        {pageImage && <meta property="og:image" content={pageImage} />}
        {canonical_url && <meta property="og:url" content={canonical_url} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitleTag} />
        <meta name="twitter:description" content={twitterDescriptionTag} />
        {twitterImageTag && <meta name="twitter:image" content={twitterImageTag} />}

        {/* Article metadata */}
        {published_at && <meta property="article:published_time" content={published_at} />}
        {updated_at && <meta property="article:modified_time" content={updated_at} />}
        {primary_author && <meta property="article:author" content={primary_author.name} />}
        {primary_tag && <meta property="article:tag" content={primary_tag.name} />}

        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            description: pageDescription,
            image: pageImage,
            datePublished: published_at,
            dateModified: updated_at,
            author: primary_author
              ? {
                  '@type': 'Person',
                  name: primary_author.name,
                }
              : undefined,
          })}
        </script>
      </Helmet>

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#566e61] hover:text-[#deb47a] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {feature_image && (
            <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
              <img
                src={feature_image}
                alt={title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
              {published_at && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={published_at}>{formatDate(published_at)}</time>
                </div>
              )}
              {reading_time && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{reading_time} min read</span>
                </div>
              )}
            </div>

            {excerpt && (
              <p className="text-xl text-slate-600 leading-relaxed">
                {excerpt}
              </p>
            )}

            {primary_author && (
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-200">
                {primary_author.profile_image && (
                  <img
                    src={primary_author.profile_image}
                    alt={primary_author.name}
                    className="w-12 h-12 rounded-full"
                    loading="lazy"
                  />
                )}
                <div>
                  <p className="font-semibold text-slate-900">{primary_author.name}</p>
                  {primary_author.bio && (
                    <p className="text-sm text-slate-600">{primary_author.bio}</p>
                  )}
                </div>
              </div>
            )}
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-[#566e61] prose-strong:text-slate-900 prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
    </>
  );
};

export default BlogPost;
