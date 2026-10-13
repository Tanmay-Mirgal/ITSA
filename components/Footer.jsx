import TechHost from './TechHost.jsx';
import { LOCATION, MENU_LINKS } from '../data.js';

export default function Footer() {
  return (
    <footer>
      <TechHost className="footer-brand" accent="#9b6cff" aria-hidden="true">
        <span data-tech-line data-tech-color="#f4f3f7">
          ITSA
        </span>
        <span className="footer-dot">●</span>
      </TechHost>

      <div className="footer-info">
        <p>
          Information Technology Student Association
          <br />
          <b>VPPCOEVA · Sion, Mumbai — 400022</b>
        </p>
        <nav aria-label="Footer">
          {MENU_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-end">
        <span>© 2026 ITSA</span>
        <span>{LOCATION.coordinates.join(' · ')}</span>
        <span>ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
