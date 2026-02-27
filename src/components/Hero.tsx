"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const globeImage = PlaceHolderImages.find(img => img.id === 'globe-hero')?.imageUrl || '';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden px-4 md:px-8 bg-background">
      {/* Background Globe - Centered and Faded */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl aspect-square">
          {globeImage && (
            <Image 
              src={globeImage} 
              alt="Faded Globe Background" 
              fill
              className="object-contain opacity-20 contrast-125 brightness-75 scale-125"
              priority
            />
          )}
        </div>
      </div>

      {/* Main Container Card */}
      <div className="container max-w-7xl mx-auto relative z-20 glass-morphism rounded-[2.5rem] border-primary/20 p-8 md:p-16 min-h-[75vh] flex items-center shadow-2xl bg-[#0a0a10]/60 backdrop-blur-xl">
        
        {/* Decorative corner glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 text-primary text-[10px] font-bold tracking-[0.2em] uppercase bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Interactive 3D Experience
            </div>
            
            {/* Heading */}
            <div className="space-y-1">
              <h1 className="text-6xl md:text-8xl font-headline font-black leading-[1.1] text-white tracking-tight">
                Journey <br />
                Through
              </h1>
              <h1 className="text-6xl md:text-8xl font-headline font-black leading-[1.1] text-primary gold-glow tracking-tight bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-transparent">
                The Empire
              </h1>
            </div>
            
            {/* Description */}
            <div className="pl-6 border-l-2 border-primary/30 max-w-lg">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Explore the vast history, legendary rulers, and complex legacy of the British Isles in a fully immersive <span className="font-bold text-foreground">3D timeline</span>.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-10 h-14 text-lg rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95 border-none">
                Begin Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* Note: Watch Trailer button is kept as per the visual reference "I want it to be like this" */}
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-10 h-14 text-lg rounded-xl font-bold transition-all active:scale-95">
                Watch Trailer <PlayCircle className="ml-2 h-5 w-5 fill-white text-background" />
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Globe Image */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden shadow-2xl group border border-white/5 bg-black">
               {/* Label Overlays */}
               <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase">
                 19th Century
               </div>
               <div className="absolute bottom-10 left-6 z-20 px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase">
                 Pax Britannica
               </div>

               {/* Inner Shadow Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

               {globeImage && (
                 <Image 
                  src={globeImage} 
                  alt="Golden Globe Exhibit" 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                 />
               )}
            </div>
            
            {/* Subtle glow behind the image */}
            <div className="absolute inset-0 -z-10 scale-110 opacity-30 blur-3xl saturate-150">
               {globeImage && <Image src={globeImage} alt="" fill className="object-contain" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
