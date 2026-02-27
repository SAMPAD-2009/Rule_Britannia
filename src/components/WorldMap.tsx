
"use client";

import React, { useState } from 'react';
import { MapPin, Info, Users, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';

const territories = [
  { id: 'uk', name: 'The United Kingdom', coords: 'top-[25%] left-[45%]', info: 'The Heart of the Empire. Epicenter of industrial and political power.' },
  { id: 'india', name: 'British Raj', coords: 'top-[50%] left-[65%]', info: 'The Jewel in the Crown. Rich in resources and cultural exchange.' },
  { id: 'canada', name: 'Dominion of Canada', coords: 'top-[25%] left-[20%]', info: 'Vast landscapes and essential timber resources.' },
  { id: 'australia', name: 'Australia', coords: 'top-[75%] left-[80%]', info: 'Expansion into the Southern hemisphere and naval base support.' },
  { id: 'africa', name: 'East Africa', coords: 'top-[60%] left-[50%]', info: 'Vital trade routes and resource connectivity.' },
];

export function WorldMap() {
  const [selected, setSelected] = useState(territories[0]);

  return (
    <section id="map" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-8 animate-in slide-in-from-left duration-700">
             <div className="space-y-2">
               <h2 className="text-5xl font-headline font-bold text-primary gold-glow">GLOBAL DOMINION</h2>
               <p className="text-muted-foreground">Interactive exploration of colonial territories, resource management, and cultural impact across the globe.</p>
             </div>

             <div className="glass-morphism p-8 rounded-3xl border-primary/30 space-y-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-headline font-bold">{selected.name}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{selected.info}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-xl border border-primary/10">
                    <Users size={18} className="text-accent mb-2" />
                    <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Population</span>
                    <span className="text-lg font-headline font-bold">4.2 Million</span>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-xl border border-primary/10">
                    <Box size={18} className="text-primary mb-2" />
                    <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Key Exports</span>
                    <span className="text-lg font-headline font-bold">Tea, Silk, Spice</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
                  View Full Atlas
                </Button>
             </div>
          </div>

          <div className="lg:col-span-2 relative isometric-container min-h-[600px] flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/5 rounded-[50%] blur-[120px]" />
             
             {/* Simple Isometric Map Visualization */}
             <div className="isometric-map w-full max-w-[800px] aspect-video relative rounded-3xl overflow-hidden border-4 border-primary/20 bg-[#1A1926]">
                <img 
                  src="https://picsum.photos/seed/map/1200/800" 
                  alt="World Map" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  data-ai-hint="old map"
                />
                
                {/* Pins */}
                {territories.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelected(t)}
                    className={`absolute ${t.coords} transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 group`}
                  >
                    <div className={`
                      flex items-center justify-center w-8 h-8 rounded-full border-2 
                      ${selected.id === t.id ? 'bg-accent border-white scale-125 shadow-xl shadow-accent/50' : 'bg-primary border-white/50 hover:scale-110'}
                    `}>
                      <MapPin size={16} className="text-white" />
                    </div>
                    <span className={`
                      absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded bg-background/90 text-[10px] font-bold uppercase tracking-widest border border-primary/20
                      ${selected.id === t.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                     transition-opacity`}>
                      {t.name}
                    </span>
                  </button>
                ))}

                {/* Grid Lines Overlay */}
                <div className="absolute inset-0 pointer-events-none grid grid-cols-12 grid-rows-12 opacity-10">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-primary" />
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
