import MetaLabel from './MetaLabel.jsx';

const WORDS = ['BUILD.', 'LEARN.', 'CREATE.', 'LEAD.'];

export default function Vision() {
  return (
    <section className="vision section" aria-labelledby="vision-heading">
      <span className="vision-index">
        <MetaLabel>10 / VISION & MISSION</MetaLabel>
      </span>

      <h2 id="vision-heading">
        {WORDS.map((word) => (
          <span key={word}>{word}</span>
        ))}
      </h2>

      <div className="vision-copy">
        <article>
          <span>VISION / 01</span>
          <p>
            Create an environment where students can explore technology, innovation and professional growth.
          </p>
        </article>
        <article>
          <span>MISSION / 02</span>
          <p>Bridge academic learning with real-world technology, collaboration and industry exposure.</p>
        </article>
      </div>
    </section>
  );
}
