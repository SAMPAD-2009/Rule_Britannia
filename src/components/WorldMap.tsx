
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function WorldMap() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'world-map-bg')?.imageUrl || '';
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="map" ref={ref} className="py-24 px-4 md:px-8 group">
      <div className="container max-w-7xl mx-auto relative min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          {mapImage && (
            <Image 
              src={mapImage} 
              alt="World Map Background" 
              fill
              className="object-cover opacity-60 grayscale-[0.2] transition-transform duration-[5000ms] ease-out group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.05),rgba(0,0,255,0.1))] bg-[length:100%_4px,4px_100%]" />

        <div className="relative z-20 max-w-2xl px-6 space-y-8">
          <div className={cn(
            "mx-auto w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_30px_rgba(184,138,46,0.3)] opacity-0",
            isInView && "animate-pulse opacity-100 transition-opacity duration-1000"
          )}>
            <Globe className="text-primary" size={32} />
          </div>

          <div className={cn(
            "space-y-4 opacity-0",
            isInView && "animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both opacity-100"
          )}>
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-white drop-shadow-2xl">
              Interactive World Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto leading-relaxed">
              Click any territory to reveal its history, resources, and cultural exchange in our <span className="text-primary font-medium italic">isometric view</span>.
            </p>
          </div>

          <div className={cn(
            "pt-4 opacity-0",
            isInView && "animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 fill-mode-both opacity-100"
          )}>
            <Link href="/colonies" passHref legacyBehavior>
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold h-14 px-10 rounded-xl text-xs tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                ENTER MAP VIEW
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute inset-4 rounded-[1.5rem] border border-white/5 group-hover:border-primary/20 transition-colors duration-1000 pointer-events-none" />
        
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}
