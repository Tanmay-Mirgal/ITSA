import { IMPACT_STATS } from '../data.js';

export default function Impact() {
  return (
    <section className="impact section" aria-label="Impact">
      <div className="impact-intro">
        <span>02 / IMPACT</span>
        <p>
          We don&rsquo;t inflate the numbers.
          <br />
          We build the next ones.
        </p>
      </div>

      <div className="impact-grid">
        {IMPACT_STATS.map(({ value, label }, index) => (
          <article key={label} className="impact-stat reveal">
            <small>{String(index + 1).padStart(2, '0')}</small>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
