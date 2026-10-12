import { LOCATION } from '../data.js';

export default function SystemStrip() {
  return (
    <section className="system-section" aria-label="ITSA at a glance">
      <div className="system-top">
        <span>ITSA / INSTITUTIONAL SYSTEM</span>
        <span>LOCAL TIME / MUMBAI</span>
        <span className="active-dot">SYSTEM STATUS / ACTIVE</span>
      </div>

      <div className="system-word" aria-hidden="true">
        ITSA
      </div>

      <div className="system-grid">
        <div>
          <small>ENTITY</small>
          <strong>
            INFORMATION
            <br />
            TECHNOLOGY
            <br />
            STUDENT ASSOCIATION
          </strong>
        </div>
        <div>
          <small>LOCATION</small>
          <strong>
            VPPCOEVA
            <br />
            SION / MUMBAI
          </strong>
        </div>
        <div>
          <small>OPERATING PRINCIPLES</small>
          <strong>
            TECHNOLOGY
            <br />
            COMMUNITY
            <br />
            INNOVATION
          </strong>
        </div>
        <div>
          <small>IDENTIFIER</small>
          <strong>
            ITSA / 2026
            <br />
            {LOCATION.coordinates[0]}
            <br />
            {LOCATION.coordinates[1]}
          </strong>
        </div>
      </div>
    </section>
  );
}
