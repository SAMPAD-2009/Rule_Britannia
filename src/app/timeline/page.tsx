'use client';

import React, { useState, useMemo, useEffect, useRef, memo } from 'react';
import { Navigation } from '@/components/Navigation';
import { 
  Play, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Box,
  Search,
  X,
  Layers
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { timelineEvents, TimelineEvent } from './data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useInView } from '@/hooks/use-in-view';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Timeline3DBackground } from '@/components/Timeline3DBackground';
import { EraOrb3D } from '@/components/EraOrb3D';

export default function TimelinePage() {
  const [activeYear, setActiveYear] = useState(1600);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredEvents = useMemo(() => {
    return timelineEvents.filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.year.toString().includes(searchQuery)
    );
  }, [searchQuery]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const year = parseInt(entry.target.getAttribute('data-year') || '1600');
          setActiveYear(year);
        }
      });
    }, observerOptions);

    Object.values(eventRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredEvents]);

  const scrollToYear = (year: number) => {
    const element = eventRefs.current[year];
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigateNext = () => {
    const currentIndex = timelineEvents.findIndex(e => e.year === activeYear);
    if (currentIndex < timelineEvents.length - 1) {
      scrollToYear(timelineEvents[currentIndex + 1].year);
    }
  };

  const navigatePrev = () => {
    const currentIndex = timelineEvents.findIndex(e => e.year === activeYear);
    if (currentIndex > 0) {
      scrollToYear(timelineEvents[currentIndex - 1].year);
    }
  };

  const currentCentury = Math.floor(activeYear / 100) + 1;

  return (
    <main className="min-h-screen bg-[#11100b] text-[#e5e1d3] font-body selection:bg-primary/30 pb-40 relative">
      <Timeline3DBackground />
      <Navigation />

      <section className="pt-40 pb-12 px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-headline font-black text-primary gold-glow mb-6 tracking-tight text-center w-full block">
          The Sun Never Sets
        </h1>
        <p className="text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Traverse the centuries. Witness the rise and fall of an empire through interactive 3D dioramas and historical archives.
        </p>

        <div className="max-w-xl mx-auto relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={20} />
          <Input 
            placeholder="Search chronicles, events, or years..."
            className="h-14 pl-12 pr-12 bg-white/5 border-white/10 rounded-2xl text-lg focus:ring-primary/20 focus:border-primary transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Mobile Century Selector */}
        <div className="lg:hidden mb-12 space-y-4">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 text-center">Jump to Century</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[17, 18, 19, 20].map((c) => (
              <button 
                key={c}
                onClick={() => {
                  const firstEvent = timelineEvents.find(e => Math.floor(e.year / 100) + 1 === c);
                  if (firstEvent) scrollToYear(firstEvent.year);
                }}
                className={cn(
                  "px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all border",
                  currentCentury === c ? "bg-primary text-black border-primary" : "bg-white/5 text-white/40 border-white/10 hover:text-white"
                )}
              >
                {c}th
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

            <div className="space-y-12 relative">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div 
                    key={event.id} 
                    ref={el => { eventRefs.current[event.year] = el; }}
                    data-year={event.year}
                  >
                    <TimelineItem event={event} isActive={event.year === activeYear} />
                  </div>
                ))
              ) : (
                <div className="py-20 text-center space-y-4">
                  <Box size={48} className="mx-auto text-primary/20" />
                  <h3 className="text-2xl font-headline text-white/60">No archives found for "{searchQuery}"</h3>
                  <Button variant="ghost" className="text-primary" onClick={() => setSearchQuery('')}>Clear search</Button>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-8 hidden lg:block sticky top-32 h-fit">
            <div className="glass-morphism p-6 rounded-2xl border-white/5 bg-black/40 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Temporal Artifact</h4>
              <EraOrb3D />
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {activeYear < 1815 ? 'Mercantile Expansion' : activeYear < 1914 ? 'Pax Britannica' : 'Imperial Transition'}
                  </span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary shadow-[0_0_10px_rgba(184,138,46,0.5)] transition-all duration-1000" 
                    style={{ width: `${((activeYear - 1600) / 400) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[9px] font-bold text-white/20 uppercase tracking-widest">
                  <span>1600</span>
                  <span>2000</span>
                </div>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-2xl border-white/5 bg-black/20 space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Jump to Century</h4>
              <nav className="space-y-1">
                {[17, 18, 19, 20].map((c) => (
                  <button 
                    key={c}
                    onClick={() => {
                      const firstEvent = timelineEvents.find(e => Math.floor(e.year / 100) + 1 === c);
                      if (firstEvent) scrollToYear(firstEvent.year);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-all flex justify-between items-center",
                      currentCentury === c ? "bg-primary/20 text-primary border border-primary/20" : "text-white/40 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {c}th Century
                    {currentCentury === c && <Box size={14} />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-morphism bg-black/60 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-full flex items-center gap-10 shadow-2xl">
           <div className="flex items-center gap-6">
             <button 
              onClick={navigatePrev}
              disabled={activeYear === timelineEvents[0].year}
              className="text-white/40 hover:text-primary transition-colors disabled:opacity-20"
             >
              <ChevronLeft size={24} />
             </button>
             <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={cn("transition-colors", isAutoPlaying ? "text-primary" : "text-white/40 hover:text-primary")}
             >
              <Play size={20} fill={isAutoPlaying ? "currentColor" : "none"} />
             </button>
             <button 
              onClick={navigateNext}
              disabled={activeYear === timelineEvents[timelineEvents.length - 1].year}
              className="text-white/40 hover:text-primary transition-colors disabled:opacity-20"
             >
              <ChevronRight size={24} />
             </button>
           </div>
           <div className="h-8 w-px bg-white/10" />
           <div className="text-center min-w-[80px]">
             <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/30 mb-0.5">Year</p>
             <p className="text-2xl font-headline font-black text-white tracking-widest">{activeYear}</p>
           </div>
           <div className="h-8 w-px bg-white/10" />
           <div className="flex items-center gap-6">
             <button 
              onClick={() => scrollToYear(timelineEvents[0].year)}
              className="text-white/40 hover:text-primary transition-colors"
             >
              <RotateCcw size={18} />
             </button>
           </div>
        </div>
      </div>
    </main>
  );
}

const TimelineItem = memo(({ event, isActive }: { event: TimelineEvent, isActive: boolean }) => {
  // Use a larger rootMargin for "pre-loading" items before they appear
  const [ref, isInView] = useInView({ threshold: 0, rootMargin: '600px', triggerOnce: true });
  const isFullWidth = event.imagePosition === 'full';

  return (
    <div ref={ref} className="group relative pl-12 md:pl-20 transition-all duration-500 min-h-[120px]">
      <div className={cn(
        "absolute left-5 md:left-7 top-0 w-2.5 h-2.5 rounded-full border-2 border-[#11100b] z-10 transition-all duration-500",
        isActive ? "bg-yellow-500 scale-[1.8] shadow-[0_0_12px_rgba(234,179,8,0.6)]" : "bg-white/20 group-hover:bg-primary/50"
      )}>
        {isActive && (
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-1 h-1 rounded-full bg-black/40" />
           </div>
        )}
      </div>

      {isInView ? (
        <div className={cn(
          "glass-morphism rounded-2xl border border-white/5 overflow-hidden transition-all duration-700",
          isActive ? "bg-black/40 border-primary/30 ring-1 ring-primary/20 scale-[1.01]" : "bg-black/20 hover:border-white/10",
          "animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
        )}>
          
          {isFullWidth ? (
            <div className="flex flex-col">
              <div className="p-6 md:p-8 space-y-4">
                 <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <h3 className="text-3xl md:text-4xl font-headline font-black text-primary gold-glow leading-none">{event.year}</h3>
                      <p className="text-[9px] font-bold text-white/40 tracking-[0.3em] uppercase">{event.subtitle || 'Empire Milestone'}</p>
                    </div>
                    {event.badge && (
                      <Badge variant="outline" className="border-primary/40 text-primary text-[7px] font-bold px-2 py-0.5 bg-primary/5 uppercase tracking-widest">
                        {event.badge}
                      </Badge>
                    )}
                 </div>
                 <h2 className="text-2xl md:text-3xl font-headline font-bold text-white">{event.title}</h2>
                 
                 <div className="relative aspect-video max-h-[220px] rounded-xl overflow-hidden border border-white/10 group/img">
                    <Image src={event.imageUrl} alt={event.title} fill className="object-cover opacity-80 group-hover/img:scale-105 transition-transform duration-[2000ms]" loading="lazy" />
                    {event.interactive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <InteractionWrapper event={event}>
                          <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform">
                            <Play fill="currentColor" size={20} />
                          </button>
                        </InteractionWrapper>
                      </div>
                    )}
                 </div>

                 <p className="text-muted-foreground leading-relaxed italic text-base font-light">
                   {event.description}
                 </p>

                 <div className="flex gap-4 pt-2">
                    <InteractionWrapper event={event}>
                      <Button className="bg-primary hover:bg-primary/90 text-black font-bold h-10 px-6 rounded-lg text-[10px] tracking-widest uppercase flex-1 md:flex-none">
                        {event.linkText}
                      </Button>
                    </InteractionWrapper>
                 </div>
              </div>
            </div>
          ) : (
            <div className={cn(
              "flex flex-col md:flex-row items-stretch",
              event.imagePosition === 'right' && "md:flex-row-reverse"
            )}>
              <div className="relative w-full md:w-[40%] min-h-[220px] overflow-hidden group/img">
                <Image src={event.imageUrl} alt={event.title} fill className="object-cover opacity-80 group-hover/img:scale-110 transition-transform duration-[3000ms]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {event.badge && (
                  <div className="absolute bottom-4 left-4 z-10 bg-black/60 backdrop-blur-md border border-primary/20 p-1.5 rounded-lg flex items-center gap-1.5">
                     <Box className="text-primary" size={10} />
                     <span className="text-[8px] font-bold text-white tracking-widest uppercase">{event.badge}</span>
                  </div>
                )}
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center space-y-4">
                 <div className="space-y-0.5">
                    <h3 className="text-3xl md:text-4xl font-headline font-black text-primary gold-glow leading-none">{event.year}</h3>
                    <h2 className="text-xl md:text-2xl font-headline font-bold text-white">{event.title}</h2>
                 </div>
                 <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                   {event.description}
                 </p>
                 <InteractionWrapper event={event}>
                   <button className="flex items-center gap-1.5 text-[9px] font-bold text-primary hover:text-primary/80 transition-colors tracking-[0.2em] uppercase group/btn">
                     {event.linkText} 
                     <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                 </InteractionWrapper>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Lightweight Placeholder to maintain scroll position and observer triggers */
        <div className="h-[220px] w-full bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center">
           <div className="text-primary/10 font-black text-6xl select-none">{event.year}</div>
        </div>
      )}
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

function InteractionWrapper({ event, children }: { event: TimelineEvent, children: React.ReactNode }) {
  if (!event.interactive) return <>{children}</>;

  if (event.videoUrl) {
    return (
      <a 
        href={event.videoUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cursor-pointer contents"
        title="Open Video Archive"
      >
        {children}
      </a>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl bg-black border-white/10 p-0 overflow-hidden rounded-3xl gap-0 aspect-video">
        <div className="sr-only">
          <DialogTitle>{event.title} - 3D Archive</DialogTitle>
          <DialogDescription>Interactive 3D diorama exploration of the {event.title} historical event.</DialogDescription>
        </div>
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
           {event.threeModelUrl ? (
             <div className="w-full h-full flex flex-col items-center justify-center text-center p-12 space-y-6">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center text-primary/40">
                  <Layers size={48} />
                </div>
                <div className="space-y-2">
                   <h4 className="text-xl font-bold text-white">3D Diorama Archive</h4>
                   <p className="text-muted-foreground text-sm max-w-sm">Loading high-fidelity 3D assets for the {event.title} simulation...</p>
                </div>
                <div className="text-[10px] font-bold text-primary/40 uppercase tracking-widest border border-primary/20 px-4 py-2 rounded">
                  3D Model Source: {event.threeModelUrl}
                </div>
             </div>
           ) : (
             <div className="text-white/20 italic">No interactive data available.</div>
           )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
