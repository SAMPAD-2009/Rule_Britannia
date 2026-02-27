
"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

const timelineEvents = [
  { year: '1583', title: 'Newfoundland Colony', desc: 'First overseas colony established by Sir Humphrey Gilbert.' },
  { year: '1707', title: 'Acts of Union', desc: 'The Kingdom of Great Britain is formed by uniting England and Scotland.' },
  { year: '1805', title: 'Battle of Trafalgar', desc: 'Nelson secures British naval supremacy for over a century.' },
  { year: '1851', title: 'The Great Exhibition', desc: 'A showcase of British industrial might and Victorian innovation.' },
  { year: '1901', title: 'Height of Empire', desc: 'Rule over one-fifth of the world population and a quarter of its land.' },
];

export function ThreeTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Basic Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / 600, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, 600);
    containerRef.current.appendChild(renderer.domElement);

    // Timeline Path
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10, 0, 10),
      new THREE.Vector3(-5, 2, 5),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(5, -2, -5),
      new THREE.Vector3(10, 0, -10),
    ]);

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xB88A2E, linewidth: 2 });
    const curveObject = new THREE.Line(geometry, material);
    scene.add(curveObject);

    // Event Spheres
    const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xEB6247, 
      emissive: 0xEB6247,
      emissiveIntensity: 0.5 
    });

    const spheres: THREE.Mesh[] = [];
    timelineEvents.forEach((_, i) => {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      const pos = curve.getPointAt(i / (timelineEvents.length - 1));
      sphere.position.copy(pos);
      scene.add(sphere);
      spheres.push(sphere);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 12;
    camera.position.y = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Floating motion for points
      spheres.forEach((s, i) => {
        s.position.y += Math.sin(Date.now() * 0.001 + i) * 0.005;
        if (i === activeIndex) {
          s.scale.set(1.5, 1.5, 1.5);
          s.material.emissiveIntensity = 1.0;
        } else {
          s.scale.set(1, 1, 1);
          s.material.emissiveIntensity = 0.5;
        }
      });

      // Subtle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0002) * 2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / 600;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
    };
  }, [activeIndex]);

  return (
    <section id="timeline" className="py-24 bg-card/30 border-y border-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-headline font-bold text-primary gold-glow">CHRONICLES OF EMPIRE</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Navigate through the ages using our interactive 3D timeline. Witness the expansion and transformation of a global superpower.</p>
        </div>

        <div className="relative h-[600px] rounded-3xl overflow-hidden bg-background/50 border border-primary/20">
          <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-12">
            <div className="flex justify-between items-start">
               <div className="glass-morphism p-6 rounded-2xl border-primary/30 max-w-md pointer-events-auto transform transition-all duration-500">
                  <span className="text-accent font-bold text-lg mb-2 block">{timelineEvents[activeIndex].year}</span>
                  <h3 className="text-3xl font-headline font-bold text-foreground mb-4">{timelineEvents[activeIndex].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{timelineEvents[activeIndex].desc}</p>
                  <Button variant="link" className="text-primary p-0 mt-4 font-bold flex items-center gap-2 group">
                    <Info size={16} /> EXPLORE CHAPTER <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
               </div>
            </div>

            <div className="flex justify-center gap-6 pointer-events-auto">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : timelineEvents.length - 1))}
                className="w-16 h-16 rounded-full border-primary/40 bg-background/50 text-primary hover:bg-primary hover:text-white"
              >
                <ChevronLeft size={32} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setActiveIndex(prev => (prev < timelineEvents.length - 1 ? prev + 1 : 0))}
                className="w-16 h-16 rounded-full border-primary/40 bg-background/50 text-primary hover:bg-primary hover:text-white"
              >
                <ChevronRight size={32} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
