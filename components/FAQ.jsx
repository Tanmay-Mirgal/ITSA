'use client';

import { useState } from 'react';
import MetaLabel from './MetaLabel.jsx';
import { FAQS } from '../data.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="faq-section section" id="faq" aria-labelledby="faq-heading">
      <div className="section-header reveal">
        <div className="section-meta">
          <MetaLabel>11 / INTELLIGENCE & FAQS</MetaLabel>
        </div>
        <h2 id="faq-heading">
          FREQUENTLY
          <br />
          ASKED
          <br />
          <em>QUESTIONS.</em>
        </h2>
        <p>
          Everything you need to know about the Information Technology Student Association (ITSA) at VPPCOEVA Mumbai.
        </p>
      </div>

      <div className="faq-list reveal" role="region" aria-label="ITSA FAQs Accordion">
        {FAQS.map(({ q, a }, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={q}
              className={`faq-item${isOpen ? ' is-active' : ''}`}
            >
              <button
                type="button"
                className="faq-trigger"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="faq-index">{String(idx + 1).padStart(2, '0')}</span>
                <span className="faq-question-text">{q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className="faq-answer-panel"
                style={{
                  maxHeight: isOpen ? '400px' : '0',
                }}
              >
                <div className="faq-answer-inner">
                  <p>{a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
