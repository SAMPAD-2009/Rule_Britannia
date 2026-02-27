
"use client";

import React from 'react';
import { Anchor, Crown as CrownIcon, Factory, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const exhibits = [
  {
    id: 'crown',
    title: 'The Crown',
    icon: CrownIcon,
    description: 'Trace the lineage of monarchs who defined eras, from the Tudors to the Windsors. View interactive 3D regal artifacts.',
    action: 'Explore Lineage',
  },
  {
    id: 'navy',
    title: 'Royal Navy',
    icon: Anchor,
    description: 'Command the seas with the Royal Navy\'s historic fleet. Rotate detailed 3D models of ships that secured the trade routes.',
    action: 'View Fleet',
  },
  {
    id: 'industry',
    title: 'Industry',
    icon: Factory,
    description: 'Witness the innovations that powered the world. From steam engines to railways, experience the boom in 3D.',
    action: 'See Innovations',
  },
];

export function Exhibits() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="exhibits" ref={ref} className="py-32 container mx-auto px-4">
      <div className={cn(
        "mb-16 space-y-4 opacity-0",
        isInView && "animate-in fade-in slide-in-from-left duration-1000 fill-mode-both"
      )}>
        <h2 className="text-5xl font-headline font-bold text-white tracking-tight">
          Historical <span className="text-primary italic">Pillars</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-light">
          Discover the foundations that shaped the empire across centuries through our curated 3D exhibits.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exhibits.map((exhibit, index) => (
          <div 
            key={exhibit.id} 
            style={{ animationDelay: `${index * 150}ms` }}
            className={cn(
              "group relative bg-[#0d0d14] border border-white/5 p-10 rounded-[2rem] hover:border-primary/40 transition-all duration-500 overflow-hidden hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0",
              isInView && "animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
            )}
          >
            {/* Golden Watermark Icon with Tilt and Scale on Hover */}
            <div className="absolute top-12 right-6 text-primary pointer-events-none opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-700 -rotate-12 group-hover:rotate-[-5deg] group-hover:scale-125">
              <exhibit.icon size={220} strokeWidth={0.5} />
            </div>

            {/* Icon Box */}
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-10 border border-primary/20 shadow-[0_0_15px_rgba(184,138,46,0.1)] group-hover:bg-primary/20 transition-colors">
              <exhibit.icon className="text-primary" size={24} />
            </div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                {exhibit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-base font-light">
                {exhibit.description}
              </p>

              <div className="pt-6 border-t border-white/5">
                <button className="flex items-center gap-2 text-sm font-bold text-white group/btn hover:text-primary transition-all uppercase tracking-widest">
                  {exhibit.action} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
