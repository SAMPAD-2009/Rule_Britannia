'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ZoomIn, ZoomOut, Lock, Unlock, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GlobeViewProps {
  data: Array<{ id: string; name: string; lat: number; lng: number; color: string }>;
  selectedColonyId: string | null;
  onSelectColony: (id: string) => void;
}

export function GlobeView({ data, selectedColonyId, onSelectColony }: GlobeViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let globe: any;
    
    const initGlobe = async () => {
      const GlobeConstructor = (await import('globe.gl')).default;
      const THREE = await import('three');
      
      globe = GlobeConstructor()(containerRef.current!)
        .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
        .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
        .backgroundImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
        .backgroundColor('#050508')
        .showAtmosphere(false)
        .pointsData(data)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor((d: any) => d.color || '#B88A2E')
        .pointAltitude(0.01)
        .pointRadius(2.5) // Significantly larger for better clickability
        .pointResolution(6)
        .labelsData(data)
        .labelLat('lat')
        .labelLng('lng')
        .labelText('name')
        .labelSize(2.5) // Significantly larger for readability
        .labelDotRadius(0.6)
        .labelColor((d: any) => d.color || '#ffffff')
        .labelResolution(1) // Low resolution for performance
        .onPointClick((point: any) => onSelectColony(point.id))
        .onLabelClick((label: any) => onSelectColony(label.id));

      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.minDistance = 150; 
      controls.maxDistance = 1200;
      
      controls.enableRotate = true;
      controls.enableZoom = true;
      controls.enablePan = false;

      // REMOVED: High-frequency 'change' listener for dynamic scaling to eliminate lag
      // Base sizes are now large enough for all zoom levels.

      const scene = globe.scene();
      const ambientLight = new THREE.AmbientLight(0xB88A2E, 0.8);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffdf8c, 1.5);
      pointLight.position.set(200, 100, 150);
      scene.add(pointLight);

      const renderer = globe.renderer();
      // PERFORMANCE CRITICAL: Cap pixel ratio at 1 for low-power devices
      renderer.setPixelRatio(1);
      renderer.antialias = false; // Disable antialiasing for raw performance

      // Higher altitude (3.2) makes the globe appear smaller initially
      globe.pointOfView({ lat: 20, lng: 0, altitude: 3.2 }, 0);

      globeInstance.current = globe;
      
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
  }, [onSelectColony, data]);

  useEffect(() => {
    if (globeInstance.current) {
      globeInstance.current.controls().autoRotate = !selectedColonyId && !isLocked;
      
      if (selectedColonyId) {
        const colony = data.find(c => c.id === selectedColonyId);
        if (colony) {
          globeInstance.current.pointOfView({ 
            lat: colony.lat, 
            lng: colony.lng, 
            altitude: 1.8 
          }, 800);
        }
      }
    }
  }, [selectedColonyId, isLocked, data]);

  const handleZoom = (delta: number) => {
    if (!globeInstance.current) return;
    const currentPov = globeInstance.current.pointOfView();
    globeInstance.current.pointOfView({
      ...currentPov,
      altitude: Math.max(1.1, Math.min(6.0, currentPov.altitude + delta))
    }, 400);
  };

  const toggleLock = () => {
    setIsLocked(prev => !prev);
  };

  const resetView = () => {
    if (!globeInstance.current) return;
    globeInstance.current.pointOfView({ lat: 20, lng: 0, altitude: 3.2 }, 1000);
    onSelectColony('');
  };

  return (
    <div className="w-full h-full bg-[#050508] relative overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full h-full touch-none" 
        style={{ cursor: isLocked ? 'default' : 'grab' }}
      />
      
      <div className={cn(
        "absolute top-8 right-8 flex flex-col gap-3 z-50 transition-all duration-500",
        selectedColonyId ? "opacity-0 pointer-events-none translate-x-10" : "opacity-100 translate-x-0"
      )}>
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl space-y-2 flex flex-col">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleZoom(-1.0)}
            className="w-10 h-10 text-white/60 hover:text-primary hover:bg-white/10"
            title="Zoom In"
          >
            <ZoomIn size={18} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => handleZoom(1.0)}
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
