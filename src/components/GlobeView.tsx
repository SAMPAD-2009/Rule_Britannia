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

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    // --- Scene ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#050508');

    // --- Camera ---
    // Increase camera distance to ensure globe (radius 100) is well-framed
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.set(0, 0, 400);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Lighting ---
    // High intensity museum-style lighting for dark textures
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dLight1.position.set(200, 200, 200);
    scene.add(dLight1);

    const dLight2 = new THREE.DirectionalLight(0xB88A2E, 1.5);
    dLight2.position.set(-200, -200, -200);
    scene.add(dLight2);

    // --- Stars Background ---
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 });
    const starVertices = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // --- Globe ---
    const globe = new ThreeGlobe()
      .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
      .pointsData(coloniesData)
      .pointColor(() => '#B88A2E')
      .pointAltitude(0.01)
      .pointRadius(1.2)
      .labelsData(coloniesData)
      .labelText('name')
      .labelSize(1.8)
      .labelDotRadius(0.4)
      .labelColor(() => '#ffffff')
      .labelAltitude(0.02)
      .labelResolution(3);

    // Add a dark base sphere to guarantee visibility while textures load
    const baseSphere = new THREE.Mesh(
      new THREE.SphereGeometry(100, 64, 64),
      new THREE.MeshPhongMaterial({ color: '#111111', transparent: true, opacity: 0.9 })
    );
    globe.add(baseSphere);

    scene.add(globe);
    globeRef.current = globe;

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.minDistance = 250;
    controls.maxDistance = 800;
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
        let obj = intersect.object;
        // Traverse up the parent chain to find data attached by three-globe
        while (obj && !(obj as any).__data) {
          obj = obj.parent as any;
        }
        
        const data = (obj as any)?.__data;
        if (data && data.id) {
          onSelectColony(data.id);
          break;
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
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onSelectColony]);

  // Handle auto-rotate state independently to prevent full re-initialization
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !selectedColonyId;
    }
  }, [selectedColonyId]);

  return (
    <div className="w-full h-full bg-[#050508] relative overflow-hidden">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="px-6 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
           <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em]">
             Rotate the World and Select a Golden Marker
           </p>
        </div>
      </div>
    </div>
  );
}
