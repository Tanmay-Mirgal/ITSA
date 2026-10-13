import Lines from './Lines.jsx';
import SpotlightCard from './reactbits/SpotlightCard.jsx';
import { FLAT_SPOTLIGHT } from './spotlight.js';
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
          <SpotlightCard
            as="article"
            key={label}
            className={main ? 'live-main' : undefined}
            {...FLAT_SPOTLIGHT}
            spotlightColor="#4cd8f8"
            intensity={0.12}
          >
            <span>{label}</span>
            <strong>
              <Lines lines={title} />
            </strong>
            <p>{body}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
