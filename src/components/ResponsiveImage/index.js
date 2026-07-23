import React from 'react';

const ResponsiveImage = ({ src, alt, webp, width, height, className, eager = false }) => (
  <picture>
    {webp && <source type="image/webp" srcSet={webp} />}
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
    />
  </picture>
);

export default ResponsiveImage;
