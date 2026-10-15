import { BODIES } from '../data.js';

export default function Bodies() {
  return (
    <section className="bodies" aria-labelledby="bodies-heading">
      <div>
        <span>08 / PROFESSIONAL BODIES</span>
        <h2 id="bodies-heading">
          CONNECTED
          <br />
          BEYOND THE
          <br />
          CLASSROOM.
        </h2>
      </div>

      <div className="body-row">
        {BODIES.map((body, index) => (
          <div key={body.name} className="body-card">
            <div className="body-card-top">
              <small>{String(index + 1).padStart(2, '0')}</small>
              <div className="committee-logo-wrapper">
                <img
                  src={body.logo}
                  alt={body.alt}
                  className="committee-logo-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="body-card-bottom">
              <strong>{body.name}</strong>
              <span>ASSOCIATED NETWORK</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
