import { LOCATION } from '../data.js';

export default function Identity() {
  return (
    <section className="identity" aria-label="ITSA identity">
      <div className="identity-meta">
        <span>ITSA / IDENTITY SYSTEM / 2026</span>
        <span>{LOCATION.place}</span>
      </div>

      <div className="identity-word" aria-hidden="true">
        ITSA
      </div>

      <div className="identity-bottom">
        <p>
          INFORMATION TECHNOLOGY
          <br />
          STUDENT ASSOCIATION
        </p>
        <p>
          CURIOUS · TECHNICAL · CREATIVE
          <br />
          STUDENT-DRIVEN · CONNECTED
        </p>
        <p className="active-dot">SYSTEM / ACTIVE</p>
      </div>
    </section>
  );
}
