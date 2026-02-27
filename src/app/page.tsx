import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ThreeTimeline } from '@/components/ThreeTimeline';
import { Exhibits } from '@/components/Exhibits';
import { WorldMap } from '@/components/WorldMap';
import { AISummarizer } from '@/components/AISummarizer';
import { Landmark } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navigation />
      
      <Hero />
      
      <ThreeTimeline />
      
      <Exhibits />
      
      <WorldMap />
      
      <AISummarizer />

      {/* Simplified Footer */}
      <footer className="bg-background py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Landmark className="text-white/60" size={16} />
                </div>
                <span className="font-headline text-xl font-bold tracking-tight text-white">
                  British Greatness
                </span>
              </div>
              <p className="text-muted-foreground text-[13px] font-light">
                © 2024 British Greatness Project. All rights reserved.
              </p>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-8 text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sources</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
