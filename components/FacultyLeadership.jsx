'use client';

import { useCallback, useEffect, useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { FACULTY_LEADERSHIP } from '../data.js';
import '../styles/faculty-modal.css';

/**
 * Premium ITSA Faculty Leadership Section
 * - Academic bridge between About ITSA and Featured Events.
 * - Displays 2 equal-sized faculty profile cards: HOD & Professor Coordinator.
 * - Interactive in-page expanded profile modal with accordion details and verified credentials.
 */
export default function FacultyLeadership() {
  const { meta, intro, visionStatement, members } = FACULTY_LEADERSHIP;
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState('experience');

  const openProfile = useCallback((member) => {
    setSelectedFaculty(member);
    setIsClosing(false);
    setActiveAccordion('experience');
  }, []);

  const closeProfile = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedFaculty(null);
      setIsClosing(false);
    }, 350); // Matches CSS exit transition duration
  }, []);

  // Lock body scroll and handle keyboard accessibility (Escape key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedFaculty) {
        closeProfile();
      }
    };

    if (selectedFaculty) {
      window.addEventListener('keydown', handleKeyDown);

      // Lock body scroll and compensate scrollbar width to prevent page shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (document.body.dataset.prevPaddingRight === undefined) {
        document.body.dataset.prevPaddingRight = document.body.style.paddingRight || '';
        if (scrollbarWidth > 0) {
          document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        document.body.style.overflow = 'hidden';
      }

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      if (document.body.dataset.prevPaddingRight !== undefined) {
        document.body.style.paddingRight = document.body.dataset.prevPaddingRight;
        delete document.body.dataset.prevPaddingRight;
        document.body.style.overflow = '';
      }
    }
  }, [selectedFaculty, closeProfile]);

  // Clean up body scroll lock on unmount
  useEffect(() => {
    return () => {
      if (document.body.dataset.prevPaddingRight !== undefined) {
        document.body.style.paddingRight = document.body.dataset.prevPaddingRight;
        delete document.body.dataset.prevPaddingRight;
        document.body.style.overflow = '';
      }
    };
  }, []);

  const toggleAccordion = (sectionId) => {
    setActiveAccordion((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <section className="faculty section" id="faculty" aria-label="Faculty Leadership">
      <div className="faculty-container">
        <SectionHeader
          meta={meta}
          title={
            <>
              THE PEOPLE
              <br />
              BEHIND THE
              <br />
              <em>DIRECTION.</em>
            </>
          }
        >
          {intro}
        </SectionHeader>

        {/* ITSA Institutional Vision & Guidance Banner */}
        {visionStatement && (
          <div className="faculty-vision-banner reveal">
            <div className="vision-tag-pill">
              <span className="vision-dot" aria-hidden="true" />
              <span>VISION & GUIDANCE</span>
            </div>
            <p className="vision-text">{visionStatement}</p>
          </div>
        )}

        {/* Two Equal-Sized Faculty Cards Grid */}
        <div className="faculty-grid">
          {members.map((member) => (
            <article
              key={member.id}
              className={`faculty-card faculty-card--${member.id} reveal`}
              onClick={() => openProfile(member)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProfile(member);
                }
              }}
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={`View full faculty profile of ${member.name}, ${member.designation}`}
            >
              {/* Hairline Index Header */}
              <div className="faculty-card__index-bar">
                <span className="faculty-card__num">{member.index}</span>
                <span className="faculty-card__role-tag">{member.roleTag}</span>
              </div>

              {/* Portrait Media Frame */}
              <div className="faculty-card__media">
                <div className="faculty-card__frame">
                  <img
                    src={member.image}
                    alt={member.alt || `${member.name} — ${member.designation}`}
                    className={`faculty-card__image faculty-card__image--${member.id}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="faculty-card__scrim" aria-hidden="true" />
                  <div className="faculty-card__view-badge" aria-hidden="true">
                    <span>VIEW PROFILE</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="faculty-card__body">
                <div className="faculty-card__header-row">
                  <span className={`faculty-card__role-badge faculty-card__role-badge--${member.id}`}>
                    {member.role}
                  </span>
                </div>

                <h3 className="faculty-card__name">{member.name}</h3>

                <div className="faculty-card__academic-info">
                  <span className="faculty-card__academic-desig">{member.academicDesignation}</span>
                  <span className="faculty-card__dot-sep" aria-hidden="true">
                    ·
                  </span>
                  <span className="faculty-card__dept">{member.departmentShort}</span>
                </div>

                {/* Call to Action Row */}
                <div className="faculty-card__cta">
                  <span>VIEW PROFILE</span>
                  <span className="faculty-card__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Expanded Faculty Profile Modal */}
      {selectedFaculty && (
        <div
          className={`faculty-modal-backdrop ${isClosing ? 'is-closing' : ''}`}
          onClick={closeProfile}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedFaculty.name} — Faculty Leadership Profile`}
        >
          <div className="faculty-modal-viewport" onClick={closeProfile}>
            <div
              className={`faculty-modal-panel ${isClosing ? 'is-closing' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="faculty-modal-header">
                <div className="faculty-modal-meta">
                  <span className="faculty-modal-tag">FACULTY LEADERSHIP</span>
                  <span className="faculty-modal-sep">/</span>
                  <span className="faculty-modal-subtag">{selectedFaculty.role}</span>
                </div>

                <button
                  type="button"
                  className="faculty-modal-close"
                  onClick={closeProfile}
                  aria-label="Close profile dialog"
                >
                  <span>✕</span>
                  <span>ESC</span>
                </button>
              </div>

              {/* Quick-Switch Tab Strip */}
              <div className="faculty-modal-tabs" role="tablist" aria-label="Faculty member switcher">
                {members.map((member) => {
                  const isActive = member.id === selectedFaculty.id;
                  return (
                    <button
                      key={member.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`faculty-tab-pill ${isActive ? 'is-active' : ''}`}
                      onClick={() => openProfile(member)}
                    >
                      <span className="tab-pill-num">{member.index}</span>
                      <span className="tab-pill-name">{member.shortName || member.name}</span>
                      <span className="tab-pill-role">({member.role})</span>
                    </button>
                  );
                })}
              </div>

              {/* Modal Body: Two-Column Layout */}
              <div className="faculty-modal-content">
                {/* Left Column: Portrait & Key Credentials */}
                <div className="faculty-modal-left">
                  <div className="faculty-portrait-card">
                    <div className="faculty-portrait-frame">
                      <img
                        src={selectedFaculty.image}
                        alt={selectedFaculty.name}
                        className={`faculty-portrait-img faculty-portrait-img--${selectedFaculty.id}`}
                      />
                      <div className="faculty-portrait-sheen" aria-hidden="true" />
                    </div>

                    <div className="faculty-credentials-card">
                      <div className="credentials-role-row">
                        <span className={`credentials-badge credentials-badge--${selectedFaculty.id}`}>
                          {selectedFaculty.role}
                        </span>
                      </div>

                      <h3 className="credentials-name">{selectedFaculty.name}</h3>

                      <div className="credentials-academic-line">
                        <strong>{selectedFaculty.academicDesignation}</strong>
                        <span>{selectedFaculty.department}</span>
                      </div>

                      <div className="credentials-institution">
                        <span>{selectedFaculty.institutionShort || 'VPPCOEVA · SION, MUMBAI'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Introduction & Expandable Sections */}
                <div className="faculty-modal-right">
                  {/* Official Introduction Callout */}
                  <div className="faculty-intro-box">
                    <div className="intro-box-header">
                      <span className="intro-label">OFFICIAL PROFILE</span>
                      <span className="intro-department">{selectedFaculty.departmentShort}</span>
                    </div>
                    <p className="intro-text">{selectedFaculty.intro}</p>
                  </div>

                  {/* Research Specialisation Highlight (Badges) */}
                  {selectedFaculty.specialisations && selectedFaculty.specialisations.length > 0 && (
                    <div className="faculty-specialisations-block">
                      <div className="specialisation-header">
                        <h4>CORE RESEARCH & SPECIALISATIONS</h4>
                        <span>{selectedFaculty.specialisations.length} DOMAINS</span>
                      </div>
                      <div className="specialisation-pills">
                        {selectedFaculty.specialisations.map((spec, i) => (
                          <span key={i} className="spec-pill">
                            <span className="spec-bullet" aria-hidden="true">
                              ✦
                            </span>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expandable Accordion Sections */}
                  <div className="faculty-accordions-group">
                    <div className="accordions-title-bar">
                      <h5>DETAILED ACADEMIC & INSTITUTIONAL PROFILE</h5>
                    </div>

                    {selectedFaculty.sections &&
                      selectedFaculty.sections
                        .filter((s) => s.id !== 'intro' && s.id !== 'specialisation')
                        .map((section) => {
                          const isOpen = activeAccordion === section.id;
                          return (
                            <div
                              key={section.id}
                              className={`faculty-accordion-item ${isOpen ? 'is-open' : ''}`}
                            >
                              <button
                                type="button"
                                className="faculty-accordion-header"
                                onClick={() => toggleAccordion(section.id)}
                                aria-expanded={isOpen}
                                aria-controls={`sect-${section.id}`}
                              >
                                <span className="accordion-title">{section.title}</span>
                                <span className="accordion-chevron" aria-hidden="true">
                                  ▾
                                </span>
                              </button>

                              <div
                                id={`sect-${section.id}`}
                                className="faculty-accordion-body"
                                style={{
                                  maxHeight: isOpen ? '360px' : '0px',
                                  opacity: isOpen ? 1 : 0,
                                }}
                              >
                                <div className="faculty-accordion-inner">
                                  <p>{section.content}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
