
"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Crown, ArrowLeft, Search, Filter, Calendar, History, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { monarchs } from './monarchs';


interface MonarchCardProps {
  monarch: typeof monarchs[0];
  index: number;
}

const MonarchCard = React.memo(({ monarch, index }: MonarchCardProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          ref={ref}
          className={cn(
            "group relative bg-[#0d0d14] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 cursor-pointer transform-gpu opacity-0 h-[400px] isolate",
            "hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]",
            isInView && "animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-700 opacity-100"
          )}
          style={{ animationDelay: `${(index % 4) * 100}ms` }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
            <Image 
              src={monarch.imageId}
              alt={monarch.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-all duration-1000 transform-gpu scale-100 group-hover:scale-110"
              data-ai-hint="monarch portrait"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            
            <div className="absolute inset-0 p-4 flex flex-col justify-end transition-all duration-500 transform-gpu group-hover:-translate-y-2">
               <div className="relative z-10">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
                    <div className="flex items-center gap-2 text-primary/80 border-b border-white/5 pb-2">
                      <Crown size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{monarch.title}</span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-4">
                      <div className="space-y-1">
                        <h3 className="text-2xl md:text-3xl font-headline font-black text-white leading-none tracking-tight">
                          {monarch.name}
                        </h3>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                          House of {monarch.era}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm md:text-base font-black text-primary tracking-widest uppercase whitespace-nowrap">
                          {monarch.years}
                        </p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="absolute top-4 left-4 z-10">
              <div className="px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[8px] font-bold tracking-[0.1em] text-white/80 uppercase">
                {monarch.era}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-[#0d0d14] border-white/10 p-0 overflow-hidden rounded-[2rem] gap-0">
        <div className="grid md:grid-cols-2 h-full">
          <div className="relative h-64 md:h-full min-h-[400px]">
             <Image 
                src={monarch.imageId}
                alt={monarch.name}
                fill
                className="object-cover"
                data-ai-hint="monarch portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0d0d14]/40" />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center space-y-6 bg-gradient-to-br from-[#0d0d14] to-[#12121c]">
            <DialogHeader className="space-y-2">
              <div className="flex items-center gap-3 text-primary">
                <Crown size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">{monarch.title}</span>
              </div>
              <DialogTitle className="text-4xl font-headline font-black text-white leading-tight">
                {monarch.name}
              </DialogTitle>
              
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl px-4 py-2.5">
                   <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <Calendar size={14} />
                   </div>
                   <div className="space-y-0.5">
                     <p className="text-[8px] font-bold uppercase tracking-widest text-white/30">Period of Reign</p>
                     <p className="text-xs font-bold text-white tracking-wider">{monarch.years}</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl px-4 py-2.5">
                   <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                     <History size={14} />
                   </div>
                   <div className="space-y-0.5">
                     <p className="text-[8px] font-bold uppercase tracking-widest text-white/30">Royal Dynasty</p>
                     <p className="text-xs font-bold text-white tracking-wider">House of {monarch.era}</p>
                   </div>
                </div>
              </div>
            </DialogHeader>
            
            <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
            
            <p className="text-muted-foreground text-sm font-light leading-relaxed first-letter:text-4xl first-letter:font-headline first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {monarch.bio}
            </p>
            
            <div className="pt-4 border-t border-white/5" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

MonarchCard.displayName = "MonarchCard";

export default function RulersPage() {
  const [selectedEra, setSelectedEra] = useState<string>("All Monarchs");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const crownBg = useMemo(() => PlaceHolderImages.find(img => img.id === 'crown-hero-bg')?.imageUrl || '', []);

  const eras = useMemo(() => {
    const uniqueEras = Array.from(new Set(monarchs.map(m => m.era)));
    return ["All Monarchs", ...uniqueEras.map(e => `House of ${e}`)];
  }, []);

  const filteredMonarchs = useMemo(() => {
    return monarchs.filter(m => {
      const matchesEra = selectedEra === "All Monarchs" || `House of ${m.era}` === selectedEra;
      const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           m.era.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesEra && matchesSearch;
    });
  }, [selectedEra, searchQuery]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedEra, searchQuery]);

  const totalPages = Math.ceil(filteredMonarchs.length / ITEMS_PER_PAGE);
  const currentMonarchs = filteredMonarchs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-[#050508] selection:bg-primary/30 selection:text-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {crownBg && (
            <Image 
              src={crownBg} 
              alt="Crown Background" 
              fill
              className="object-cover opacity-20 contrast-125 brightness-50 scale-105"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-transparent to-[#050508] opacity-60" />
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <Link href="/" className="group inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Chronicles
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-headline font-black text-white leading-tight tracking-tighter">
                The Sovereign <br />
                <span className="text-primary gold-glow italic">Lineage</span>
              </h1>
              <div className="h-px w-24 bg-primary/40" />
              <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-xl">
                A comprehensive digital archive of the monarchs who shaped the destiny of the British Isles through ten centuries of history.
              </p>
            </div>
            
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={20} />
              <Input 
                placeholder="Search by name, title, or house..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-16 pl-14 pr-6 bg-white/5 border-white/10 rounded-2xl text-lg focus:ring-primary/20 focus:border-primary transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 md:px-8 border-b border-white/5 mb-12">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8 text-white/40">
            <Filter size={14} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Filter by Dynasty</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {eras.map((era) => (
              <button
                key={era}
                onClick={() => setSelectedEra(era)}
                className={cn(
                  "px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 border",
                  selectedEra === era 
                    ? "bg-primary border-primary text-black shadow-[0_4px_20px_rgba(184,138,46,0.3)] scale-105" 
                    : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20"
                )}
              >
                {era}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="pb-32 px-4 md:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start min-h-[600px]">
            {currentMonarchs.map((monarch, index) => (
              <MonarchCard 
                key={monarch.name}
                monarch={monarch}
                index={index}
              />
            ))}
          </div>
          
          {filteredMonarchs.length === 0 ? (
            <div className="py-32 text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
                <Search className="text-primary/40" size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-headline text-white">No archives matched your search</h3>
                <p className="text-muted-foreground max-w-md mx-auto">We couldn't find any records for "{searchQuery}" in our current collection of {selectedEra}.</p>
              </div>
              <button 
                onClick={() => {setSearchQuery(""); setSelectedEra("All Monarchs");}}
                className="text-primary font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            /* Pagination Controls */
            totalPages > 1 && (
              <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="w-12 h-12 border-white/10 bg-white/5 hover:bg-white/10 text-primary disabled:opacity-30 rounded-xl"
                  >
                    <ChevronLeft size={24} />
                  </Button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={cn(
                          "w-12 h-12 rounded-xl font-bold transition-all duration-300",
                          currentPage === page 
                            ? "bg-primary text-black shadow-[0_0_20px_rgba(184,138,46,0.3)]" 
                            : "bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20"
                        )}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 border-white/10 bg-white/5 hover:bg-white/10 text-primary disabled:opacity-30 rounded-xl"
                  >
                    <ChevronRight size={24} />
                  </Button>
                </div>
                
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredMonarchs.length)} of {filteredMonarchs.length} Sovereign Records
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 flex flex-col items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center">
              <Crown className="text-primary" size={20} />
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <div className="text-center space-y-4">
            <span className="font-headline text-3xl font-bold tracking-tight text-white uppercase block">
              British Greatness
            </span>
            <p className="text-muted-foreground text-[10px] font-bold tracking-[0.4em] uppercase opacity-40">
              Historical Digital Archives Project
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-8 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#map" className="hover:text-primary transition-colors">Map</Link></li>
              <li><Link href="/rulers" className="hover:text-primary transition-colors">Rulers</Link></li>
              <li><Link href="/#exhibits" className="hover:text-primary transition-colors">Exhibits</Link></li>
            </ul>
          </nav>
          <p className="text-white/20 text-[9px] font-bold tracking-[0.2em] uppercase">
            © 2024 All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
