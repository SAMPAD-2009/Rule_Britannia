
'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';
import { coloniesData, Colony } from '@/app/colonies/data';
import { cn } from '@/lib/utils';

// Helper to convert lat/lng to 3D Cartesian coordinates
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function ColonyMarker({ 
  colony, 
  isSelected, 
  onSelect 
}: { 
  colony: Colony; 
  isSelected: boolean; 
  onSelect: (id: string) => void;
}) {
  const position = useMemo(() => latLngToVector3(colony.lat, colony.lng, 5.05), [colony.lat, colony.lng]);
  
  return (
    <group position={position}>
      <mesh 
        onClick={(e) => { e.stopPropagation(); onSelect(colony.id); }} 
        onPointerOver={() => { if (typeof document !== 'undefined') document.body.style.cursor = 'pointer'; }} 
        onPointerOut={() => { if (typeof document !== 'undefined') document.body.style.cursor = 'auto'; }}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color={colony.status === 'Crown Jewel' ? '#B88A2E' : isSelected ? '#ffffff' : '#4f46e5'} 
          emissive={colony.status === 'Crown Jewel' ? '#B88A2E' : isSelected ? '#ffffff' : '#4f46e5'}
          emissiveIntensity={isSelected ? 3 : 1}
        />
      </mesh>
      
      <Html distanceFactor={10} position={[0, 0.2, 0]}>
        <div className={cn(
          "pointer-events-none select-none transition-all duration-300",
          isSelected ? "scale-110 opacity-100" : "scale-100 opacity-40"
        )}>
          <div className="bg-black/90 backdrop-blur-md px-2 py-1 rounded border border-white/20 whitespace-nowrap shadow-2xl">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{colony.name}</span>
          </div>
        </div>
      </Html>
    </group>
  );
}

function Earth() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Use a reliable texture URL for the globe
  const texture = useLoader(THREE.TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-dark.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial 
        map={texture} 
        roughness={0.7}
        metalness={0.2}
      />
    </mesh>
  );
}

interface GlobeViewProps {
  selectedColonyId: string | null;
  onSelectColony: (id: string) => void;
}

export function GlobeView({ selectedColonyId, onSelectColony }: GlobeViewProps) {
  return (
    <div className="w-full h-full bg-[#050508]">
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Earth />
          
          {coloniesData.map((colony) => (
            <ColonyMarker 
              key={colony.id}
              colony={colony}
              isSelected={selectedColonyId === colony.id}
              onSelect={onSelectColony}
            />
          ))}
          
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={7}
            maxDistance={25}
            autoRotate={!selectedColonyId}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
        <div className="flex flex-col gap-2 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Interactive Globe</span>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.1em]">Rotate to explore • Scroll to zoom</p>
        </div>
      </div>
    </div>
  );
}
