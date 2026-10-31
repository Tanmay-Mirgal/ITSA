'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { TEAM_CARDS } from '../data.js';
// Lanyard physics simulation is code-split so it is only loaded when modal opens
const Lanyard = dynamic(() => import('./reactbits/Lanyard.jsx'), { ssr: false });
import '../styles/team-modal.css';

// CSS-3D ring: its own chunk, client-only; the stage below reserves its height so nothing shifts while it loads.
const CircularCarousel = dynamic(() => import('./reactbits/CircularCarousel.jsx'), { ssr: false });

// Primary Executive Leadership positions shown in expanded profile
const EXECUTIVE_LEADERS = TEAM_CARDS.slice(0, 3);

const FADE = '#0b0d18'; // --surface, so the far side of the ring dissolves into the section background

// Calm, restrained card swap transitions (zero bounce, non-overlapping, quick settling in ~320ms)
const SWAP_TRANSITION = {
  duration: 0.32,
  ease: [0.16, 1, 0.3, 1],
};

const SECONDARY_TRANSITION = {
  duration: 0.26,
  ease: [0.16, 1, 0.3, 1],
};

/** Card width follows the viewport so the ring never overflows on phones. */
function useCardWidth() {
  const [width, setWidth] = useState(250);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setWidth(vw <= 520 ? 210 : vw <= 1050 ? 270 : 360);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return width;
}

/** 3D ring of team cards (React Bits CircularCarousel) + Interactive Nested ID-card Hierarchy View. */
export default function TeamStage() {
  const cardWidth = useCardWidth();
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeMember, setActiveMember] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(72);
  const navRef = useRef(null);
  const contentRef = useRef(null);

  const closeModal = useCallback(() => {
    setSelectedMember(null);
    setActiveMember(null);
  }, []);

  // When switching core heads, reset the active member so the new Head is primary
  const handleSelectHead = useCallback((head) => {
    setSelectedMember(head);
    setActiveMember(null);
  }, []);

  // Dynamically track exact navbar height for pixel-perfect safe area calculations
  useEffect(() => {
    const updateHeaderHeight = () => {
      const navEl = document.querySelector('.navbar');
      if (navEl) {
        const rect = navEl.getBoundingClientRect();
        if (rect.height > 0) {
          setHeaderHeight(Math.round(rect.height));
        }
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight, { passive: true });

    let ro;
    const navEl = document.querySelector('.navbar');
    if (navEl && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateHeaderHeight());
      ro.observe(navEl);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      ro?.disconnect();
    };
  }, []);

  // Prevent layout shift on body scroll lock & handle ESC key to close modal
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedMember) {
      window.addEventListener('keydown', onKeyDown);

      // Lock body scroll and compensate scrollbar width to prevent page jump
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (document.body.dataset.prevPaddingRight === undefined) {
        document.body.dataset.prevPaddingRight = document.body.style.paddingRight || '';
        if (scrollbarWidth > 0) {
          document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        document.body.style.overflow = 'hidden';
      }

      // Auto-scroll active pill into view
      setTimeout(() => {
        const activeEl = navRef.current?.querySelector('.team-nav-pill.is-active');
        activeEl?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }, 50);

      // Reset internal preview scroll position on member switch
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: 'instant' });
      }

      return () => {
        window.removeEventListener('keydown', onKeyDown);
      };
    } else {
      if (document.body.dataset.prevPaddingRight !== undefined) {
        document.body.style.paddingRight = document.body.dataset.prevPaddingRight;
        delete document.body.dataset.prevPaddingRight;
        document.body.style.overflow = '';
      }
    }
  }, [selectedMember, closeModal]);

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

  // Compute active primary person (member or head)
  const primaryPerson = activeMember || selectedMember;
  const hasDepartment = Boolean(selectedMember?.members && selectedMember.members.length > 0);
  const departmentMembers = selectedMember?.members || [];
  const secondaryMembers = activeMember
    ? departmentMembers.filter((m) => m.id !== activeMember.id)
    : departmentMembers;

  return (
    <>
      <div className="team-stage" data-cursor="DRAG">
        <CircularCarousel
          items={TEAM_CARDS}
          preset="cylinder"
          cardWidth={cardWidth}
          aspectRatio={0.8}
          gap={18}
          cornerRadius={10}
          fadeColor={FADE}
          captions
          speed={6}
          focusOnClick={true}
          onItemClick={(item) => handleSelectHead(item)}
          ariaLabel="ITSA team leadership ring"
        />
      </div>

      {/* Interactive Detail View with Lanyard and Core Team Members */}
      {selectedMember && (
        <div
          className="team-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${primaryPerson.name} — ${primaryPerson.role} details`}
          style={{ '--header-height': `${headerHeight}px` }}
        >
          {/* Safe Viewport Container: positioned below navbar and centers the preview within safe area */}
          <div className="team-modal-viewport" onClick={closeModal}>
            <div className="team-modal-panel" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header with accessible sticky close button */}
              <div className="team-modal-header">
                <div className="team-modal-meta">
                  <span className="meta-tag">
                    {activeMember
                      ? `${activeMember.department || 'DEPARTMENT'} // MEMBER`
                      : selectedMember.role.toUpperCase()}
                  </span>
                  <h3>{primaryPerson.name}</h3>
                  {activeMember && (
                    <span className="meta-hierarchy-pill" aria-label="Hierarchy path">
                      {selectedMember.name} <span>→</span> {activeMember.name}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="team-modal-close"
                  onClick={closeModal}
                  aria-label="Close dialog"
                >
                  <span>✕</span>
                  <span>ESC</span>
                </button>
              </div>

              {/* Quick-Switch Pills across all 11 Core Team Members */}
              <div className="team-modal-nav" ref={navRef} role="tablist" aria-label="Core team navigation">
                {TEAM_CARDS.map((card) => {
                  const isActive = card.id === selectedMember.id;
                  return (
                    <button
                      key={card.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`team-nav-pill ${isActive ? 'is-active' : ''}`}
                      onClick={() => handleSelectHead(card)}
                    >
                      <span>{card.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Modal Content Grid: scrollable preview container */}
              <div className="team-modal-content" ref={contentRef}>
                {/* Left Column: Interactive 3D Swinging Lanyard Badge (Primary Active Position) */}
                <div className="team-modal-lanyard">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={primaryPerson.id}
                      initial={{ opacity: 0.9, scale: 0.95, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97, y: -4 }}
                      transition={SWAP_TRANSITION}
                      style={{ width: '100%' }}
                    >
                      <Lanyard
                        headName={primaryPerson.name}
                        headRole={primaryPerson.role}
                        handle={primaryPerson.handle}
                        code={primaryPerson.code}
                        image={primaryPerson.image || primaryPerson.src}
                        division={
                          primaryPerson.department ||
                          primaryPerson.division ||
                          primaryPerson.role.toUpperCase()
                        }
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Column: Dynamic Hierarchy Details & Departmental Members */}
                <div className="team-modal-details">
                  {hasDepartment ? (
                    <>
                      {/* Department Banner & Mentorship Note */}
                      <div className="team-division-overview team-department-banner">
                        <div className="dept-banner-header">
                          <div className="dept-banner-title-group">
                            <span className="dept-badge-label">
                              {selectedMember.mentorNote ? 'MENTORED DEPARTMENT' : 'DEPARTMENT'}
                            </span>
                            <h4>{selectedMember.departmentLabel || selectedMember.department}</h4>
                          </div>
                        </div>

                        {selectedMember.mentorNote && (
                          <div className="dept-mentorship-callout">
                            <span className="mentorship-icon" aria-hidden="true">✦</span>
                            <span>{selectedMember.mentorNote}</span>
                          </div>
                        )}

                        <p className="dept-focus-text">
                          {activeMember ? activeMember.focus : selectedMember.focus}
                        </p>
                      </div>

                      {/* Head Minimized Card: appears when a subordinate member is active */}
                      <AnimatePresence mode="popLayout" initial={false}>
                        {activeMember && (
                          <motion.div
                            key={selectedMember.id}
                            initial={{ opacity: 0, scale: 0.96, y: -6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -6 }}
                            transition={SECONDARY_TRANSITION}
                            className="team-head-minimized-card"
                            onClick={() => setActiveMember(null)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setActiveMember(null);
                              }
                            }}
                            aria-label={`Return to ${selectedMember.name} (${selectedMember.role})`}
                          >
                            <div className="head-min-slot-bar">
                              <span className="head-min-slot" aria-hidden="true" />
                              <span className="head-min-kicker">
                                {selectedMember.mentorNote ? 'MENTOR' : 'DEPARTMENT HEAD'}
                              </span>
                              <span className="head-min-swap-action">
                                SWAP TO HEAD ↺
                              </span>
                            </div>

                            <div className="head-min-body">
                              <div className="head-min-avatar">
                                <img
                                  src={selectedMember.image || selectedMember.src}
                                  alt={selectedMember.name}
                                />
                              </div>
                              <div className="head-min-info">
                                <div className="head-min-title-row">
                                  <h4 className="head-min-name">{selectedMember.name}</h4>
                                  <span className="head-min-badge">{selectedMember.role}</span>
                                </div>
                                <span className="head-min-desc">
                                  {selectedMember.mentorNote || selectedMember.division}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Department Members Section */}
                      <div className="team-members-section">
                        <div className="team-members-header">
                          <h5>
                            {activeMember
                              ? `OTHER IN ${selectedMember.departmentLabel || selectedMember.department}`
                              : `${selectedMember.departmentLabel || selectedMember.department} MEMBERS`}
                          </h5>
                        </div>

                        {secondaryMembers.length > 0 ? (
                          <div
                            className={`dept-members-grid ${
                              secondaryMembers.length === 1 ? 'is-single-card' : 'is-double-card'
                            }`}
                          >
                            <AnimatePresence mode="popLayout" initial={false}>
                              {secondaryMembers.map((member) => (
                                <motion.div
                                  key={member.id}
                                  layout
                                  initial={{ opacity: 0, scale: 0.96 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.96 }}
                                  transition={SECONDARY_TRANSITION}
                                  className={`dept-member-id-card ${
                                    secondaryMembers.length === 1 ? 'is-single-hero' : ''
                                  }`}
                                  onClick={() => setActiveMember(member)}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      setActiveMember(member);
                                    }
                                  }}
                                  aria-label={`Inspect ${member.name} — ${member.department}`}
                                >
                                  <div className="dept-id-slot-strip">
                                    <span className="dept-id-slot" aria-hidden="true" />
                                    <code className="dept-id-code">{member.code}</code>
                                    <span className="dept-id-pill">{member.department}</span>
                                  </div>

                                  <div className="dept-id-body">
                                    <div className="dept-id-portrait">
                                      <img src={member.image} alt={member.name} loading="lazy" />
                                      <div className="dept-id-gloss" aria-hidden="true" />
                                    </div>

                                    <div className="dept-id-content">
                                      <span className="dept-id-category">
                                        {member.division || member.department}
                                      </span>
                                      <h4 className="dept-id-name">{member.name}</h4>
                                      <p className="dept-id-desc">{member.focus}</p>

                                      <div className="dept-id-cta">
                                        <span>INSPECT ID CREDENTIAL</span>
                                        <span className="dept-id-arrow" aria-hidden="true">→</span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -4 }}
                            transition={SECONDARY_TRANSITION}
                            className="dept-single-active-notice"
                          >
                            <span>
                              ✦ {activeMember.name} is currently active in the primary badge above.
                              Click the head card to swap back.
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Standard Executive Leadership Profile for heads without subordinate members */}
                      <div className="team-division-overview">
                        <h4>
                          <span>{selectedMember.name}</span>
                          <small>— {selectedMember.role}</small>
                        </h4>
                        <p>{selectedMember.focus}</p>
                      </div>

                      <div className="team-members-section">
                        <div className="team-members-header">
                          <h5>EXECUTIVE LEADERSHIP</h5>
                        </div>

                        <div className="team-exec-grid">
                          {EXECUTIVE_LEADERS.map((leader) => {
                            const isCurrent = leader.id === selectedMember.id;
                            return (
                              <div
                                key={leader.id}
                                className={`team-member-card team-exec-card ${
                                  isCurrent ? 'is-active' : ''
                                }`}
                                onClick={() => handleSelectHead(leader)}
                                style={{ cursor: 'pointer' }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleSelectHead(leader);
                                  }
                                }}
                                aria-label={`View ${leader.name} — ${leader.role}`}
                                aria-current={isCurrent ? 'true' : undefined}
                              >
                                <div className="member-avatar">
                                  <img
                                    src={leader.image || leader.src}
                                    alt={`${leader.name} — ${leader.role}`}
                                    loading="lazy"
                                  />
                                </div>
                                <div className="member-info">
                                  <strong>{leader.name}</strong>
                                  <span>{leader.role}</span>
                                </div>
                                {isCurrent && (
                                  <span className="exec-active-indicator" aria-hidden="true">
                                    SELECTED
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
