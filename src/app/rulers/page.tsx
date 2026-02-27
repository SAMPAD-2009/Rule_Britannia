
"use client";

import React from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Crown, ArrowLeft, History } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const monarchs = [
  {
    name: "William I",
    title: "The Conqueror",
    era: "Norman",
    years: "1066 - 1087",
    imageId: "monarch-william-i",
    bio: "The first Norman King of England, reigning from 1066 until his death in 1087."
  },
  {
    name: "Richard I",
    title: "The Lionheart",
    era: "Plantagenet",
    years: "1189 - 1199",
    imageId: "monarch-richard-i",
    bio: "Famed for his prowess as a military leader and warrior during the Third Crusade."
  },
  {
    name: "Henry VIII",
    title: "Defensor Fidei",
    era: "Tudor",
    years: "1509 - 1547",
    imageId: "monarch-henry-viii",
    bio: "Best known for his six marriages and the separation of the Church of England from papal authority."
  },
  {
    name: "Elizabeth I",
    title: "The Virgin Queen",
    era: "Tudor",
    years: "1558 - 1603",
    imageId: "monarch-elizabeth-i",
    bio: "Her reign is known as the Elizabethan era, a period of great artistic and cultural flourishing."
  },
  {
    name: "Victoria",
    title: "Empress of India",
    era: "Hanover",
    years: "1837 - 1901",
    imageId: "monarch-victoria",
    bio: "Her reign of 63 years saw the height of the Industrial Revolution and the British Empire."
  },
  {
    name: "George VI",
    title: "The King's Speech",
    era: "Windsor",
    years: "1936 - 1952",
    imageId: "monarch-george-vi",
    bio: "A symbol of British determination during World War II."
  },
  {
    name: "Elizabeth II",
    title: "The Longest Reign",
    era: "Windsor",
    years: "1952 - 2022",
    imageId: "monarch-elizabeth-ii",
    bio: "The longest-lived and longest-reigning British monarch."
  },
  {
    name: "Charles III",
    title: "Current Sovereign",
    era: "Windsor",
    years: "2022 - Present",
    imageId: "monarch-charles-iii",
    bio: "The eldest child of Queen Elizabeth II, succeeding to the throne in 2022."
  }
];

export default function RulersPage() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section for Rulers */}
      <section className="pt-32 pb-16 px-4 md:px-8 border-b border-white/5">
        <div className="container max-w-7xl mx-auto space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={14} /> Back to Archives
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-headline font-black text-white tracking-tight">
              Lineage <br />
              <span className="text-primary gold-glow">of the Crown</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl font-light">
              Explore the sovereigns who defined the ages, from the Norman Conquest to the present day. A legacy of power, duty, and change.
            </p>
          </div>
        </div>
      </section>

      {/* Tiled Gallery Section */}
      <section ref={ref} className="py-20 px-4 md:px-8 bg-black/20">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {monarchs.map((monarch, index) => {
              const imageUrl = PlaceHolderImages.find(img => img.id === monarch.imageId)?.imageUrl || '';
              
              return (
                <div 
                  key={monarch.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={cn(
                    "group relative bg-[#0d0d14] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-primary/40 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0",
                    isInView && "animate-in fade-in slide-in-from-bottom-10 fill-mode-both opacity-100"
                  )}
                >
                  {/* Image Container */}
                  <div className="relative h-96 w-full">
                    <Image 
                      src={imageUrl}
                      alt={monarch.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                      data-ai-hint="monarch portrait"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-primary/20 backdrop-blur-md rounded border border-primary/30 text-[10px] font-bold tracking-widest text-primary uppercase">
                      {monarch.era}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4 relative z-10 -mt-20">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary">
                        <Crown size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{monarch.title}</span>
                      </div>
                      <h3 className="text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                        {monarch.name}
                      </h3>
                      <p className="text-xs font-bold text-muted-foreground tracking-widest">{monarch.years}</p>
                    </div>

                    <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {monarch.bio}
                    </p>

                    <div className="pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button variant="ghost" className="p-0 text-primary text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white">
                        <History className="mr-2" size={14} /> View History
                      </Button>
                    </div>
                  </div>

                  {/* Golden Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer (Re-using logic from main page but in page-specific context) */}
      <footer className="bg-background py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Crown className="text-primary" size={20} />
                <span className="font-headline text-xl font-bold tracking-tight text-white uppercase">
                  British Greatness
                </span>
              </div>
              <p className="text-muted-foreground text-[13px] font-light">
                © 2024 British Greatness Project. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
