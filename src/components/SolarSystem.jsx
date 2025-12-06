import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const planetData = {
  mercury: { distance: 8, size: 0.38, color: '#8c7853', speed: 4.74, rotationSpeed: 0.002 },
  venus: { distance: 11, size: 0.95, color: '#ffc649', speed: 1.85, rotationSpeed: -0.001 },
  earth: { distance: 15, size: 1, color: '#4a90e2', speed: 1, rotationSpeed: 0.01, moons: [{ distance: 2, size: 0.27, color: '#c0c0c0', speed: 13.4 }] },
  mars: { distance: 19, size: 0.53, color: '#e27b58', speed: 0.53, rotationSpeed: 0.0095 },
  jupiter: { distance: 30, size: 2.8, color: '#c88b3a', speed: 0.084, rotationSpeed: 0.024, moons: [
    { distance: 4, size: 0.25, color: '#b8a896', speed: 5 },
    { distance: 5, size: 0.3, color: '#a89070', speed: 3.5 },
    { distance: 6.5, size: 0.38, color: '#968264', speed: 2 }
  ]},
  saturn: { distance: 45, size: 2.3, color: '#fad5a5', speed: 0.034, rotationSpeed: 0.022, ring: { inner: 2.8, outer: 4.2, color: '#e6d7b8' }, moons: [{ distance: 5, size: 0.4, color: '#f0e6d2', speed: 1.5 }]},
  uranus: { distance: 58, size: 1.6, color: '#4fd0e7', speed: 0.012, rotationSpeed: -0.014, ring: { inner: 2, outer: 2.5, color: '#6db8d0' } },
  neptune: { distance: 70, size: 1.55, color: '#4166f5', speed: 0.006, rotationSpeed: 0.016 }
};

export default function MagicalSolarSystem() {
  const mountRef = useRef(null);
  const [timeSpeed, setTimeSpeed] = useState(1);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 50, 120);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1';
    mountRef.current.appendChild(renderer.domElement);

    // Post-processing for bloom glow
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 2, 0.4, 0.85);
    composer.addPass(bloomPass);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    const sunLight = new THREE.PointLight(0xfff3c8, 2, 300, 1.5);
    scene.add(sunLight);

    // Stars
    const starGeo = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < 30000; i++) starPositions.push((Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000);
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, transparent: true, opacity: 0.8 }));
    scene.add(stars);

    // Sun
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(3, 64, 64),
      new THREE.MeshStandardMaterial({ emissive: 0xffcc00, emissiveIntensity: 2, color: 0xffaa00 })
    );
    scene.add(sun);

    // Planets & Moons
    const planets = [];
    const moons = [];
    const trails = [];

    Object.entries(planetData).forEach(([name, data]) => {
      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(data.size, 32, 32),
        new THREE.MeshStandardMaterial({ color: data.color, emissive: data.color, emissiveIntensity: 0.4 })
      );
      planet.userData = { data, positions: [] };
      scene.add(planet);
      planets.push(planet);

      // Aura
      const aura = new THREE.Mesh(
        new THREE.SphereGeometry(data.size * 1.5, 32, 32),
        new THREE.MeshBasicMaterial({ color: data.color, transparent: true, opacity: 0.08 })
      );
      planet.add(aura);

      // Ring
      if (data.ring) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(data.ring.inner, data.ring.outer, 64),
          new THREE.MeshStandardMaterial({ color: data.ring.color, side: THREE.DoubleSide, transparent: true, opacity: 0.7, emissive: data.ring.color })
        );
        ring.rotation.x = -Math.PI / 2;
        planet.add(ring);
      }

      // Moons
      if (data.moons) {
        data.moons.forEach(moonData => {
          const moon = new THREE.Mesh(
            new THREE.SphereGeometry(moonData.size, 24, 24),
            new THREE.MeshStandardMaterial({ color: moonData.color, emissive: moonData.color, emissiveIntensity: 0.3 })
          );
          moon.userData = { moonData, planetData: data };
          scene.add(moon);
          moons.push(moon);
        });
      }

      // Trails
      const trailGeo = new THREE.BufferGeometry();
      const trailPositions = new Float32Array(300 * 3); // max 100 points
      trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
      const trailMat = new THREE.LineBasicMaterial({ color: data.color, transparent: true, opacity: 0.4 });
      const trailLine = new THREE.Line(trailGeo, trailMat);
      scene.add(trailLine);
      trails.push(trailLine);
    });

    // Comets
    const cometGroup = new THREE.Group();
    for (let i = 0; i < 50; i++) {
      const comet = new THREE.Mesh(
        new THREE.SphereGeometry(0.05 + Math.random() * 0.1, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })
      );
      comet.userData = { angle: Math.random() * Math.PI * 2, distance: 20 + Math.random() * 60, speed: 0.001 + Math.random() * 0.003 };
      cometGroup.add(comet);
    }
    scene.add(cometGroup);

    // Camera drag & scroll parallax
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let cameraAngle = { theta: Math.PI / 4, phi: Math.PI / 6 };
    let cameraDistance = 50;
    let targetParallax = 0;
    let currentParallax = 0;

    const onMouseDown = e => { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; };
    const onMouseMove = e => { if (!isDragging) return; const dx = e.clientX - prevMouse.x; const dy = e.clientY - prevMouse.y; cameraAngle.theta -= dx * 0.003; cameraAngle.phi = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraAngle.phi - dy * 0.003)); prevMouse = { x: e.clientX, y: e.clientY }; };
    const onMouseUp = () => { isDragging = false; };
    const onWheel = e => { e.preventDefault(); cameraDistance = Math.max(10, Math.min(200, cameraDistance + e.deltaY * 0.05)); };
    const onScroll = () => { targetParallax = window.scrollY * 0.000002; };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll);

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime() * timeSpeed;
      currentParallax += (targetParallax - currentParallax) * 0.05;

      // Camera
      camera.position.x = cameraDistance * Math.sin(cameraAngle.theta) * Math.cos(cameraAngle.phi);
      camera.position.y = cameraDistance * Math.sin(cameraAngle.phi);
      camera.position.z = cameraDistance * Math.cos(cameraAngle.theta) * Math.cos(cameraAngle.phi);
      camera.lookAt(0, 0, 0);

      // Sun rotation
      sun.rotation.y += 0.002 * timeSpeed;

      // Planets & Trails
      planets.forEach((p, i) => {
        const d = p.userData.data;
        const angle = elapsed * d.speed * 0.01;
        p.position.x = Math.cos(angle) * d.distance;
        p.position.z = Math.sin(angle) * d.distance;
        p.rotation.y += d.rotationSpeed * timeSpeed;

        // Trail
        const positions = p.userData.positions;
        positions.push(new THREE.Vector3(p.position.x, p.position.y, p.position.z));
        if (positions.length > 100) positions.shift();
        const trailPos = trails[i].geometry.attributes.position.array;
        positions.forEach((v, idx) => { trailPos[idx * 3] = v.x; trailPos[idx * 3 + 1] = v.y; trailPos[idx * 3 + 2] = v.z; });
        trails[i].geometry.setDrawRange(0, positions.length);
        trails[i].geometry.attributes.position.needsUpdate = true;
      });

      // Moons
      moons.forEach(m => {
        const { moonData, planetData } = m.userData;
        const planetAngle = elapsed * planetData.speed * 0.01;
        const planetX = Math.cos(planetAngle) * planetData.distance;
        const planetZ = Math.sin(planetAngle) * planetData.distance;
        const moonAngle = elapsed * moonData.speed * 0.01;
        m.position.x = planetX + Math.cos(moonAngle) * moonData.distance;
        m.position.z = planetZ + Math.sin(moonAngle) * moonData.distance;
      });

      // Comets orbit
      cometGroup.children.forEach(c => {
        c.userData.angle += c.userData.speed * timeSpeed;
        c.position.x = Math.cos(c.userData.angle) * c.userData.distance;
        c.position.z = Math.sin(c.userData.angle) * c.userData.distance;
      });

      // Star shimmer parallax
      stars.rotation.y += 0.0003 + currentParallax;

      composer.render();
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [timeSpeed]);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}
