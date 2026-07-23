import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import MenuItems from "./MenuItems";
import logo from "../../assets/logo.png";

const Header = (props) => {
  const { topbarEnable, parentMenu } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [navH, setNavH] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavH(navRef.current.offsetHeight);
    }
  }, [isVisible]);

  return (
    <>
      <header id="react-header" className="es-header">
        {topbarEnable && (
          <div className="es-topbar">
            <div className="container es-topbar__inner">
              <ul className="es-topbar__contact">
                <li>
                  <span className="es-topbar__flag" aria-hidden="true">🇮🇳</span>
                  <a href="tel:+919289441168" aria-label="Call our India office">+91-9289441168</a>
                </li>
                <li>
                  <span className="es-topbar__flag" aria-hidden="true">🇫🇯</span>
                  <a href="tel:+6799404027" aria-label="Call our Fiji office">+679 9404027</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:support@exploresresearchsolutions.in">
                    support@exploresresearchsolutions.in
                  </a>
                </li>
              </ul>
              <p className="es-topbar__tagline">
                Trusted academic research partner &middot; Mon&ndash;Sat,
                9am&ndash;7pm
              </p>
            </div>
          </div>
        )}

        <div
          ref={navRef}
          className={isVisible ? "es-nav es-nav--fixed" : "es-nav"}
        >
          <div className="container es-nav__inner">
            <Link
              to="/"
              className="es-nav__logo"
              aria-label="Explore S Research Solutions — home"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={logo} alt="Explore S Research Solutions" />
            </Link>

            <button
              className={menuOpen ? "es-nav__toggle is-open" : "es-nav__toggle"}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={menuOpen ? "es-nav__menu is-open" : "es-nav__menu"}>
              <ul className="es-nav__links">
                <MenuItems parentMenu={parentMenu} />
              </ul>

              <div className="es-nav__drawer-contact">
                <a href="tel:+919289441168">
                  <span aria-hidden="true">🇮🇳</span>
                  +91-9289441168
                </a>
                <a href="tel:+6799404027">
                  <span aria-hidden="true">🇫🇯</span>
                  +679 9404027
                </a>
                <a href="mailto:support@exploresresearchsolutions.in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  support@exploresresearchsolutions.in
                </a>
              </div>

              <Link
                to="/contact"
                className="es-nav__cta"
                onClick={() => setMenuOpen(false)}
              >
                Apply Online
              </Link>

              <Link
                to="/paynow"
                className="es-nav__cta es-nav__cta--yellow"
                onClick={() => setMenuOpen(false)}
              >
                Pay Now
              </Link>
            </div>
          </div>
        </div>

        {isVisible && <div aria-hidden="true" style={{ height: navH }} />}
      </header>
    </>
  );
};

export default Header;
