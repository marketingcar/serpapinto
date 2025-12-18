import React from 'react';
import { Helmet } from 'react-helmet';

const GhostPage = ({ page }) => {
  if (!page) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-gray-600">Page not found</p>
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
  } = page;

  const pageTitle = meta_title || title;
  const pageDescription = meta_description || excerpt || '';
  const pageImage = og_image || feature_image || '';
  const ogTitleTag = og_title || pageTitle;
  const ogDescriptionTag = og_description || pageDescription;
  const twitterImageTag = twitter_image || pageImage;
  const twitterTitleTag = twitter_title || pageTitle;
  const twitterDescriptionTag = twitter_description || pageDescription;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />

        {canonical_url && <link rel="canonical" href={canonical_url} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogTitleTag} />
        <meta property="og:description" content={ogDescriptionTag} />
        {pageImage && <meta property="og:image" content={pageImage} />}
        {canonical_url && <meta property="og:url" content={canonical_url} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitleTag} />
        <meta name="twitter:description" content={twitterDescriptionTag} />
        {twitterImageTag && <meta name="twitter:image" content={twitterImageTag} />}

        {/* Dates */}
        {published_at && <meta property="article:published_time" content={published_at} />}
        {updated_at && <meta property="article:modified_time" content={updated_at} />}

        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        {feature_image && (
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src={feature_image}
              alt={title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        )}

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h1>
            {excerpt && (
              <p className="text-xl text-slate-600 leading-relaxed">
                {excerpt}
              </p>
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

export default GhostPage;
