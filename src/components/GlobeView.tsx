
'use client';

import React, { useEffect, useRef } from 'react';
import { coloniesData } from '@/app/colonies/data';

interface GlobeViewProps {
  selectedColonyId: string | null;
  onSelectColony: (id: string) => void;
}

export function GlobeView({ selectedColonyId, onSelectColony }: GlobeViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // We use a dynamic import for globe.gl inside the useEffect 
    // to ensure it only runs on the client and avoids SSR issues.
    let globe: any;
    
    const initGlobe = async () => {
      const GlobeConstructor = (await import('globe.gl')).default;
      
      globe = GlobeConstructor()(containerRef.current!)
        .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-dark.jpg')
        .backgroundColor('#050508')
        .showAtmosphere(false) // Remove the blue atmosphere glow as requested
        .pointsData(coloniesData)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(() => '#B88A2E') // Antique Gold
        .pointAltitude(0.01)
        .pointRadius(1.2)
        .labelsData(coloniesData)
        .labelLat('lat')
        .labelLng('lng')
        .labelText('name')
        .labelSize(1.5)
        .labelDotRadius(0.4)
        .labelColor(() => '#ffffff')
        .labelResolution(3)
        .onPointClick((point: any) => onSelectColony(point.id))
        .onLabelClick((label: any) => onSelectColony(label.id));

      // Standard archival distance settings
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
      globe.controls().enableDamping = true;
      globe.controls().dampingFactor = 0.05;
      globe.controls().minDistance = 200;
      globe.controls().maxDistance = 600;

      // Set initial view
      globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

      globeInstance.current = globe;
    };

    initGlobe();

    // Resize handler to keep the globe responsive
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
        containerRef.current.innerHTML = ''; // Clean up Three.js canvas
      }
    };
  }, [onSelectColony]);

  // Handle auto-rotate and point-of-view updates when a colony is selected
  useEffect(() => {
    if (globeInstance.current) {
      globeInstance.current.controls().autoRotate = !selectedColonyId;
      
      if (selectedColonyId) {
        const colony = coloniesData.find(c => c.id === selectedColonyId);
        if (colony) {
          globeInstance.current.pointOfView({ 
            lat: colony.lat, 
            lng: colony.lng, 
            altitude: 1.8 
          }, 1000); // Smooth transition in 1s
        }
      }
    }
  }, [selectedColonyId]);

  return (
    <div className="w-full h-full bg-[#050508] relative overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="px-6 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
           <p className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em]">
             Select a Marker to View Historical Archive
           </p>
        </div>
      </div>
    </div>
  );
}
