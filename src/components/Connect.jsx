import Button from './Button.jsx';
import { CONTACT } from '../data.js';

export default function Connect() {
  return (
    <section className="connect section" id="connect">
      <span>10 / OPEN CHANNEL</span>

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
