import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://www.exploresresearchsolutions.in';
const DEFAULT_DESC =
  'Explore S Research Solutions — trusted PhD research assistance, data analysis, academic writing, and publication support.';

const Seo = ({
  title = 'Explore S Research Solutions',
  description = DEFAULT_DESC,
  path = '/',
  image = `${SITE_URL}/logo512.png`,
  keywords,
  noindex = false,
  jsonLd,
}) => {
  const url = `${SITE_URL}${path}`;
  const robotsContent = noindex ? 'noindex,follow' : 'index,follow';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
