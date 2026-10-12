import Lines from './Lines.jsx';
import { LIVE_MODULES } from '../data.js';

export default function LiveNow() {
  return (
    <section className="live-section" aria-labelledby="live-heading">
      <div className="live-title">
        <span className="active-dot">LIVE ITSA / NOW</span>
        <h2 id="live-heading">
          WHAT&rsquo;S
          <br />
          HAPPENING
          <br />
          <em>AT ITSA.</em>
        </h2>
      </div>

      <div className="live-modules">
        {LIVE_MODULES.map(({ label, title, body, main }) => (
          <article key={label} className={main ? 'live-main' : undefined}>
            <span>{label}</span>
            <strong>
              <Lines lines={title} />
            </strong>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
