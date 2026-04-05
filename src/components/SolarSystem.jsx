import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function SolarSystem() {
  const mountRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    
    // Clear previous
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    // === SETUP ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020210); // Deep space color
    scene.fog = new THREE.FogExp2(0x020210, 0.0005); // Light fog for depth
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 18);
    camera.lookAt(0, 0, 0);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    
    renderer.domElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -100;
      pointer-events: none;
    `;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // === BEAUTIFUL STARS (Twinkling) ===
    const starCount = isMobile ? 1200 : 2500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      // Distribute stars in a sphere
      const radius = 80 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Star colors (white, slightly blue/yellow)
      const colorChoice = Math.random();
      if (colorChoice < 0.7) {
        starColors[i * 3] = 1;
        starColors[i * 3 + 1] = 1;
        starColors[i * 3 + 2] = 1;
      } else if (colorChoice < 0.85) {
        starColors[i * 3] = 1;
        starColors[i * 3 + 1] = 0.8;
        starColors[i * 3 + 2] = 0.6;
      } else {
        starColors[i * 3] = 0.6;
        starColors[i * 3 + 1] = 0.7;
        starColors[i * 3 + 2] = 1;
      }
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    
    const starMaterial = new THREE.PointsMaterial({ size: 0.15, vertexColors: true, transparent: true, opacity: 0.8 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    // === CENTRAL GLOW ===
    const glowGeometry = new THREE.SphereGeometry(1.8, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa66, transparent: true, opacity: 0.15 });
    const centralGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(centralGlow);
    
    // === SUN ===
    const sunGeometry = new THREE.SphereGeometry(1.2, 48, 48);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa66,
      emissive: 0xff4422,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.3
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    
    // Sun glow effect
    const sunGlowGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const sunGlowMaterial = new THREE.MeshBasicMaterial({ color: 0xff8844, transparent: true, opacity: 0.2, side: THREE.BackSide });
    const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
    sun.add(sunGlow);
    
    // === LIGHTING ===
    const ambientLight = new THREE.AmbientLight(0x22223b, 0.4);
    scene.add(ambientLight);
    
    const sunLight = new THREE.PointLight(0xffaa66, 1.2, 40);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);
    
    const fillLight = new THREE.DirectionalLight(0x6688aa, 0.3);
    fillLight.position.set(5, 10, 7);
    scene.add(fillLight);
    
    // === PLANETS (Beautiful colors) ===
    const planets = [
      { name: 'Mercury', size: 0.18, distance: 2.5, color: 0xd4a373, speed: 0.025, emissive: 0x442200 },
      { name: 'Venus', size: 0.22, distance: 3.5, color: 0xf4d03f, speed: 0.018, emissive: 0x442200 },
      { name: 'Earth', size: 0.24, distance: 4.8, color: 0x5dade2, speed: 0.015, emissive: 0x004466 },
      { name: 'Mars', size: 0.2, distance: 6.2, color: 0xe67e22, speed: 0.012, emissive: 0x442200 },
      { name: 'Jupiter', size: 0.48, distance: 8.5, color: 0xd4a373, speed: 0.008, emissive: 0x442200 },
      { name: 'Saturn', size: 0.42, distance: 10.5, color: 0xf0c27b, speed: 0.006, emissive: 0x442200 },
      { name: 'Uranus', size: 0.32, distance: 12.8, color: 0x7fb3d5, speed: 0.0045, emissive: 0x224466 },
      { name: 'Neptune', size: 0.31, distance: 15, color: 0x2e86c1, speed: 0.0035, emissive: 0x004488 }
    ];
    
    const planetMeshes = [];
    
    planets.forEach((planet, i) => {
      const geometry = new THREE.SphereGeometry(planet.size, 48, 48);
      const material = new THREE.MeshStandardMaterial({
        color: planet.color,
        emissive: planet.emissive,
        emissiveIntensity: 0.1,
        metalness: 0.4,
        roughness: 0.6
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { distance: planet.distance, speed: planet.speed, angle: i * Math.PI * 2 / planets.length };
      scene.add(mesh);
      planetMeshes.push(mesh);
      
      // Add tiny glow to each planet
      const planetGlow = new THREE.Mesh(
        new THREE.SphereGeometry(planet.size * 1.2, 8, 8),
        new THREE.MeshBasicMaterial({ color: planet.color, transparent: true, opacity: 0.1 })
      );
      mesh.add(planetGlow);
      
      // Saturn's ring
      if (planet.name === 'Saturn') {
        const ringGeometry = new THREE.TorusGeometry(planet.size * 1.4, 0.08, 32, 100);
        const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xc9a87c, metalness: 0.6, roughness: 0.4 });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2.2;
        ring.rotation.z = 0.3;
        mesh.add(ring);
      }
    });
    
    // === ORBIT RINGS (Beautiful circles) ===
    const orbitColors = [0x44aaff, 0x66ccff, 0x88ddff, 0xaaeeff, 0xccffff];
    planets.forEach((planet, i) => {
      const points = [];
      const radius = planet.distance;
      const segments = 128;
      
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        points.push(new THREE.Vector3(x, 0, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: orbitColors[i % orbitColors.length], transparent: true, opacity: 0.2 });
      const orbit = new THREE.LineLoop(geometry, material);
      scene.add(orbit);
    });
    
    // === NEBULA EFFECT (Particle cloud) ===
    const nebulaCount = isMobile ? 300 : 600;
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);
    
    for (let i = 0; i < nebulaCount; i++) {
      // Create a cloud in a torus shape
      const radius = 12 + Math.random() * 6;
      const angle = Math.random() * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 4;
      
      nebulaPositions[i * 3] = Math.cos(angle) * radius;
      nebulaPositions[i * 3 + 1] = yOffset;
      nebulaPositions[i * 3 + 2] = Math.sin(angle) * radius;
      
      // Purple/blue nebula colors
      nebulaColors[i * 3] = 0.6 + Math.random() * 0.4;
      nebulaColors[i * 3 + 1] = 0.3 + Math.random() * 0.4;
      nebulaColors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
    }
    
    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));
    
    const nebulaMaterial = new THREE.PointsMaterial({ size: 0.08, vertexColors: true, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending });
    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);
    
    // === FLOATING PARTICLES ===
    const particleCount = isMobile ? 400 : 800;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 10;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0x88aaff, size: 0.05, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // === ANIMATION ===
    let time = 0;
    let frameId;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.008;
      
      // Rotate sun
      sun.rotation.y += 0.008;
      centralGlow.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
      
      // Animate planets
      planetMeshes.forEach(mesh => {
        mesh.userData.angle += mesh.userData.speed;
        const x = Math.cos(mesh.userData.angle) * mesh.userData.distance;
        const z = Math.sin(mesh.userData.angle) * mesh.userData.distance;
        mesh.position.set(x, 0, z);
        mesh.rotation.y += 0.02;
      });
      
      // Rotate stars slowly
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0003;
      
      // Rotate nebula
      nebula.rotation.y += 0.001;
      nebula.rotation.x = Math.sin(time * 0.2) * 0.1;
      
      // Floating particles move slightly
      particles.rotation.y += 0.002;
      
      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = 5 + Math.sin(time * 0.2) * 0.2;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // === RESIZE HANDLER ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // === CLEANUP ===
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -100,
        pointerEvents: 'none'
      }}
    />
  );
}