
"use client";

import React from 'react';
import { Play, ShieldCheck, Globe, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const stats = [
  { label: 'Empire Began', value: '1583', icon: History },
  { label: 'World Covered', value: '24%', icon: Globe },
  { label: 'Years Spanned', value: '412', icon: ShieldCheck },
];

export function Hero() {
  const heroBg = PlaceHolderImages.find(img => img.id === 'hero-bg')?.imageUrl;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
      
      {/* Animated Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Discover the Legacy
          </div>
          
          <h1 className="text-6xl md:text-8xl font-headline font-black leading-[1.1] text-foreground gold-glow">
            THE EMPIRE <br />
            <span className="text-primary italic">WHERE THE SUN</span> <br />
            NEVER SETS
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
            An immersive interactive odyssey through the historical pillars of British greatness. 
            Experience the crown, the navy, and the industrial might that shaped the modern world.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full">
              Begin Journey
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg rounded-full group">
              <Play className="mr-2 h-5 w-5 fill-primary group-hover:fill-primary" />
              Watch Trailer
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-primary/10">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex items-center gap-2 text-primary/60">
                  <stat.icon size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-3xl font-headline font-bold text-foreground">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="aspect-video rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 group">
             {/* Simple Video Placeholder */}
             <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/50 group-hover:scale-110 transition-transform">
                  <Play className="text-primary fill-primary ml-1" size={40} />
                </div>
             </div>
             <img 
              src="https://picsum.photos/seed/trailer/1280/720" 
              alt="Trailer Preview" 
              className="w-full h-full object-cover mix-blend-overlay"
              data-ai-hint="historical trailer"
             />
          </div>
          
          {/* Floating Card UI */}
          <div className="absolute -bottom-6 -left-6 glass-morphism p-6 rounded-2xl shadow-xl max-w-[240px] border-primary/30 animate-float">
             <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-accent/20 rounded-lg">
                 <Globe className="text-accent" size={20} />
               </div>
               <span className="font-bold text-sm">Global Dominion</span>
             </div>
             <p className="text-xs text-muted-foreground">The Royal Navy secured trade routes across all seven seas, establishing the first global network.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
