
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { coloniesData } from '@/app/colonies/data';
import { ZoomIn, ZoomOut, Lock, Unlock, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GlobeViewProps {
  selectedColonyId: string | null;
  onSelectColony: (id: string) => void;
}

export function GlobeView({ selectedColonyId, onSelectColony }: GlobeViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let globe: any;
    
    const initGlobe = async () => {
      const GlobeConstructor = (await import('globe.gl')).default;
      
      globe = GlobeConstructor()(containerRef.current!)
        .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
        .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
        .backgroundColor('#050508')
        .showAtmosphere(false)
        .pointsData(coloniesData)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor((d: any) => d.color || '#B88A2E') // Custom color from data
        .pointAltitude(0.02)
        .pointRadius(1.4)
        .labelsData(coloniesData)
        .labelLat('lat')
        .labelLng('lng')
        .labelText('name')
        .labelSize(1.8)
        .labelDotRadius(0.5)
        .labelColor((d: any) => d.color || '#ffffff') // Label matches point color
        .labelResolution(3)
        .onPointClick((point: any) => onSelectColony(point.id))
        .onLabelClick((label: any) => onSelectColony(label.id));

      // Standard archival distance settings
      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 150;
      controls.maxDistance = 600;
      
      // Explicitly enable touch interactions for mobile
      controls.enableRotate = true;
      controls.enableZoom = true;
      controls.enablePan = false;

      // Add vintage yellow ochre lighting tint
      const scene = globe.scene();
      const THREE = await import('three');
      
      const ambientLight = new THREE.AmbientLight(0xB88A2E, 0.8);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffdf8c, 1.5);
      pointLight.position.set(200, 100, 150);
      scene.add(pointLight);

      // Set initial view
      globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

      globeInstance.current = globe;
      
      // Force initial resize for mobile layout shifts
      if (containerRef.current) {
        globe.width(containerRef.current.clientWidth);
        globe.height(containerRef.current.clientHeight);
      }
    };

    initGlobe();

    const handleResize = () => {
      if (globeInstance.current && containerRef.current) {
        globeInstance.current.width(containerRef.current.clientWidth);
        globeInstance.current.height(containerRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [onSelectColony]);

  // Handle auto-rotate and point-of-view updates
  useEffect(() => {
    if (globeInstance.current) {
      globeInstance.current.controls().autoRotate = !selectedColonyId && !isLocked;
      
      if (selectedColonyId) {
        const colony = coloniesData.find(c => c.id === selectedColonyId);
        if (colony) {
          globeInstance.current.pointOfView({ 
            lat: colony.lat, 
            lng: colony.lng, 
            altitude: 1.8 
          }, 1000);
        }
      }
    }
  }, [selectedColonyId, isLocked]);

  const handleZoom = (delta: number) => {
    if (!globeInstance.current) return;
    const currentPov = globeInstance.current.pointOfView();
    globeInstance.current.pointOfView({
      ...currentPov,
      altitude: Math.max(1.2, Math.min(4, currentPov.altitude + delta))
    }, 400);
  };

  const toggleLock = () => {
    setIsLocked(prev => !prev);
  };

  const resetView = () => {
    if (!globeInstance.current) return;
    globeInstance.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
    onSelectColony('');
  };

  return (
    <div className="w-full h-full bg-[#050508] relative overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full h-full touch-none" 
        style={{ cursor: isLocked ? 'default' : 'grab' }}
      />
      
      {/* Archive Control Panel */}
      <div className={cn(
        "absolute top-8 right-8 flex flex-col gap-3 z-50 transition-all duration-500",
        selectedColonyId ? "opacity-0 pointer-events-none translate-x-10" : "opacity-100 translate-x-0"
      )}>
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl space-y-2 flex flex-col">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleZoom(-0.5)}
            className="w-10 h-10 text-white/60 hover:text-primary hover:bg-white/10"
            title="Zoom In"
          >
            <ZoomIn size={18} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleZoom(0.5)}
            className="w-10 h-10 text-white/60 hover:text-primary hover:bg-white/10"
            title="Zoom Out"
          >
            <ZoomOut size={18} />
          </Button>
          <div className="h-px bg-white/10 mx-2" />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLock}
            className={cn(
              "w-10 h-10 transition-colors",
              isLocked ? "text-primary bg-primary/10" : "text-white/60 hover:text-primary hover:bg-white/10"
            )}
            title={isLocked ? "Unlock Rotation" : "Lock Rotation"}
          >
            {isLocked ? <Lock size={18} /> : <Unlock size={18} />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={resetView}
            className="w-10 h-10 text-white/60 hover:text-primary hover:bg-white/10"
            title="Reset View"
          >
            <Compass size={18} />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="px-6 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
           <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em] text-center">
             Select a Marker to View Historical Archive
           </p>
        </div>
      </div>
    </div>
  );
}
