'use client';

import Image from 'next/image';
import SectionHeader from './SectionHeader.jsx';
import { TEAMS } from '../data.js';
import { useSelection } from '../hooks.js';

const pad = (n) => String(n + 1).padStart(2, '0');

export default function People() {
  const [active, bind] = useSelection(0);

  return (
    <section className={`people section people-tone-${active}`} id="people">
      <SectionHeader
        meta="06 / PEOPLE"
        title={
          <>
            THE PEOPLE
            <br />
            BEHIND
            <br />
            <em>THE BUILD.</em>
          </>
        }
      >
        Five specialist teams, working as one student-led system.
      </SectionHeader>

      <div className="people-layout">
        <div className="people-portrait reveal-image" data-cursor="VIEW">
          {TEAMS.map((team, index) => (
            <Image
              key={team.name}
              className={index === active ? 'is-active' : undefined}
              src={team.image}
              alt={index === active ? `${team.name} team` : ''}
              fill
              sizes="(max-width: 720px) 100vw, 35vw"
            />
          ))}
          <span>TEAM / {pad(active)}</span>
        </div>

        <div className="people-list">
          {TEAMS.map((team, index) => (
            <button
              key={team.name}
              type="button"
              className={index === active ? 'active' : undefined}
              aria-pressed={index === active}
              {...bind(index)}
            >
              <small>{pad(index)}</small>
              <span>{team.name}</span>
              <i>{team.focus}</i>
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
