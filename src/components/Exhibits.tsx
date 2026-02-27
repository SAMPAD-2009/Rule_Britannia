
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Anchor, Cpu, Crown as CrownIcon, ArrowRight } from 'lucide-react';

const exhibits = [
  {
    id: 'crown',
    title: 'The Crown',
    tag: 'Legacy',
    icon: CrownIcon,
    image: PlaceHolderImages.find(i => i.id === 'crown-exhibit')?.imageUrl,
    description: 'The symbol of ultimate authority and the unifying force across diverse territories.',
    stats: ['100+ Rulers', 'Global Symbol']
  },
  {
    id: 'navy',
    title: 'Royal Navy',
    tag: 'Power',
    icon: Anchor,
    image: PlaceHolderImages.find(i => i.id === 'navy-exhibit')?.imageUrl,
    description: 'The "Wooden Walls" of England that secured trade routes and projected power globally.',
    stats: ['700+ Ships', 'Ocean Dominance']
  },
  {
    id: 'industry',
    title: 'Industry',
    tag: 'Progress',
    icon: Cpu,
    image: PlaceHolderImages.find(i => i.id === 'industry-exhibit')?.imageUrl,
    description: 'The engine of the modern world, fueled by innovation, coal, and Victorian ambition.',
    stats: ['First Rail', 'Factory Power']
  },
];

export function Exhibits() {
  return (
    <section id="exhibits" className="py-24 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-5xl font-headline font-bold gold-glow">PILLARS OF EMPIRE</h2>
          <p className="text-muted-foreground max-w-xl">Delve into the three core foundations of British historical significance through interactive narratives and detailed artifacts.</p>
        </div>
        <Badge variant="outline" className="border-primary text-primary px-6 py-2 text-sm">3 INTERACTIVE EXHIBITS</Badge>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {exhibits.map((exhibit) => (
          <Card key={exhibit.id} className="group overflow-hidden border-primary/10 hover:border-primary/40 transition-all duration-500 bg-card/50 hover:shadow-2xl hover:shadow-primary/5">
            <div className="relative h-64 overflow-hidden">
               <img 
                src={exhibit.image} 
                alt={exhibit.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-ai-hint={exhibit.id === 'crown' ? 'royal crown' : exhibit.id === 'navy' ? 'war ship' : 'steam engine'}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
               <div className="absolute top-4 left-4">
                 <Badge className="bg-primary text-white border-0">{exhibit.tag}</Badge>
               </div>
               <div className="absolute -bottom-6 right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background group-hover:scale-110 transition-transform">
                 <exhibit.icon className="text-white" size={28} />
               </div>
            </div>
            
            <CardContent className="p-8 pt-10 space-y-6">
              <h3 className="text-3xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">{exhibit.title}</h3>
              <p className="text-muted-foreground leading-relaxed italic">"{exhibit.description}"</p>
              
              <div className="flex flex-wrap gap-3">
                {exhibit.stats.map(s => (
                  <span key={s} className="text-xs font-bold text-primary/70 tracking-wider uppercase bg-primary/5 px-3 py-1 rounded-md">
                    {s}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-bold text-primary border-b border-primary/20 pb-1 group/btn hover:border-primary transition-all">
                ENTER EXHIBIT <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
