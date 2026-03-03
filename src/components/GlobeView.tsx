'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ThreeGlobe from 'three-globe';
import { coloniesData } from '@/app/colonies/data';

interface GlobeViewProps {
  selectedColonyId: string | null;
  onSelectColony: (id: string) => void;
}

export function GlobeView({ selectedColonyId, onSelectColony }: GlobeViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const globeRef = useRef<ThreeGlobe | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#050508');

    // Camera adjusted to see a 100-radius sphere
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.set(0, 0, 280);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dLight = new THREE.DirectionalLight(0xffffff, 2);
    dLight.position.set(-200, 200, 200);
    scene.add(dLight);

    const goldPointLight = new THREE.PointLight(0xB88A2E, 2, 500);
    goldPointLight.position.set(150, 150, 150);
    scene.add(goldPointLight);

    // --- Orbit Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.8;
    controls.minDistance = 150;
    controls.maxDistance = 600;
    controls.autoRotate = !selectedColonyId;
    controls.autoRotateSpeed = 0.5;
    controlsRef.current = controls;

    // --- Globe Setup ---
    // Using the suggested high-contrast dark texture
    const globe = new ThreeGlobe()
      .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .pointsData(coloniesData)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor((d: any) => d.status === 'Crown Jewel' ? '#B88A2E' : '#EAB308')
      .pointAltitude(0.02)
      .pointRadius(0.8)
      .pointsMerge(true)
      .labelsData(coloniesData)
      .labelLat('lat')
      .labelLng('lng')
      .labelText('name')
      .labelSize(1.2)
      .labelDotRadius(0.5)
      .labelColor(() => '#ffffff')
      .labelResolution(4)
      .labelAltitude(0.05);

    globeRef.current = globe;
    scene.add(globe);

    // --- Interaction ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event: MouseEvent) => {
      if (!renderer.domElement) return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      
      const clicked = intersects.find(i => (i.object as any).__data);
      if (clicked) {
        onSelectColony((clicked.object as any).__data.id);
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);

    // --- Animation Loop ---
    const animate = () => {
      const frameId = requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onSelectColony]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !selectedColonyId;
    }
  }, [selectedColonyId]);

  return (
    <div className="w-full h-full relative group bg-[#050508]">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      <div className="absolute bottom-8 left-8 z-20 pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity">
        <div className="flex flex-col gap-2 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Digital Archive Sphere</span>
          </div>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.1em]">Drag to rotate • Click labels to explore history</p>
        </div>
      </div>
    </div>
  );
}