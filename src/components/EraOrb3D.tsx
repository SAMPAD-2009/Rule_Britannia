'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function EraOrb3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create a wireframe "Chronos" sphere
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xB88A2E,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner core
    const coreGeom = new THREE.IcosahedronGeometry(0.4, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xB88A2E,
      transparent: true,
      opacity: 0.8,
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    camera.position.z = 2.5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      sphere.rotation.x += 0.005;
      core.rotation.y -= 0.02;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeom.dispose();
      coreMat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-32 md:h-40 relative group cursor-pointer" />;
}
