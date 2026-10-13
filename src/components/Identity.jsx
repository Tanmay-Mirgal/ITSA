import TechHost from './TechHost.jsx';
import { LOCATION } from '../data.js';

export default function Identity() {
  return (
    <section className="identity" aria-label="ITSA identity">
      <div className="identity-meta">
        <span>ITSA / IDENTITY SYSTEM / 2026</span>
        <span>{LOCATION.place}</span>
      </div>

      <TechHost accent="#f4f3f7" aria-hidden="true">
        <div className="identity-word" data-tech-line data-tech-color="#f4f3f7">
          ITSA
        </div>
      </TechHost>

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
