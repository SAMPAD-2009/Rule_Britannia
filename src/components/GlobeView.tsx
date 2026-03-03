
'use client';

import React, { useEffect, useRef, useState } from 'react';
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
    scene.background = new THREE.Color('#050508');

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 15;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // --- Orbit Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.minDistance = 7;
    controls.maxDistance = 25;
    controls.autoRotate = !selectedColonyId;
    controls.autoRotateSpeed = 0.5;
    controlsRef.current = controls;

    // --- Globe Setup ---
    const globe = new ThreeGlobe()
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .pointsData(coloniesData)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor((d: any) => d.status === 'Crown Jewel' ? '#B88A2E' : '#4f46e5')
      .pointAltitude(0.02)
      .pointRadius(0.12)
      .labelsData(coloniesData)
      .labelLat('lat')
      .labelLng('lng')
      .labelText('name')
      .labelSize(0.6)
      .labelDotRadius(0.2)
      .labelColor(() => 'rgba(255, 255, 255, 0.8)')
      .labelResolution(3);

    globeRef.current = globe;
    scene.add(globe);

    // Atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(5 * 1.05, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color('#4f46e5') },
        viewVector: { value: camera.position }
      },
      vertexShader: `
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying float intensity;
        uniform vec3 glowColor;
        void main() {
          gl_FragColor = vec4(glowColor, intensity);
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
      
      // Since three-globe objects are complex, we check intersections with the points group
      const intersects = raycaster.intersectObjects(globe.children, true);
      
      if (intersects.length > 0) {
        // three-globe stores data in __data
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
      const newWidth = containerRef.current?.clientWidth || 0;
      const newHeight = containerRef.current?.clientHeight || 0;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Sync state changes back to globe
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !selectedColonyId;
    }
    
    if (globeRef.current && selectedColonyId) {
      const colony = coloniesData.find(c => c.id === selectedColonyId);
      if (colony && cameraRef.current) {
        // Basic camera centering logic could go here
      }
    }
  }, [selectedColonyId]);

  return (
    <div className="w-full h-full relative">
      <div ref={containerRef} className="w-full h-full" />
      
      <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
        <div className="flex flex-col gap-2 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Interactive Archive Globe</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.1em]">Rotate to explore • Click markers for details</p>
        </div>
      </div>
    </div>
  );
}
