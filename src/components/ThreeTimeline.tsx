
"use client";

import React from 'react';
import { Calendar, Globe, Flag, Hourglass } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const stats = [
  {
    id: 'began',
    value: '1583',
    label: 'EMPIRE BEGAN',
    icon: Calendar,
  },
  {
    id: 'covered',
    value: '24%',
    label: 'WORLD COVERED',
    icon: Globe,
  },
  {
    id: 'nations',
    value: '63',
    label: 'CURRENT NATIONS',
    icon: Flag,
  },
  {
    id: 'spanned',
    value: '400+',
    label: 'YEARS SPANNED',
    icon: Hourglass,
  },
];

export function ThreeTimeline() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="timeline" ref={ref} className="py-24 bg-background relative overflow-hidden border-y border-primary/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "text-center mb-20 space-y-4 opacity-0",
          isInView && "animate-in fade-in slide-in-from-top duration-1000 fill-mode-both"
        )}>
          <h2 className="text-5xl font-headline font-bold text-primary gold-glow tracking-tight uppercase">CHRONICLES OF EMPIRE</h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
            An overview of the massive scale and enduring influence of the British legacy across the centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              style={{ animationDelay: `${index * 150}ms` }}
              className={cn(
                "group relative glass-morphism p-10 rounded-[2rem] border-white/5 bg-[#0d0d14]/40 hover:bg-[#12121c]/60 hover:border-primary/30 transition-all duration-500 text-center flex flex-col items-center justify-center min-h-[280px] opacity-0",
                isInView && "animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both"
              )}
            >
              {/* Icon Container */}
              <div className="mb-8 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-primary/40 transition-colors">
                <stat.icon size={24} className="text-primary/70 group-hover:text-primary transition-colors" />
              </div>
              
              {/* Value */}
              <div className="space-y-3">
                <h3 className="text-5xl md:text-6xl font-headline font-black text-white tracking-tight">
                  {stat.value}
                </h3>
                
                {/* Label */}
                <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-primary/60 uppercase group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
              </div>

              {/* Decorative inner glow for active card */}
              <div className="absolute inset-0 rounded-[2rem] bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
