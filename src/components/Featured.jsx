import Button from './Button.jsx';
import MetaLabel from './MetaLabel.jsx';
import CountUp from './reactbits/CountUp.jsx';
import DecryptedText from './reactbits/DecryptedText.jsx';
import { CONTACT, FEATURED_FACTS } from '../data.js';

export default function Featured() {
  return (
    <section className="featured section" id="events">
      <div className="feature-top">
        <span>
          <MetaLabel>03 / FEATURED EVENT</MetaLabel>
        </span>
        <span>16—18 MARCH 2026</span>
        <span>VPPCOE · MUMBAI</span>
      </div>

      <div className="feature-object" aria-hidden="true">
        <div className="event-sphere" />
        <div className="event-disc disc-a" />
        <div className="event-disc disc-b" />
        <span>03 DAYS</span>
      </div>

      <h2 aria-label="Techgyanathon">
        <span aria-hidden="true">TECH</span>
        <span aria-hidden="true">GYANA</span>
        <span aria-hidden="true">THON</span>
      </h2>

      <p className="feature-thesis">
        <DecryptedText
          text={'A technical autopsy\nin three acts.'}
          animateOn="view"
          sequential
          speed={32}
          encryptedClassName="decrypt-scramble"
        />
      </p>

      <div className="feature-facts">
        {FEATURED_FACTS.map(({ prefix, to, suffix, label }) => (
          <div key={label}>
            <strong>
              {prefix}
              <CountUp to={to} duration={1.6} />
              {suffix}
            </strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <Button href={`mailto:${CONTACT.email}`}>EXPLORE EVENT</Button>
    </section>
  );
}
