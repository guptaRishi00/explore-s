// Scrolling ticker bar shown just above the Domain Picker section.
// Update the `ITEMS` array to change the announcements.
const ITEMS = [
  "🎓 SEAT CONFIRMING ACROSS 150+ PARTNER UNIVERSITIES",
  "🏆 100% ADMISSION ASSISTANCE — ZERO CONFUSION, ONE COUNSELLOR TILL YOU JOIN",
  "⏰ EARLY SCHOLARSHIP WINDOW CLOSES 15 AUGUST — APPLY NOW",
  "📋 DIRECT ADMISSION OPEN FOR PhD, MASTERS & MEDICAL PROGRAMS",
  "🌍 STUDENTS FROM 35+ COUNTRIES ALREADY ENROLLED THIS CYCLE",
];

const AdmissionTicker = () => (
  <div className="adm-ticker" aria-label="Admission announcements">
    <span className="adm-ticker__badge">● LIVE UPDATE</span>
    <div className="adm-ticker__track-wrap" aria-hidden="true">
      <ul className="adm-ticker__track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <li key={i} className="adm-ticker__item">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default AdmissionTicker;
