import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToHash — smooth-scrolls to the element matching location.hash.
 * Only acts when a hash is present; does NOT fight LoadTop (which only
 * listens to pathname changes).
 */
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait a tick so the page has rendered / navigated
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
    return () => clearTimeout(id);
  }, [hash, pathname]);

  return null;
}

export default ScrollToHash;
