'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import './Lanyard.css';

/**
 * Premium 3D Interactive Lanyard Component.
 * - Recreates the React Bits swinging ID badge with stretchy woven nylon strap, metal clasp, and clip.
 * - Draggable with spring-pendulum physics.
 * - Clicking the card flips it 180° in 3D to reveal the official ITSA logo on the back.
 */
export default function Lanyard({
  headName = 'Core Lead',
  headRole = 'Core Head',
  handle = '@itsa.vppcoe',
  code = 'ITSA-2026-CORE',
  image = '',
  division = 'DIVISION HEAD',
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, rotZ: 0, rotY: 0, rotX: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Physics state
  const physicsRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    angle: 0,
    targetX: 0,
    targetY: 0,
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    lastMouse: { x: 0, y: 0, time: 0 },
    mouseVelocity: { x: 0, y: 0 },
  });

  const restLength = 95;

  useEffect(() => {
    let animId;
    const p = physicsRef.current;
    p.y = restLength;

    const tick = () => {
      if (!p.isDragging) {
        // Restoring spring + pendulum forces
        const dx = p.x;
        const dy = p.y - restLength;

        const kSpring = 0.055;
        const damping = 0.93;

        const fx = -kSpring * dx;
        const fy = -kSpring * dy;

        p.vx = (p.vx + fx) * damping;
        p.vy = (p.vy + fy) * damping;

        p.x += p.vx;
        p.y += p.vy;

        const targetRotZ = (p.x / restLength) * 24 + p.vx * 1.6;
        p.angle += (targetRotZ - p.angle) * 0.14;
      } else {
        p.x += (p.targetX - p.x) * 0.42;
        p.y += (p.targetY - p.y) * 0.42;
        const targetRotZ = (p.x / restLength) * 28 + p.mouseVelocity.x * 0.7;
        p.angle += (targetRotZ - p.angle) * 0.22;
      }

      const rotY = Math.max(-25, Math.min(25, p.vx * 2.2));
      const rotX = Math.max(-18, Math.min(18, -p.vy * 1.5));

      setPosition({
        x: p.x,
        y: p.y,
        rotZ: p.angle,
        rotY,
        rotX,
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    const p = physicsRef.current;
    p.isDragging = true;
    setIsDragging(true);

    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    p.dragStart = { x: clientX, y: clientY };
    p.lastMouse = { x: clientX, y: clientY, time: performance.now() };

    const handlePointerMove = (moveEvent) => {
      const cx = moveEvent.clientX ?? moveEvent.touches?.[0]?.clientX ?? 0;
      const cy = moveEvent.clientY ?? moveEvent.touches?.[0]?.clientY ?? 0;
      const now = performance.now();
      const dt = Math.max(1, now - p.lastMouse.time);

      p.mouseVelocity = {
        x: ((cx - p.lastMouse.x) / dt) * 16,
        y: ((cy - p.lastMouse.y) / dt) * 16,
      };
      p.lastMouse = { x: cx, y: cy, time: now };

      const deltaX = cx - p.dragStart.x;
      const deltaY = cy - p.dragStart.y;

      p.targetX = Math.max(-130, Math.min(130, deltaX));
      p.targetY = Math.max(restLength - 30, Math.min(restLength + 130, restLength + deltaY));
    };

    const handlePointerUp = () => {
      // If user barely moved cursor, treat as click and toggle card flip!
      const movedDist = Math.hypot(p.lastMouse.x - p.dragStart.x, p.lastMouse.y - p.dragStart.y);
      if (movedDist < 6) {
        setIsFlipped((f) => !f);
      }

      p.isDragging = false;
      setIsDragging(false);
      p.vx = p.mouseVelocity.x * 0.7;
      p.vy = p.mouseVelocity.y * 0.7;

      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
  }, []);

  // Hanging lanyard ribbon path
  const anchorX = 145;
  const anchorY = 0;
  const badgeX = anchorX + position.x;
  const badgeY = anchorY + position.y;
  const ctrlX = anchorX + position.x * 0.28;
  const ctrlY = (anchorY + badgeY) * 0.5;
  const strapPath = `M ${anchorX} ${anchorY} Q ${ctrlX} ${ctrlY} ${badgeX} ${badgeY}`;

  return (
    <div className="lanyard-container" ref={containerRef}>
      {/* Hanging Textured Lanyard Strap Ribbon */}
      <svg className="lanyard-svg" viewBox="0 0 290 260" aria-hidden="true">
        <defs>
          <linearGradient id="lanyardStrapShade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e2230" />
            <stop offset="50%" stopColor="#32384e" />
            <stop offset="100%" stopColor="#1e2230" />
          </linearGradient>
          <pattern id="lanyardWeave" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#4cd8f8" strokeWidth="1" strokeOpacity="0.25" />
            <line x1="0" y1="3" x2="6" y2="3" stroke="#9b6cff" strokeWidth="1" strokeOpacity="0.25" />
          </pattern>
        </defs>

        {/* Strap Drop Shadow */}
        <path d={strapPath} fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="26" strokeLinecap="round" />
        {/* Main Woven Ribbon */}
        <path d={strapPath} fill="none" stroke="url(#lanyardStrapShade)" strokeWidth="22" strokeLinecap="round" />
        {/* Fabric Weave Texture */}
        <path d={strapPath} fill="none" stroke="url(#lanyardWeave)" strokeWidth="20" strokeLinecap="round" />
      </svg>

      {/* Hanging Badge Physics Wrapper */}
      <div
        className={`lanyard-badge-wrap ${isDragging ? 'is-dragging' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) rotateZ(${position.rotZ}deg) rotateY(${position.rotY}deg) rotateX(${position.rotX}deg)`,
        }}
        onPointerDown={handlePointerDown}
        role="button"
        tabIndex={0}
        aria-label={`${headName} ID badge. Click to flip between front and back.`}
      >
        {/* Metal Clasp Hardware */}
        <div className="lanyard-hardware" aria-hidden="true">
          <div className="lanyard-strap-clip">
            <span className="strap-badge-emblem">⚛</span>
          </div>
          <div className="lanyard-clamp">
            <span className="clamp-bolt" />
          </div>
          <div className="lanyard-swivel-ring" />
        </div>

        {/* 3D Card with Front and Back faces */}
        <div className={`lanyard-card ${isFlipped ? 'is-flipped' : ''}`}>
          {/* ===================== FRONT FACE ===================== */}
          <div className="lanyard-card-face lanyard-card-front">
            {/* Top slot cutout for metal clip */}
            <div className="lanyard-slot-hole" aria-hidden="true" />

            {/* Header: Watermark logo + handle */}
            <div className="card-front-header">
              <div className="card-watermark-logo">
                <img src="/itsa-mark.png" alt="" className="watermark-img" />
                <span>ITSA</span>
              </div>
              <span className="card-handle-tag">{handle}</span>
            </div>

            {/* High-res Portrait Image */}
            <div className="card-portrait-wrapper">
              <img
                src={image}
                alt={headName}
                draggable={false}
                className="card-portrait-photo"
              />
              <div className="portrait-gloss-sheen" aria-hidden="true" />
            </div>

            {/* Member Identity & Role */}
            <div className="card-identity">
              <h4 className="card-person-name">{headName}</h4>
              <div className="card-role-pill">{headRole}</div>
              <div className="card-division-row">
                <span className="division-name">{division}</span>
                <code className="division-code">{code}</code>
              </div>
            </div>

            {/* Holographic Security Foil Strip */}
            <div className="card-security-foil" aria-hidden="true">
              <span>★ OFFICIAL EXECUTIVE CREDENTIAL // 2026 ★</span>
            </div>
          </div>

          {/* ===================== BACK FACE ===================== */}
          <div className="lanyard-card-face lanyard-card-back">
            {/* Top slot hole */}
            <div className="lanyard-slot-hole" aria-hidden="true" />

            <div className="card-back-body">
              {/* Official ITSA Logo Prominently in Center */}
              <div className="card-back-brand">
                <img
                  src="/itsa-mark.png"
                  alt="ITSA Official Emblem"
                  className="card-back-logo-img"
                />
                <h4 className="card-back-title">ITSA</h4>
                <p className="card-back-sub">
                  Information Technology
                  <br />
                  Students Association
                </p>
              </div>

              {/* Security Chip & Authorization */}
              <div className="card-security-chip" aria-hidden="true">
                <div className="chip-gold-plate" />
                <span className="chip-label">SECURE NFC IDENTIFIER</span>
              </div>

              {/* Official Barcode & Credentials */}
              <div className="card-barcode-box" aria-hidden="true">
                <div className="barcode-lines" />
                <code className="barcode-code">{code}</code>
              </div>

              <div className="card-back-footer">
                <span>VPPCOEVA · SION, MUMBAI</span>
                <small>Official Student Leadership Council</small>
              </div>
            </div>
          </div>
        </div>

        {/* Micro-Interaction Hint */}
        <div className="lanyard-action-hint">
          <span>Try dragging • Click card to flip ↻</span>
        </div>
      </div>
    </div>
  );
}
