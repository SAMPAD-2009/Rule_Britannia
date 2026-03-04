
'use client';

import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { 
  Play, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2,
  PlayCircle,
  Eye,
  Box
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { timelineEvents, TimelineEvent } from './data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TimelinePage() {
  const [activeYear, setActiveYear] = useState(1815);

  return (
    <main className="min-h-screen bg-[#11100b] text-[#e5e1d3] font-body selection:bg-primary/30">
      <Navigation />

      {/* Hero Header */}
      <section className="pt-40 pb-20 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-headline font-black text-primary gold-glow mb-6 tracking-tight">
          The Sun Never Sets
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Traverse the centuries. Witness the rise and fall of an empire through interactive 3D dioramas.
        </p>
      </section>

      <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-[1fr_300px] gap-12 pb-40">
        
        {/* Timeline Stream */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

          <div className="space-y-32 relative">
            {timelineEvents.map((event, idx) => (
              <TimelineItem key={event.id} event={event} isActive={event.year === activeYear} />
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <aside className="space-y-8 hidden lg:block">
          {/* Current Era Widget */}
          <div className="glass-morphism p-6 rounded-2xl border-white/5 bg-black/20 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Current Era</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Pax Britannica
                </span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-2/3 shadow-[0_0_10px_rgba(184,138,46,0.5)]" />
              </div>
              <div className="flex justify-between text-[9px] font-bold text-white/20 uppercase tracking-widest">
                <span>1815</span>
                <span>1914</span>
              </div>
            </div>
          </div>

          {/* Empire Extent Placeholder */}
          <div className="glass-morphism p-6 rounded-2xl border-white/5 bg-black/20 space-y-4">
            <div className="flex justify-between items-center">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Empire Extent</h4>
               <Maximize2 size={14} className="text-white/20" />
            </div>
            <div className="aspect-square w-full bg-gradient-to-br from-white/5 to-white/10 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
                   <div className="w-16 h-16 rounded-full border border-white/20 animate-pulse" />
                 </div>
               </div>
               <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-[9px] font-bold text-primary uppercase tracking-widest">Empire Extent</p>
                  <p className="text-[10px] text-white/40">View Global Map</p>
               </div>
            </div>
          </div>

          {/* Jump to Century */}
          <div className="glass-morphism p-6 rounded-2xl border-white/5 bg-black/20 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Jump to Century</h4>
            <nav className="space-y-1">
              {['17th Century', '18th Century', '19th Century', '20th Century'].map((century) => (
                <button 
                  key={century}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all flex justify-between items-center",
                    century === '19th Century' ? "bg-primary/20 text-primary border border-primary/20" : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  {century}
                  {century === '19th Century' && <Box size={14} />}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      {/* Chronology Controller */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-morphism bg-black/40 backdrop-blur-2xl border border-white/10 px-8 py-3 rounded-full flex items-center gap-10 shadow-2xl">
           <div className="flex items-center gap-6">
             <button className="text-white/40 hover:text-primary transition-colors"><ChevronLeft size={20} /></button>
             <button className="text-white/40 hover:text-primary transition-colors"><Play size={18} fill="currentColor" /></button>
             <button className="text-white/40 hover:text-primary transition-colors"><ChevronRight size={20} /></button>
           </div>
           <div className="h-8 w-px bg-white/10" />
           <div className="text-center">
             <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30 mb-0.5">Year</p>
             <p className="text-xl font-headline font-black text-white tracking-widest">{activeYear}</p>
           </div>
           <div className="h-8 w-px bg-white/10" />
           <div className="flex items-center gap-6">
             <button className="text-white/40 hover:text-primary transition-colors"><RotateCcw size={16} /></button>
           </div>
        </div>
      </div>
    </main>
  );
}

function TimelineItem({ event, isActive }: { event: TimelineEvent, isActive: boolean }) {
  const isFullWidth = event.imagePosition === 'full';

  return (
    <div className="group relative pl-16 md:pl-24">
      {/* Node Marker */}
      <div className={cn(
        "absolute left-5 md:left-7 top-0 w-3 h-3 rounded-full border-2 border-[#11100b] z-10 transition-all duration-500",
        isActive ? "bg-yellow-500 scale-[2] shadow-[0_0_15px_rgba(234,179,8,0.6)]" : "bg-white/20 group-hover:bg-primary/50"
      )}>
        {isActive && (
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
           </div>
        )}
      </div>

      {/* Event Card */}
      <div className={cn(
        "glass-morphism rounded-3xl border border-white/5 overflow-hidden transition-all duration-700",
        isActive ? "bg-black/40 border-primary/30 ring-1 ring-primary/20 scale-[1.02]" : "bg-black/20 hover:border-white/10"
      )}>
        
        {isFullWidth ? (
          <div className="flex flex-col">
            <div className="p-10 space-y-6">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-5xl font-headline font-black text-primary gold-glow leading-none">{event.year}</h3>
                    <p className="text-[10px] font-bold text-white/40 tracking-[0.4em] uppercase">{event.subtitle}</p>
                  </div>
                  {event.badge && (
                    <Badge variant="outline" className="border-primary/40 text-primary text-[8px] font-bold px-3 py-1 bg-primary/5 uppercase tracking-widest">
                      {event.badge}
                    </Badge>
                  )}
               </div>
               <h2 className="text-4xl font-headline font-bold text-white">{event.title}</h2>
               
               <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group/img">
                  <Image src={event.imageUrl} alt={event.title} fill className="object-cover opacity-80 group-hover/img:scale-105 transition-transform duration-[2000ms]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform">
                       <Play fill="currentColor" size={24} />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                    <div className="w-1 h-8 bg-primary rounded-full" />
                    <div className="space-y-0.5">
                      <p className="text-[9px] font-bold text-primary uppercase tracking-widest">Napoleon's Defeat</p>
                      <p className="text-[10px] text-white/60">Wellington & Blücher</p>
                    </div>
                  </div>
               </div>

               <p className="text-muted-foreground leading-relaxed italic text-lg font-light">
                 {event.description}
               </p>

               <div className="flex gap-4 pt-4">
                  <Button className="bg-primary hover:bg-primary/90 text-black font-bold h-12 px-8 rounded-lg text-xs tracking-widest uppercase flex-1 md:flex-none">
                    {event.linkText}
                  </Button>
                  <Button variant="outline" className="border-white/10 text-white/60 hover:text-white hover:bg-white/5 h-12 px-8 rounded-lg text-xs tracking-widest uppercase flex-1 md:flex-none">
                    Read Analysis
                  </Button>
               </div>
            </div>
          </div>
        ) : (
          <div className={cn(
            "flex flex-col md:flex-row items-stretch",
            event.imagePosition === 'right' && "md:flex-row-reverse"
          )}>
            <div className="relative w-full md:w-[45%] min-h-[300px] overflow-hidden group/img">
              <Image src={event.imageUrl} alt={event.title} fill className="object-cover opacity-80 group-hover/img:scale-110 transition-transform duration-[3000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {event.badge && (
                <div className="absolute bottom-6 left-6 z-10 bg-black/60 backdrop-blur-md border border-primary/20 p-2 rounded-lg flex items-center gap-2">
                   <Box className="text-primary" size={12} />
                   <span className="text-[9px] font-bold text-white tracking-widest uppercase">{event.badge}</span>
                </div>
              )}
            </div>
            <div className="flex-1 p-10 flex flex-col justify-center space-y-6">
               <div className="space-y-1">
                  <h3 className="text-5xl font-headline font-black text-primary gold-glow leading-none">{event.year}</h3>
                  <h2 className="text-3xl font-headline font-bold text-white">{event.title}</h2>
               </div>
               <p className="text-muted-foreground leading-relaxed font-light text-base">
                 {event.description}
               </p>
               <button className="flex items-center gap-2 text-[10px] font-bold text-primary hover:text-primary/80 transition-colors tracking-[0.3em] uppercase group/btn">
                 {event.linkText} 
                 {event.type === 'battle' ? <Eye size={14} className="group-hover/btn:translate-x-1 transition-transform" /> : <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />}
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
