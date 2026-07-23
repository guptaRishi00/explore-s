import { useEffect } from 'react';

// Live Chat (Tawk.to) — real-time messaging widget, loaded site-wide.
//
// SETUP (client): create a free property at https://dashboard.tawk.to, then
// copy the widget src from Administration → Channels → Chat Widget. It looks
// like:  https://embed.tawk.to/<PROPERTY_ID>/<WIDGET_ID>
// Put it in a `.env` file at the project root as:
//   REACT_APP_TAWK_SRC=https://embed.tawk.to/<PROPERTY_ID>/<WIDGET_ID>
// and rebuild. Until then the widget stays dormant (nothing is injected).
const TAWK_SRC = process.env.REACT_APP_TAWK_SRC || '';

const LiveChat = () => {
  useEffect(() => {
    if (!TAWK_SRC) return;                       // not configured yet — do nothing
    if (document.getElementById('tawk-to-script')) return; // avoid double-inject

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s = document.createElement('script');
    s.id = 'tawk-to-script';
    s.async = true;
    s.src = TAWK_SRC;
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.body.appendChild(s);
  }, []);

  return null; // Tawk injects its own floating widget (bottom-right by default)
};

export default LiveChat;
