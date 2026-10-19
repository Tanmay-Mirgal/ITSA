'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { TEAM_CARDS } from '../data.js';
import Lanyard from './reactbits/Lanyard.jsx';
import '../styles/team-modal.css';

// CSS-3D ring: its own chunk, client-only; the stage below reserves its height so nothing shifts while it loads.
const CircularCarousel = dynamic(() => import('./reactbits/CircularCarousel.jsx'), { ssr: false });

const FADE = '#0b0d18'; // --surface, so the far side of the ring dissolves into the section background

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

/** 3D ring of team cards (React Bits CircularCarousel) + Interactive Lanyard & Division Members Detail View. */
export default function TeamStage() {
  const cardWidth = useCardWidth();
  const [selectedMember, setSelectedMember] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(72);
  const navRef = useRef(null);
  const contentRef = useRef(null);

  const closeModal = useCallback(() => {
    setSelectedMember(null);
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
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('scroll', updateHeaderHeight, { passive: true });

    let ro;
    const navEl = document.querySelector('.navbar');
    if (navEl && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => updateHeaderHeight());
      ro.observe(navEl);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', updateHeaderHeight);
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
          onItemClick={(item) => setSelectedMember(item)}
          ariaLabel="ITSA team leadership ring"
        />
      </div>

      {/* Interactive Detail View with Lanyard and Division Members */}
      {selectedMember && (
        <div
          className="team-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedMember.title} details and division members`}
          style={{ '--header-height': `${headerHeight}px` }}
        >
          {/* Safe Viewport Container: positioned below navbar and centers the preview within safe area */}
          <div
            className="team-modal-viewport"
            onClick={closeModal}
          >
            <div
              className="team-modal-panel"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with accessible sticky close button */}
              <div className="team-modal-header">
                <div className="team-modal-meta">
                  <span className="meta-tag">{selectedMember.division}</span>
                  <h3>{selectedMember.title}</h3>
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

              {/* Quick-Switch Pills across all 9 Core Team Heads */}
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
                      onClick={() => setSelectedMember(card)}
                    >
                      {card.title}
                    </button>
                  );
                })}
              </div>

              {/* Modal Content Grid: scrollable preview container */}
              <div className="team-modal-content" ref={contentRef}>
                {/* Left Column: Interactive 3D Swinging Lanyard Badge */}
                <div className="team-modal-lanyard">
                  <Lanyard
                    headName={selectedMember.headName}
                    headRole={selectedMember.headRole}
                    handle={selectedMember.handle}
                    code={selectedMember.code}
                    image={selectedMember.src}
                    division={selectedMember.division}
                  />
                </div>

                {/* Right Column: Division Info and Members */}
                <div className="team-modal-details">
                  <div className="team-division-overview">
                    <h4>
                      <span>{selectedMember.headName}</span>
                      <small>— {selectedMember.headRole}</small>
                    </h4>
                    <p>{selectedMember.focus}</p>
                  </div>

                  <div className="team-members-section">
                    <div className="team-members-header">
                      <h5>Division Members</h5>
                      <span>{selectedMember.members?.length || 0} MEMBERS ACTIVE</span>
                    </div>

                    <div className="team-members-grid">
                      {selectedMember.members?.map((member) => (
                        <div key={member.name} className="team-member-card">
                          <div className="member-avatar">
                            <img src={member.image} alt={member.name} loading="lazy" />
                          </div>
                          <div className="member-info">
                            <strong>{member.name}</strong>
                            <span>{member.role}</span>
                            {member.tags && member.tags.length > 0 && (
                              <div className="member-tags">
                                {member.tags.map((tag) => (
                                  <span key={tag} className="member-tag">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
