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
        {BODIES.map((name, index) => (
          <div key={name}>
            <small>{String(index + 1).padStart(2, '0')}</small>
            <strong>{name}</strong>
            <span>ASSOCIATED NETWORK</span>
          </div>
        ))}
      </div>
    </section>
  );
}
