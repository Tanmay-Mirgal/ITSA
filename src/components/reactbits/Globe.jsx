'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * React Bits Pro Globe:
 * Dotted 3D globe with animated great-circle arcs, atmosphere glow, and interactive controls.
 */
export default function Globe({
  className = '',
  primaryColor = '#9b6cff',
  accentColor = '#4cd8f8',
  pinkColor = '#f472b6',
  atmosphereColor = '#7144e8',
  autoRotateSpeed = 0.85,
  cameraAltitude = 2.8,
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

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 50, cameraAltitude * 100);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
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
    globeMat.color = new THREE.Color(0x06070d);
    globeMat.emissive = new THREE.Color(0x0d0b1a);
    globeMat.emissiveIntensity = 0.5;
    globeMat.transparent = true;
    globeMat.opacity = 0.9;

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
          .hexPolygonColor(() => 'rgba(244, 243, 247, 0.76)');
      })
      .catch(err => {
        console.warn('Could not load countries.geojson:', err);
      });

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight1.position.set(-200, 300, 200);
    const dirLight2 = new THREE.DirectionalLight(0x7144e8, 1.2);
    dirLight2.position.set(200, -200, -100);

    scene.add(ambientLight);
    scene.add(dirLight1);
    scene.add(dirLight2);
    scene.add(globe);

    // Initial tilt towards India / Asia & northern hemisphere
    globe.rotation.x = 0.35;
    globe.rotation.y = -1.2;

    // 8. Render loop
    const animate = () => {
      if (!alive) return;
      controls.update();
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container || !alive) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
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
