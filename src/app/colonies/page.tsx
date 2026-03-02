
'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { 
  X, 
  Plus, 
  Minus, 
  Target, 
  Calendar, 
  Shield, 
  Box, 
  ChevronRight,
  Info,
  Map as MapIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { coloniesData, Colony } from './data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ColoniesPage() {
  const [selectedColonyId, setSelectedColonyId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const selectedColony = useMemo(() => 
    coloniesData.find(c => c.id === selectedColonyId), 
    [selectedColonyId]
  );

  const legendItems = [
    { label: 'Dominions', color: 'bg-blue-500' },
    { label: 'Crown Colonies', color: 'bg-emerald-500' },
    { label: 'Protectorates', color: 'bg-orange-500' },
  ];

  return (
    <main className="h-screen w-screen bg-[#0d0d14] overflow-hidden flex flex-col selection:bg-primary/30">
      <Navigation />

      <div className="flex-1 relative mt-20 overflow-hidden flex">
        {/* Map Container */}
        <div className="flex-1 relative bg-[#1a1a24] overflow-hidden group">
          {/* Zoom & Controls */}
          <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
            <button 
              onClick={() => setZoom(z => Math.min(z + 0.2, 2.5))}
              className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Plus size={18} />
            </button>
            <button 
              onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))}
              className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Minus size={18} />
            </button>
            <button 
              onClick={() => setZoom(1)}
              className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Target size={18} />
            </button>
          </div>

          {/* Legend */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-6 px-6 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
              {legendItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={cn("w-2.5 h-2.5 rounded-full", item.color)} />
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actual Map Area */}
          <div 
            className="w-full h-full relative transition-transform duration-500 ease-out flex items-center justify-center"
            style={{ transform: `scale(${zoom})` }}
          >
             {/* World Map Background (Stylized) */}
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image 
                  src="https://picsum.photos/seed/world-map/1920/1080"
                  alt="Stylized Map"
                  fill
                  className="object-cover grayscale brightness-50"
                />
             </div>

             {/* Colony Points */}
             {coloniesData.map((colony) => (
               <button
                 key={colony.id}
                 onClick={() => setSelectedColonyId(colony.id)}
                 className={cn(
                   "absolute w-4 h-4 rounded-full border-2 border-white/40 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 z-10",
                   colony.status === 'Dominion' && "bg-blue-500",
                   colony.status === 'Crown Colony' && "bg-emerald-500",
                   colony.status === 'Protectorate' && "bg-orange-500",
                   colony.status === 'Crown Jewel' && "bg-primary animate-pulse",
                   selectedColonyId === colony.id && "scale-150 ring-4 ring-white/20"
                 )}
                 style={{ left: `${colony.coordinates.x}%`, top: `${colony.coordinates.y}%` }}
               >
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {colony.name}
                  </span>
               </button>
             ))}

             {/* Placeholder central text if nothing selected */}
             {!selectedColonyId && (
               <div className="text-[120px] font-black text-white/[0.03] select-none pointer-events-none uppercase tracking-tighter">
                 Empire Archives
               </div>
             )}
          </div>
        </div>

        {/* Sidebar */}
        <div className={cn(
          "fixed top-20 right-0 h-[calc(100vh-80px)] w-full md:w-[450px] bg-[#0d0d14] border-l border-white/10 z-30 transition-transform duration-500 transform",
          selectedColonyId ? "translate-x-0 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]" : "translate-x-full"
        )}>
          {selectedColony && (
            <div className="h-full flex flex-col relative">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedColonyId(null)}
                className="absolute top-6 right-6 z-40 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>

              <ScrollArea className="flex-1">
                {/* Map Snippet Header */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={selectedColony.mapSnippet}
                    alt={selectedColony.name}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] to-transparent" />
                  <div className="absolute bottom-8 left-8 space-y-2">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      {selectedColony.status}
                    </Badge>
                    <h2 className="text-4xl font-headline font-black text-white">{selectedColony.name}</h2>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{selectedColony.subtitle}</p>
                  </div>
                </div>

                <div className="p-8 space-y-10 pb-20">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white/5 border border-white/5 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Independence</span>
                      </div>
                      <p className="text-xl font-bold text-white">{selectedColony.independenceYear}</p>
                    </div>
                    <div className="p-5 bg-white/5 border border-white/5 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2 text-primary">
                        <Shield size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Governance</span>
                      </div>
                      <p className="text-xl font-bold text-white">{selectedColony.governance}</p>
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-1 bg-primary rounded-full" />
                      <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em]">Colonial Overview</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {selectedColony.overview}
                    </p>
                  </div>

                  {/* Exports */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-1 bg-primary rounded-full" />
                      <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em]">Major Exports</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedColony.exports.map((exp) => (
                        <div key={exp} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl group hover:bg-white/10 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Box size={14} />
                          </div>
                          <span className="text-xs font-bold text-white/80">{exp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Milestones */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-1 bg-primary rounded-full" />
                      <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em]">Key Milestones</h3>
                    </div>
                    <div className="space-y-8 relative pl-6">
                      <div className="absolute left-1.5 top-2 bottom-2 w-px bg-white/10" />
                      {selectedColony.milestones.map((ms, idx) => (
                        <div key={idx} className="relative">
                          <div className={cn(
                            "absolute -left-[22px] top-1.5 w-3 h-3 rounded-full border-2 border-[#0d0d14]",
                            idx === selectedColony.milestones.length - 1 ? "bg-blue-500 scale-125" : "bg-white/20"
                          )} />
                          <div className="space-y-1">
                            <span className={cn(
                              "text-[10px] font-bold tracking-widest",
                              idx === selectedColony.milestones.length - 1 ? "text-blue-400" : "text-white/30"
                            )}>{ms.year}</span>
                            <h4 className="text-sm font-bold text-white">{ms.title}</h4>
                            <p className="text-xs text-muted-foreground font-light leading-relaxed">
                              {ms.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* Action Button */}
              <div className="p-8 pt-4 border-t border-white/5 bg-[#0d0d14]">
                <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl gap-2 text-xs tracking-widest uppercase shadow-xl shadow-primary/10">
                  Explore Full History <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
