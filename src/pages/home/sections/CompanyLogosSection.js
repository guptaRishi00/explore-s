import { useLayoutEffect, useRef } from 'react';
import { fadeUp } from '../../../utils/animations';

// ─── Add company logo images to:  public/companies/
// ─── Each entry: { name: 'Company Name', image: '/companies/filename.png' }
// ─── Both .png and .webp work fine.
const COMPANIES = [
  { name: "TCS", image: "/companies/TCS.NS_BIG.png" },
  { name: "Infosys", image: "/companies/INFY_BIG.png" },
  { name: "Wipro", image: "/companies/Wipro.png" },
  { name: "Accenture", image: "/companies/ACCENTURE_BIG.webp" },
  { name: "Deloitte", image: "/companies/deloitte_BIG.png" },
  { name: "IBM", image: "/companies/IBM.png" },
  { name: "Google", image: "/companies/G_BIG.png" },
  { name: "Amazon", image: "/companies/AMZN_BIG.webp" },
  { name: "Tech Mahindra", image: "/companies/TECHM.NS_BIG.png" },
  { name: "Hexaware", image: "/companies/HEXAWARE.NS_BIG.png" },
  { name: "Capgemini", image: "/companies/CAP.PA_BIG.webp" },
  { name: "Oracle", image: "/companies/ORCL_BIG.png" },
  { name: "KPMG", image: "/companies/kpmg.png" },
  { name: "Dell", image: "/companies/DELL.webp" },
  { name: "Qualcomm", image: "/companies/QCOM_BIG.png" },
  { name: "HSBC", image: "/companies/HSBC_BIG.png" },
  { name: "Cyient", image: "/companies/CYIENT.NS_BIG.webp" },
  { name: "Virtusa", image: "/companies/VRTU_BIG.webp" },
  { name: "Pegasystems", image: "/companies/PEGA_BIG.png" },
  { name: "Honeywell", image: "/companies/HON_BIG.png" },
];

const LogoCard = ({ company }) => (
  <li className="cl-card">
    <img
      src={company.image}
      alt={company.name}
      loading="lazy"
      className="cl-card__img"
    />
  </li>
);

const MarqueeRow = ({ companies, dir }) => (
  <div className="es-community__row cl-row">
    <ul className={`es-community__track es-community__track--${dir}`} role="list">
      {companies.map((c) => <LogoCard key={c.name} company={c} />)}
      {companies.map((c) => <LogoCard key={`${c.name}-dup`} company={c} />)}
    </ul>
  </div>
);

const CompanyLogosSection = () => {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const ctx = fadeUp(root.current, '.cl-row', { stagger: 0.15 });
    return () => ctx?.revert?.();
  }, []);

  const rowOne = COMPANIES.slice(0, Math.ceil(COMPANIES.length / 2));
  const rowTwo = COMPANIES.slice(Math.ceil(COMPANIES.length / 2));

  return (
    <section className="es-section es-community-net cl-section" ref={root} aria-label="Companies our students work at">
      <div className="container">
        <div className="es-section__head" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 className="es-h2">
            Our Students Are Building Successful Careers At{' '}
            <span style={{ color: '#d32f2f' }}>Leading Companies</span>
          </h2>
          <p className="es-section__lead" style={{ maxWidth: '680px', margin: '12px auto 0' }}>
            We are proud to see our students working with some of India's and the world's leading
            organizations. Through quality training, career guidance, and industry-focused learning,
            they have built rewarding careers across multiple sectors.
          </p>
        </div>
      </div>

      <MarqueeRow companies={rowOne} dir="fwd" />
      {rowTwo.length > 0 && <MarqueeRow companies={rowTwo} dir="rev" />}
    </section>
  );
};

export default CompanyLogosSection;
