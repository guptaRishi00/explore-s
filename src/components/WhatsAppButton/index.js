import React from 'react';

// Floating WhatsApp contact button (bottom-left, site-wide).
// Number: +91 9289441168 → wa.me uses the full international form (no +/spaces).
const WHATSAPP_NUMBER = '919289441168';

// Message is tailored to Explore S Research Solutions' actual services so the
// conversation starts with useful context for the team.
const WHATSAPP_MESSAGE =
  "Hi Explore S Research Solutions! 👋 I'm interested in your academic research support — thesis, research paper, data analysis or publication help. Could you please guide me and share the details?";

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      className="es-whatsapp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Explore S on WhatsApp"
    >
      <span className="es-whatsapp__pulse" aria-hidden="true"></span>
      <svg
        className="es-whatsapp__icon"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.003 3C9.38 3 4 8.377 4 15c0 2.09.547 4.13 1.586 5.93L4 29l8.29-1.55A11.94 11.94 0 0 0 16 27c6.623 0 12-5.377 12-12S22.626 3 16.003 3zm0 21.82c-1.79 0-3.545-.48-5.08-1.39l-.364-.216-4.92.92.94-4.79-.237-.38A9.79 9.79 0 0 1 6.18 15c0-5.42 4.41-9.82 9.823-9.82 2.625 0 5.09 1.022 6.944 2.877A9.76 9.76 0 0 1 25.82 15c0 5.42-4.41 9.82-9.817 9.82zm5.39-7.36c-.295-.148-1.746-.86-2.016-.96-.27-.098-.466-.148-.663.148-.196.295-.76.96-.93 1.157-.172.196-.343.22-.638.073-.295-.148-1.246-.46-2.372-1.464-.877-.782-1.47-1.748-1.64-2.043-.172-.295-.018-.454.13-.6.134-.132.295-.344.443-.516.148-.172.196-.295.295-.492.098-.196.05-.368-.025-.516-.073-.148-.663-1.6-.908-2.19-.24-.577-.483-.5-.663-.51l-.565-.01c-.196 0-.516.073-.786.368-.27.295-1.03 1.006-1.03 2.454 0 1.448 1.055 2.847 1.202 3.043.148.196 2.076 3.17 5.03 4.444.703.303 1.252.484 1.68.62.706.224 1.348.192 1.856.116.566-.084 1.746-.713 1.99-1.4.246-.688.246-1.277.172-1.4-.073-.122-.27-.196-.565-.344z" />
      </svg>
      <span className="es-whatsapp__label">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
