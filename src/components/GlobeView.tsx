
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
  const controlsRef = useRef<OrbitControls | null>(null);
  const globeRef = useRef<ThreeGlobe | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // --- Scene ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#050508');

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.set(0, 0, 350);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dLight1 = new THREE.DirectionalLight(0xffffff, 2);
    dLight1.position.set(150, 150, 150);
    scene.add(dLight1);

    const dLight2 = new THREE.DirectionalLight(0xB88A2E, 1);
    dLight2.position.set(-150, -150, -150);
    scene.add(dLight2);

    // --- Globe ---
    const globe = new ThreeGlobe()
      .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
      .pointsData(coloniesData)
      .pointColor(() => '#B88A2E')
      .pointAltitude(0.01)
      .pointRadius(0.8)
      .labelsData(coloniesData)
      .labelText('name')
      .labelSize(1.5)
      .labelDotRadius(0.3)
      .labelColor(() => '#ffffff')
      .labelAltitude(0.02)
      .labelResolution(3);

    scene.add(globe);
    globeRef.current = globe;

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 200;
    controls.maxDistance = 600;
    controlsRef.current = controls;

    // --- Raycaster for Interaction ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(globe.children, true);
      
      for (const intersect of intersects) {
        // three-globe stores its original data in the __data property of the object
        const data = (intersect.object as any).__data;
        if (data && data.id) {
          onSelectColony(data.id);
          break;
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);

    // --- Animation ---
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onSelectColony]);

  // Sync auto-rotate with selection state
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !selectedColonyId;
    }
  }, [selectedColonyId]);

  return (
    <div className="w-full h-full bg-[#050508] relative overflow-hidden">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="px-6 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
           <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
             Rotate the World and Select a Golden Marker
           </p>
        </div>
      </div>
    </div>
  );
}
