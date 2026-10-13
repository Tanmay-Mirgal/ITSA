import ChromaGrid from './reactbits/ChromaGrid.jsx';
import CountUp from './reactbits/CountUp.jsx';
import MetaLabel from './MetaLabel.jsx';
import { IMPACT_STATS } from '../data.js';

export default function Impact() {
  // Each card is a monochrome photo that turns to colour around the cursor, with the figure laid over it.
  const items = IMPACT_STATS.map(({ value, to, suffix, label, image, accent }, index) => ({
    title: label,
    image,
    alt: '',
    accent,
    overlay: (
      <div className="impact-stat">
        <small>{String(index + 1).padStart(2, '0')}</small>
        <strong>
          {typeof to === 'number' ? (
            <>
              <CountUp to={to} duration={1.8} />
              {suffix}
            </>
          ) : (
            value
          )}
        </strong>
        <span className="impact-label">{label}</span>
      </div>
    ),
  }));

  return (
    <section className="impact section" aria-label="Impact">
      <div className="impact-intro">
        <span>
          <MetaLabel>02 / IMPACT</MetaLabel>
        </span>
        <p>
          We don&rsquo;t inflate the numbers.
          <br />
          We build the next ones.
        </p>
      </div>

      <div className="impact-grid reveal">
        <ChromaGrid
          items={items}
          columns={4}
          minCardWidth={150}
          gap={0}
          radius={340}
          softness={0.75}
          cardRadius={0}
          aspectRatio="auto"
          grayscale={1}
          dim={0.42}
          glow={0.7}
          showInfo={false}
          className="impact-chroma"
        />
      </div>
    </section>
  );
}
