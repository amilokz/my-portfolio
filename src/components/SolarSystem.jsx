import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';

// Responsive planet data (scales based on device)
const getPlanetData = (isMobile) => ({
  mercury: { 
    distance: isMobile ? 6 : 8, 
    size: isMobile ? 0.3 : 0.38, 
    color: '#8c7853', 
    speed: 4.74, 
    rotationSpeed: 0.002 
  },
  venus: { 
    distance: isMobile ? 8 : 11, 
    size: isMobile ? 0.7 : 0.95, 
    color: '#ffc649', 
    speed: 1.85, 
    rotationSpeed: -0.001 
  },
  earth: { 
    distance: isMobile ? 11 : 15, 
    size: isMobile ? 0.8 : 1, 
    color: '#4a90e2', 
    speed: 1, 
    rotationSpeed: 0.01, 
    moons: [{ distance: 1.5, size: 0.2, color: '#c0c0c0', speed: 13.4 }] 
  },
  mars: { 
    distance: isMobile ? 14 : 19, 
    size: isMobile ? 0.4 : 0.53, 
    color: '#e27b58', 
    speed: 0.53, 
    rotationSpeed: 0.0095 
  },
  jupiter: { 
    distance: isMobile ? 22 : 30, 
    size: isMobile ? 2.2 : 2.8, 
    color: '#c88b3a', 
    speed: 0.084, 
    rotationSpeed: 0.024, 
    moons: [
      { distance: 3, size: 0.2, color: '#b8a896', speed: 5 },
      { distance: 3.8, size: 0.25, color: '#a89070', speed: 3.5 },
      { distance: 4.8, size: 0.3, color: '#968264', speed: 2 }
    ]
  },
  saturn: { 
    distance: isMobile ? 33 : 45, 
    size: isMobile ? 1.8 : 2.3, 
    color: '#fad5a5', 
    speed: 0.034, 
    rotationSpeed: 0.022, 
    ring: { inner: isMobile ? 2.2 : 2.8, outer: isMobile ? 3.2 : 4.2, color: '#e6d7b8' }, 
    moons: [{ distance: 4, size: 0.3, color: '#f0e6d2', speed: 1.5 }]
  },
  uranus: { 
    distance: isMobile ? 43 : 58, 
    size: isMobile ? 1.3 : 1.6, 
    color: '#4fd0e7', 
    speed: 0.012, 
    rotationSpeed: -0.014, 
    ring: { inner: isMobile ? 1.6 : 2, outer: isMobile ? 2 : 2.5, color: '#6db8d0' } 
  },
  neptune: { 
    distance: isMobile ? 52 : 70, 
    size: isMobile ? 1.2 : 1.55, 
    color: '#4166f5', 
    speed: 0.006, 
    rotationSpeed: 0.016 
  }
});

// NASA Textures (optimized for mobile)
const textureLoader = new THREE.TextureLoader();
const planetTextures = {
  sun: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001589/GSFC_20171208_Archive_e001589~medium.jpg',
  earth: 'https://images-assets.nasa.gov/image/geophys_0998_0998/geophys_0998_0998~medium.jpg',
  mars: 'https://images-assets.nasa.gov/image/PIA00407/PIA00407~medium.jpg',
  jupiter: 'https://images-assets.nasa.gov/image/PIA07782/PIA07782~medium.jpg',
  saturn: 'https://images-assets.nasa.gov/image/PIA02225/PIA02225~medium.jpg'
};

export default function SolarSystem() {
  const mountRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [performanceMode, setPerformanceMode] = useState(isMobile);
  
  // Responsive detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setPerformanceMode(mobile);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const planetData = getPlanetData(isMobile);

  // Create responsive planet
  const createResponsivePlanet = useCallback((name, data, scene, isMobile) => {
    const segments = isMobile ? 32 : 64;
    const geometry = new THREE.SphereGeometry(data.size, segments, segments);
    
    let material;
    if (!performanceMode && planetTextures[name]) {
      try {
        const texture = textureLoader.load(planetTextures[name]);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        
        material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.8,
          metalness: 0.2,
          emissive: data.color,
          emissiveIntensity: 0.1
        });
      } catch (e) {
        // Fallback to colored material if texture fails
        material = new THREE.MeshStandardMaterial({
          color: data.color,
          roughness: 0.7,
          metalness: 0.3,
          emissive: data.color,
          emissiveIntensity: 0.2
        });
      }
    } else {
      // Performance mode - simpler materials
      material = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.9
      });
    }
    
    const planet = new THREE.Mesh(geometry, material);
    planet.castShadow = !isMobile; // Disable shadows on mobile for performance
    planet.receiveShadow = !isMobile;
    
    // Axial tilt for realism
    planet.rotation.x = Math.random() * 0.3 - 0.15;
    planet.userData = { 
      name,
      ...data, 
      currentAngle: Math.random() * Math.PI * 2,
      tiltSpeed: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1)
    };
    
    // Atmospheric glow (only on desktop for performance)
    if (!isMobile) {
      const atmosphereGeometry = new THREE.SphereGeometry(data.size * 1.08, 24, 24);
      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: data.color,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      planet.add(atmosphere);
    }
    
    return planet;
  }, [performanceMode]);

  // Create responsive asteroid belt
  const createAsteroidBelt = useCallback((isMobile) => {
    const asteroidCount = isMobile ? 1000 : 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(asteroidCount * 3);
    const sizes = new Float32Array(asteroidCount);
    
    for (let i = 0; i < asteroidCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 18 + Math.random() * 6;
      const verticalSpread = (Math.random() - 0.5) * 2;
      
      positions[i * 3] = Math.cos(angle) * distance;
      positions[i * 3 + 1] = verticalSpread;
      positions[i * 3 + 2] = Math.sin(angle) * distance;
      
      sizes[i] = isMobile ? 0.05 : 0.08;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
      color: 0x888888,
      size: isMobile ? 0.05 : 0.08,
      transparent: true,
      opacity: 0.7
    });
    
    return new THREE.Points(geometry, material);
  }, []);

  useEffect(() => {
    console.log(`🚀 SolarSystem loading in ${isMobile ? 'mobile' : 'desktop'} mode`);
    
    if (!mountRef.current) return;
    
    // Clear previous
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    // Responsive scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011); // Dark blue instead of pure black
    
    // Responsive camera
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 65 : 75,
      window.innerWidth / window.innerHeight,
      0.1,
      isMobile ? 500 : 1000
    );
    camera.position.set(0, isMobile ? 25 : 40, isMobile ? 60 : 80);
    
    // Responsive renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, // Disable antialias on mobile for performance
      alpha: true,
      powerPreference: isMobile ? "low-power" : "high-performance"
    });
    
    // Set pixel ratio based on device
    const pixelRatio = isMobile ? Math.min(window.devicePixelRatio, 1) : Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Canvas styles
    renderer.domElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -100;
      pointer-events: none;
      ${isMobile ? 'image-rendering: -webkit-optimize-contrast;' : ''}
    `;
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Post-processing (only on desktop for performance)
    let composer;
    if (!isMobile) {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        isMobile ? 0.8 : 1.2,
        isMobile ? 0.2 : 0.4,
        isMobile ? 0.5 : 0.6
      );
      composer.addPass(bloomPass);
      
      // Anti-aliasing for desktop
      if (window.devicePixelRatio === 1) {
        composer.addPass(new SMAAPass());
      }
    }
    
    // Responsive lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isMobile ? 0.3 : 0.5);
    scene.add(ambientLight);
    
    const sunLight = new THREE.PointLight(0xfff3c8, isMobile ? 1.5 : 2, 200);
    sunLight.position.set(0, 0, 0);
    scene.add(sunLight);
    
    if (!isMobile) {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(30, 30, 30);
      scene.add(directionalLight);
    }
    
    // Stars - responsive count
    const starCount = isMobile ? 2000 : 8000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * (isMobile ? 1000 : 2000);
      starPositions[i + 1] = (Math.random() - 0.5) * (isMobile ? 1000 : 2000);
      starPositions[i + 2] = (Math.random() - 0.5) * (isMobile ? 1000 : 2000);
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: isMobile ? 0.8 : 1.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: isMobile ? 0.7 : 0.9
    });
    
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    
    // Sun - responsive size
    const sunSize = isMobile ? 3 : 5;
    const sunGeometry = new THREE.SphereGeometry(sunSize, isMobile ? 32 : 64, isMobile ? 32 : 64);
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      emissive: 0xffd700,
      emissiveIntensity: isMobile ? 1 : 1.5
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);
    
    // Sun glow (only on desktop)
    if (!isMobile) {
      const sunGlowGeometry = new THREE.SphereGeometry(sunSize * 1.4, 24, 24);
      const sunGlowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff9900,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide
      });
      const sunGlow = new THREE.Mesh(sunGlowGeometry, sunGlowMaterial);
      sun.add(sunGlow);
    }
    
    // Create planets
    const planets = [];
    const moons = [];
    
    Object.entries(planetData).forEach(([name, data]) => {
      const planet = createResponsivePlanet(name, data, scene, isMobile);
      scene.add(planet);
      planets.push(planet);
      
      // Create moons if specified
      if (data.moons && !isMobile) { // Skip moons on mobile for performance
        data.moons.forEach(moonData => {
          const moonGeometry = new THREE.SphereGeometry(moonData.size, 12, 12);
          const moonMaterial = new THREE.MeshBasicMaterial({
            color: moonData.color,
            emissive: moonData.color,
            emissiveIntensity: 0.1
          });
          
          const moon = new THREE.Mesh(moonGeometry, moonMaterial);
          moon.userData = { ...moonData, planet, currentAngle: Math.random() * Math.PI * 2 };
          scene.add(moon);
          moons.push(moon);
        });
      }
      
      // Rings (only on desktop)
      if (data.ring && !isMobile) {
        const ringGeometry = new THREE.RingGeometry(data.ring.inner, data.ring.outer, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: data.ring.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.6
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        planet.add(ring);
      }
    });
    
    // Asteroid belt (only on desktop)
    let asteroids = null;
    if (!isMobile) {
      asteroids = createAsteroidBelt(isMobile);
      scene.add(asteroids);
    }
    
    // Orbital trails (only on desktop)
    const trails = [];
    if (!isMobile) {
      planets.forEach((planet, index) => {
        const points = [];
        const segments = 32;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          const x = Math.cos(angle) * planet.userData.distance;
          const z = Math.sin(angle) * planet.userData.distance;
          points.push(new THREE.Vector3(x, 0, z));
        }
        
        const trailGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const trailMaterial = new THREE.LineBasicMaterial({
          color: planet.userData.color,
          transparent: true,
          opacity: 0.2,
          linewidth: 1
        });
        
        const trail = new THREE.Line(trailGeometry, trailMaterial);
        scene.add(trail);
        trails.push(trail);
      });
    }
    
    // Responsive animation
    let animationId = null;
    let lastTime = 0;
    
    const animate = (currentTime) => {
      animationId = requestAnimationFrame(animate);
      
      const deltaTime = lastTime ? (currentTime - lastTime) / 1000 : 0;
      lastTime = currentTime;
      
      // Rotate sun
      sun.rotation.y += 0.001 * (isMobile ? 0.5 : 1);
      
      // Animate planets
      planets.forEach((planet) => {
        const data = planet.userData;
        data.currentAngle += data.speed * deltaTime * (isMobile ? 0.3 : 0.5);
        
        const x = Math.cos(data.currentAngle) * data.distance;
        const z = Math.sin(data.currentAngle) * data.distance;
        
        planet.position.set(x, 0, z);
        planet.rotation.y += data.rotationSpeed * (isMobile ? 0.5 : 1);
        planet.rotation.x += data.tiltSpeed * deltaTime;
      });
      
      // Animate moons (only on desktop)
      if (!isMobile) {
        moons.forEach(moon => {
          const moonData = moon.userData;
          const planetData = moonData.planet.userData;
          
          moonData.currentAngle += moonData.speed * deltaTime * 2;
          const moonX = Math.cos(moonData.currentAngle) * moonData.distance;
          const moonZ = Math.sin(moonData.currentAngle) * moonData.distance;
          
          moon.position.set(
            moonData.planet.position.x + moonX,
            0,
            moonData.planet.position.z + moonZ
          );
        });
      }
      
      // Animate asteroids
      if (asteroids) {
        asteroids.rotation.y += 0.0001;
      }
      
      // Rotate stars slowly
      stars.rotation.y += 0.00005;
      
      // Render
      if (isMobile) {
        renderer.render(scene, camera);
      } else {
        composer.render();
      }
    };
    
    // Start animation with throttled FPS on mobile
    if (isMobile) {
      // Throttle to 30fps on mobile
      const animateMobile = () => {
        animate(Date.now());
        setTimeout(animateMobile, 32); // ~30fps
      };
      animateMobile();
    } else {
      animate(0);
    }
    
    // Responsive resize handler
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      if (!mobile && composer) {
        composer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Touch/mobile interaction
    let touchStart = null;
    const handleTouchStart = (e) => {
      touchStart = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now()
      };
    };
    
    const handleTouchMove = (e) => {
      if (!touchStart || !isMobile) return;
      
      const touchCurrent = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
      
      const deltaX = touchCurrent.x - touchStart.x;
      const deltaY = touchCurrent.y - touchStart.y;
      
      // Rotate scene based on touch
      stars.rotation.y += deltaX * 0.0005;
      stars.rotation.x += deltaY * 0.0005;
      
      touchStart = touchCurrent;
    };
    
    const handleTouchEnd = () => {
      touchStart = null;
    };
    
    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    
    // Cleanup
    return () => {
      console.log("🧹 Cleaning up SolarSystem");
      window.removeEventListener('resize', handleResize);
      
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      }
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      // Dispose resources
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(m => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isMobile, performanceMode, planetData, createResponsivePlanet, createAsteroidBelt]);

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
        pointerEvents: 'none',
        WebkitTapHighlightColor: 'transparent'
      }}
    />
  );
}