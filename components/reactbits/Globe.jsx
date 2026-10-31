'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * React Bits Pro Globe:
 * Dotted 3D globe with animated great-circle arcs, atmosphere glow, and interactive controls.
 */

// Width-governed independent mobile globe scaling
function getMobileGlobeSize(vw) {
  // 320px -> 163px (target: 155-165px)
  // 360px -> 184px (target: 170-185px)
  // 375px -> 191px, 390px -> 199px (target: 180-205px)
  // 412px -> 210px, 430px -> 215px (target: 195-215px)
  return Math.max(160, Math.min(Math.round(vw * 0.51), 215));
}

export default function Globe({
  className = '',
  primaryColor = '#9b6cff',
  accentColor = '#4cd8f8',
  pinkColor = '#f472b6',
  atmosphereColor = '#7144e8',
  autoRotateSpeed = 0.85,
  cameraAltitude,
  arcs,
  rings,
  style
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let alive = true;
    let rafId = 0;

    const vw = typeof window !== 'undefined' ? window.innerWidth : 390;
    const isMobile = typeof window !== 'undefined' && vw <= 720;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    if (isMobile) {
      const mobileSize = getMobileGlobeSize(vw);
      width = mobileSize;
      height = mobileSize;
    }

    // Resolve camera distance and elevation to prevent clipping on mobile
    const resolvedAltitude = cameraAltitude !== undefined
      ? cameraAltitude
      : (isMobile ? 2.95 : 2.8);
    const cameraY = isMobile ? 18 : 50;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, cameraY, resolvedAltitude * 100);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    if (isMobile) {
      renderer.domElement.style.width = `${width}px`;
      renderer.domElement.style.height = `${height}px`;
      renderer.domElement.style.borderRadius = '50%';
      renderer.domElement.style.display = 'block';
      renderer.domElement.style.margin = '0 auto';
    }

    container.appendChild(renderer.domElement);

    // 2. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = autoRotateSpeed;

    // 3. Initialize ThreeGlobe
    const globe = new ThreeGlobe();

    // Style the base globe sphere
    const globeMat = globe.globeMaterial();
    globeMat.color = new THREE.Color(0x000000);
    globeMat.emissive = new THREE.Color(0x000000);
    globeMat.emissiveIntensity = 0;
    globeMat.transparent = true;
    globeMat.opacity = 0.95;

    // Atmospheric glow
    globe
      .showAtmosphere(true)
      .atmosphereColor(atmosphereColor)
      .atmosphereAltitude(0.22);

    // 4. Arcs Data
    const defaultArcs = arcs || [
      { startLat: 37.7749, startLng: -122.4194, endLat: 19.076, endLng: 72.8777, color: [pinkColor, primaryColor] }, // SF -> Mumbai
      { startLat: 51.5074, startLng: -0.1278, endLat: 19.076, endLng: 72.8777, color: [primaryColor, accentColor] }, // London -> Mumbai
      { startLat: 35.6762, startLng: 139.6503, endLat: 19.076, endLng: 72.8777, color: [accentColor, primaryColor] }, // Tokyo -> Mumbai
      { startLat: -33.8688, startLng: 151.2093, endLat: 1.3521, endLng: 103.8198, color: [pinkColor, primaryColor] }, // Sydney -> Singapore
      { startLat: 1.3521, startLng: 103.8198, endLat: 19.076, endLng: 72.8777, color: [primaryColor, pinkColor] }, // Singapore -> Mumbai
      { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, color: [primaryColor, pinkColor] }, // NYC -> London
      { startLat: 25.2048, startLng: 55.2708, endLat: 19.076, endLng: 72.8777, color: [accentColor, primaryColor] }, // Dubai -> Mumbai
      { startLat: 52.52, startLng: 13.405, endLat: 40.7128, endLng: -74.006, color: [pinkColor, accentColor] }, // Berlin -> NYC
      { startLat: -23.5505, startLng: -46.6333, endLat: 40.7128, endLng: -74.006, color: [pinkColor, primaryColor] }, // Sao Paulo -> NYC
      { startLat: 28.6139, startLng: 77.209, endLat: 19.076, endLng: 72.8777, color: [accentColor, pinkColor] } // Delhi -> Mumbai
    ];

    globe
      .arcsData(defaultArcs)
      .arcColor('color')
      .arcAltitude(0.28)
      .arcStroke(0.65)
      .arcDashLength(0.5)
      .arcDashGap(2)
      .arcDashInitialGap(() => Math.random() * 2)
      .arcDashAnimateTime(2200);

    // 5. Ripple Rings at key hubs
    const defaultRings = rings || [
      { lat: 19.076, lng: 72.8777, maxR: 4.5, propagationSpeed: 2, repeatPeriod: 1400, color: accentColor }, // Mumbai
      { lat: 37.7749, lng: -122.4194, maxR: 3.5, propagationSpeed: 1.5, repeatPeriod: 1800, color: pinkColor }, // SF
      { lat: 51.5074, lng: -0.1278, maxR: 3.5, propagationSpeed: 1.5, repeatPeriod: 2000, color: primaryColor }, // London
      { lat: 35.6762, lng: 139.6503, maxR: 3.5, propagationSpeed: 1.5, repeatPeriod: 1900, color: accentColor }, // Tokyo
      { lat: 40.7128, lng: -74.006, maxR: 3.5, propagationSpeed: 1.5, repeatPeriod: 2100, color: primaryColor } // NYC
    ];

    globe
      .ringsData(defaultRings)
      .ringColor('color')
      .ringMaxRadius('maxR')
      .ringPropagationSpeed('propagationSpeed')
      .ringRepeatPeriod('repeatPeriod');

    // 6. Hexed Dotted Continents
    fetch('/countries.geojson')
      .then(res => res.json())
      .then(countries => {
        if (!alive) return;
        globe
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.65)
          .hexPolygonUseDots(true)
          .hexPolygonColor(() => 'rgba(244, 243, 247, 0.88)');
      })
      .catch(err => {
        console.warn('Could not load countries.geojson:', err);
      });

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(-200, 300, 200);
    const dirLight2 = new THREE.DirectionalLight(0x7144e8, 1.1);
    dirLight2.position.set(200, -200, -100);

    scene.add(ambientLight);
    scene.add(dirLight1);
    scene.add(dirLight2);
    scene.add(globe);

    // Initial tilt towards India / Asia & northern hemisphere
    globe.rotation.x = 0.35;
    globe.rotation.y = -1.2;

    // 8. Render loop with IntersectionObserver & Page Visibility pause
    let isVisible = true;

    const animate = () => {
      if (!alive || !isVisible || document.hidden) return;
      controls.update();
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    const wake = () => {
      if (!alive || !isVisible || document.hidden) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    // 9. Resize & Visibility Handling
    const handleResize = () => {
      if (!container || !alive) return;
      const currentVw = typeof window !== 'undefined' ? window.innerWidth : container.clientWidth;
      const isPhone = currentVw <= 720;

      let w = container.clientWidth;
      let h = container.clientHeight;

      if (isPhone) {
        const mobileSize = getMobileGlobeSize(currentVw);
        w = mobileSize;
        h = mobileSize;
      }

      if (w === 0 || h === 0) return;
      camera.aspect = w / h;

      const currentAltitude = cameraAltitude !== undefined
        ? cameraAltitude
        : (isPhone ? 2.95 : 2.8);
      const currentY = isPhone ? 18 : 50;
      camera.position.set(0, currentY, currentAltitude * 100);

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      if (isPhone) {
        renderer.domElement.style.width = `${w}px`;
        renderer.domElement.style.height = `${h}px`;
        renderer.domElement.style.borderRadius = '50%';
        renderer.domElement.style.display = 'block';
        renderer.domElement.style.margin = '0 auto';
      } else {
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.borderRadius = '';
        renderer.domElement.style.margin = '';
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    const intersection = new IntersectionObserver((entries) => {
      const intersecting = entries.some((entry) => entry.isIntersecting);
      if (intersecting !== isVisible) {
        isVisible = intersecting;
        if (isVisible && !document.hidden) {
          wake();
        } else {
          cancelAnimationFrame(rafId);
        }
      }
    });
    intersection.observe(container);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else if (isVisible) {
        wake();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    // Start initial animation if visible
    wake();

    // Cleanup
    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      intersection.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [primaryColor, accentColor, pinkColor, atmosphereColor, autoRotateSpeed, cameraAltitude, arcs, rings]);

  return (
    <div
      ref={containerRef}
      className={`globe-container ${className}`.trim()}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        cursor: 'grab',
        ...style
      }}
      role="img"
      aria-label="Interactive 3D Globe"
    />
  );
}
