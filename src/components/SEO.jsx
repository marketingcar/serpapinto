import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = 'Vet Serpa Pinto - Veterinary Clinic in Porto',
  description = 'Professional veterinary care for your pets in Porto. Expert services, compassionate care, and modern facilities.',
  keywords = 'veterinary, veterinarian, pet care, animal clinic, Porto, vet services, pet health',
  image = 'https://horizons-cdn.hostinger.com/4400acb7-69c4-41bd-987e-d35736fdcde3/ace5e0975e0928fdcf004cae5776e307.png',
  url = 'https://serpapinto.com',
  type = 'website',
  structuredData = null,
}) => {
  const siteUrl = url.startsWith('http') ? url : `https://serpapinto.com${url}`;

  // Default structured data for the organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'Vet Serpa Pinto',
    description: description,
    url: 'https://serpapinto.com',
    telephone: '+351223239804',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Porto',
      addressCountry: 'PT',
    },
    image: image,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  const schemaData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Vet Serpa Pinto" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
