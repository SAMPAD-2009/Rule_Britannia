
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
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions check
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#050508');

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.set(0, 0, 400);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- High-Fidelity Archival Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(-200, 200, 200);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xB88A2E, 1.0);
    fillLight.position.set(200, -100, 100);
    scene.add(fillLight);

    // --- Globe Setup ---
    const globe = new ThreeGlobe()
      .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
      .pointsData(coloniesData)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor(() => '#B88A2E')
      .pointAltitude(0.05) // Lifted to prevent clipping
      .pointRadius(1.5)
      .labelsData(coloniesData)
      .labelLat('lat')
      .labelLng('lng')
      .labelText('name')
      .labelSize(2.5)
      .labelDotRadius(0.8)
      .labelColor(() => '#ffffff')
      .labelAltitude(0.06); // Lifted further to stay on top

    scene.add(globe);

    // Backup physical sphere to guarantee visibility while textures load
    const globeBase = new THREE.Mesh(
      new THREE.SphereGeometry(99, 64, 64),
      new THREE.MeshStandardMaterial({ 
        color: 0x050508,
        roughness: 0.9,
        metalness: 0.1
      })
    );
    scene.add(globeBase);

    // --- Orbit Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.6;
    controls.minDistance = 200;
    controls.maxDistance = 800;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controlsRef.current = controls;

    // --- Interaction (Raycasting) ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current || !renderer.domElement) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      // Check globe children for markers/labels
      const intersects = raycaster.intersectObjects(globe.children, true);
      
      for (const intersect of intersects) {
        let obj = intersect.object;
        // Traverse up to find the object with historical metadata
        while (obj) {
          if ((obj as any).__data) {
            onSelectColony((obj as any).__data.id);
            return;
          }
          obj = obj.parent as THREE.Object3D;
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);

    // --- Animation Loop ---
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // --- Resize Handler ---
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
      renderer.domElement?.removeEventListener('pointerdown', onPointerDown);
      cancelAnimationFrame(frameId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectColony]);

  // Update autoRotate state without re-initializing the entire scene
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !selectedColonyId;
    }
  }, [selectedColonyId]);

  return (
    <div className="w-full h-full bg-[#050508]">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
