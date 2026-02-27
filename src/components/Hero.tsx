"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const globeImage = PlaceHolderImages.find(img => img.id === 'globe-hero')?.imageUrl || '';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden px-4 md:px-8 bg-background">
      {/* Faded Background Globe Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-background/60 z-10" />
        {globeImage && (
          <Image 
            src={globeImage} 
            alt="Historical Background" 
            fill
            className="object-cover scale-125 opacity-30 grayscale saturate-0 contrast-125"
            priority
          />
        )}
      </div>

      {/* Main Container */}
      <div className="container max-w-7xl mx-auto relative z-20 glass-morphism rounded-[2rem] border-primary/20 p-8 md:p-16 min-h-[70vh] flex items-center shadow-2xl overflow-hidden bg-background/20 backdrop-blur-md">
        
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-1 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-1 -translate-x-1/2 translate-y-1/2" />

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-[0.2em] uppercase bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Interactive 3D Experience
            </div>
            
            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-8xl font-headline font-black leading-tight text-white">
                Journey <br />
                Through
              </h1>
              <h1 className="text-5xl md:text-8xl font-headline font-black leading-tight text-primary gold-glow">
                The Empire
              </h1>
            </div>
            
            {/* Description with left border */}
            <div className="pl-6 border-l-2 border-primary/40 max-w-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Explore the vast history, legendary rulers, and complex legacy of the British Isles in a fully immersive <span className="font-bold text-foreground">3D timeline</span>.
              </p>
            </div>
            
            {/* Button */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-14 text-lg rounded-xl font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                Begin Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl group border border-primary/20">
               {/* Label Overlays */}
               <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-background/80 backdrop-blur-md rounded border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase">
                 19th Century
               </div>
               <div className="absolute bottom-6 left-6 z-20 px-3 py-1 bg-background/80 backdrop-blur-md rounded border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase">
                 Pax Britannica
               </div>

               {/* Shadow Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />

               {globeImage && (
                 <Image 
                  src={globeImage} 
                  alt="Golden Globe" 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                 />
               )}
            </div>
            
            {/* Blurred background globe for depth */}
            <div className="absolute -z-10 w-full h-full scale-125 opacity-20 blur-3xl saturate-150">
               {globeImage && <Image src={globeImage} alt="" fill className="object-contain" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
