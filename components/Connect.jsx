import Button from './Button.jsx';
import MetaLabel from './MetaLabel.jsx';
import AuroraBackdrop from './AuroraBackdrop.jsx';
import { CONTACT } from '../data.js';

const AURORA_COLORS = ['#7144e8', '#4cd8f8', '#9b6cff'];

export default function Connect() {
  return (
    <section className="connect section" id="connect">
      <div className="connect-aurora" aria-hidden="true">
        <AuroraBackdrop
          colorStops={AURORA_COLORS}
          direction="bottom"
          height={0.35}
          amplitude={0.8}
          blend={0.6}
          speed={0.6}
          glow={0.5}
          mouseInteraction={false}
          opacity={0.55}
        />
      </div>

      <span>
        <MetaLabel>11 / OPEN CHANNEL</MetaLabel>
      </span>

      <h2>
        LET&rsquo;S BUILD
        <br />
        <em>WHAT&rsquo;S NEXT.</em>
      </h2>

      <div className="connect-aside">
        <p>Got an idea? Want to collaborate, organize an event or become part of ITSA?</p>
        <Button href={`mailto:${CONTACT.email}`} variant="primary">
          CONNECT WITH ITSA
        </Button>
      </div>

      <div className="connect-links">
        <a href={`mailto:${CONTACT.email}`}>
          EMAIL <span aria-hidden="true">↗</span>
        </a>
        <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
          INSTAGRAM <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
          LINKEDIN <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
