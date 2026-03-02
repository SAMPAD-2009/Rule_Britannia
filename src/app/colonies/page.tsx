
'use client';

import React, { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { 
  X, 
  Shield, 
  Box, 
  ChevronRight,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { coloniesData } from './data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

// Dynamically import GlobeView with SSR disabled to prevent hydration and internal React conflicts
const GlobeView = dynamic(() => import('@/components/GlobeView').then(mod => mod.GlobeView), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#050508] flex items-center justify-center">
      <div className="text-white/20 animate-pulse text-[10px] tracking-[0.4em] font-bold uppercase">
        Initialising Archive Globe...
      </div>
    </div>
  )
});

export default function ColoniesPage() {
  const [selectedColonyId, setSelectedColonyId] = useState<string | null>(null);

  const selectedColony = useMemo(() => 
    coloniesData.find(c => c.id === selectedColonyId), 
    [selectedColonyId]
  );

  return (
    <main className="h-screen w-screen bg-[#0d0d14] overflow-hidden flex flex-col selection:bg-primary/30">
      <Navigation />

      <div className="flex-1 relative mt-20 overflow-hidden flex">
        {/* Globe Container */}
        <div className="flex-1 relative bg-[#1a1a24] overflow-hidden group">
          <GlobeView 
            selectedColonyId={selectedColonyId} 
            onSelectColony={(id) => setSelectedColonyId(id)} 
          />
          
          {/* Overlay Title */}
          {!selectedColonyId && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
               <h1 className="text-[10vw] font-black text-white/[0.03] select-none uppercase tracking-tighter text-center">
                 Empire Archives
               </h1>
            </div>
          )}
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
