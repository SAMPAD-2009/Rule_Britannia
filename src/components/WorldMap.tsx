
"use client";

import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function WorldMap() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'world-map-bg')?.imageUrl || '';

  return (
    <section id="map" className="py-24 px-4 md:px-8">
      <div className="container max-w-7xl mx-auto relative min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center text-center">
        
        {/* Background Map with Vignette */}
        <div className="absolute inset-0 z-0">
          {mapImage && (
            <Image 
              src={mapImage} 
              alt="World Map Background" 
              fill
              className="object-cover opacity-60 grayscale-[0.2]"
            />
          )}
          {/* Subtle radial vignette overlay to match the reference image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-2xl px-6 space-y-8 animate-in fade-in zoom-in duration-1000">
          
          {/* Circular Globe Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_30px_rgba(184,138,46,0.2)]">
            <Globe className="text-primary" size={32} />
          </div>

          {/* Typography */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-white drop-shadow-2xl">
              Interactive World Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto leading-relaxed">
              Click any territory to reveal its history, resources, and cultural exchange in our <span className="text-primary font-medium italic">isometric view</span>.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-black font-bold h-14 px-10 rounded-xl text-xs tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              ENTER MAP VIEW
            </Button>
          </div>
        </div>
        
        {/* Decorative Inner Border */}
        <div className="absolute inset-4 rounded-[1.5rem] border border-white/5 pointer-events-none" />
      </div>
    </section>
  );
}
