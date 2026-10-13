'use client';

import Image from 'next/image';
import SectionHeader from './SectionHeader.jsx';
import { EVENTS } from '../data.js';
import { useSelection } from '../hooks.js';

export default function EventsArchive() {
  const [active, bind] = useSelection(0);
  const current = EVENTS[active];

  return (
    <section className="events-archive section">
      <SectionHeader
        meta="04 / EVENT ARCHIVE"
        title={
          <>
            DESIGNED TO
            <br />
            BE <em>EXPERIENCED.</em>
          </>
        }
      >
        A living catalogue of competitions, workshops, programmes and community moments.
      </SectionHeader>

      <div className="archive-layout">
        <div className="event-preview" data-cursor="VIEW">
          {EVENTS.map((event, index) => (
            <Image
              key={event.name}
              className={index === active ? 'is-active' : undefined}
              src={event.image}
              alt={index === active ? event.name : ''}
              fill
              sizes="(max-width: 720px) 100vw, 40vw"
            />
          ))}
          <span>{current.kicker}</span>
          <p>{current.blurb}</p>
        </div>

        <div className="archive-list">
          <div className="archive-year">2026 — PRESENT</div>
          {EVENTS.map((event, index) => (
            <button
              key={event.name}
              type="button"
              className={index === active ? 'active' : undefined}
              aria-pressed={index === active}
              {...bind(index)}
            >
              <small>{String(index + 1).padStart(2, '0')}</small>
              <span>{event.name}</span>
              <i>{event.date}</i>
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
