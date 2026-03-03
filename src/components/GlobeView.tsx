'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ThreeGlobe from 'three-globe';
import { coloniesData } from '@/app/colonies/data';
import { cn } from '@/lib/utils';

interface GlobeViewProps {
  selectedColonyId: string | null;
  onSelectColony: (id: string) => void;
}

export function GlobeView({ selectedColonyId, onSelectColony }: GlobeViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<ThreeGlobe | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#030305');

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.set(0, 0, 18);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Starfield ---
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true
    });

    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dLight.position.set(-100, 100, 150);
    scene.add(dLight);

    const goldPointLight = new THREE.PointLight(0xB88A2E, 2, 50);
    goldPointLight.position.set(20, 20, 20);
    scene.add(goldPointLight);

    // --- Orbit Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.minDistance = 8;
    controls.maxDistance = 40;
    controls.autoRotate = !selectedColonyId;
    controls.autoRotateSpeed = 0.3;
    controlsRef.current = controls;

    // --- Globe Setup ---
    const globe = new ThreeGlobe()
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      // Custom material for more depth
      .pointsData(coloniesData)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor((d: any) => d.status === 'Crown Jewel' ? '#B88A2E' : '#EAB308')
      .pointAltitude(0.01)
      .pointRadius(0.18)
      .pointsMerge(true)
      .pointsTransitionDuration(1000)
      // High-quality labels
      .labelsData(coloniesData)
      .labelLat('lat')
      .labelLng('lng')
      .labelText('name')
      .labelSize(0.6)
      .labelDotRadius(0.25)
      .labelColor(() => '#ffffff')
      .labelResolution(4)
      .labelIncludeDot(true)
      .labelAltitude(0.02);

    globeRef.current = globe;
    scene.add(globe);

    // Atmosphere Glow Effect
    const atmosphereGeometry = new THREE.SphereGeometry(5 * 1.1, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color('#4f46e5') },
        viewVector: { value: camera.position }
      },
      vertexShader: `
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewMatrix[2].xyz);
          intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 3.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float intensity;
        uniform vec3 glowColor;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, intensity * 0.4);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // --- Handle Clicks ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      // Check labels and points
      const intersects = raycaster.intersectObjects(globe.children, true);
      
      if (intersects.length > 0) {
        const clickedObj = intersects.find(intersect => (intersect.object as any).__data);
        if (clickedObj) {
          const colonyData = (clickedObj.object as any).__data;
          onSelectColony(colonyData.id);
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);

    // --- Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      
      // Update atmosphere shader uniforms
      atmosphereMaterial.uniforms.viewVector.value = camera.position;
      
      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onSelectColony]);

  // Sync state changes back to globe
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !selectedColonyId;
    }
  }, [selectedColonyId]);

  return (
    <div className="w-full h-full relative group">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      <div className="absolute bottom-8 left-8 z-20 pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity">
        <div className="flex flex-col gap-2 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Digital Archive Sphere</span>
          </div>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.1em]">Hold to rotate • Click labels to explore history</p>
        </div>
      </div>
    </div>
  );
}
