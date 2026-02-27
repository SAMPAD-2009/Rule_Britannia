
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
    bio: "The first Norman King of England. He led the Norman Conquest of 1066, fundamentally changing English society and language."
  },
  {
    name: "Henry II",
    title: "The Angevin",
    era: "Plantagenet",
    years: "1154 - 1189",
    imageId: "monarch-henry-ii",
    bio: "Greatly expanded the 'Angevin Empire' and established the foundations of English Common Law."
  },
  {
    name: "Richard I",
    title: "The Lionheart",
    era: "Plantagenet",
    years: "1189 - 1199",
    imageId: "monarch-richard-i",
    bio: "Famed for his prowess as a military leader during the Third Crusade, spending most of his reign abroad."
  },
  {
    name: "John",
    title: "Lackland",
    era: "Plantagenet",
    years: "1199 - 1216",
    imageId: "monarch-john",
    bio: "Forced by his barons to seal the Magna Carta at Runnymede in 1215, a cornerstone of constitutional law."
  },
  {
    name: "Edward I",
    title: "Hammer of the Scots",
    era: "Plantagenet",
    years: "1272 - 1307",
    imageId: "monarch-edward-i",
    bio: "Known for his legal reforms and military campaigns in Wales and Scotland."
  },
  {
    name: "Henry V",
    title: "The Victor",
    era: "Lancaster",
    years: "1413 - 1422",
    imageId: "monarch-henry-v",
    bio: "Achieved a legendary victory against the French at the Battle of Agincourt during the Hundred Years' War."
  },
  {
    name: "Richard III",
    title: "Last Yorkist",
    era: "York",
    years: "1483 - 1485",
    imageId: "monarch-richard-iii",
    bio: "The last English king to die in battle, falling at Bosworth Field, which ended the Wars of the Roses."
  },
  {
    name: "Henry VII",
    title: "The Founder",
    era: "Tudor",
    years: "1485 - 1509",
    imageId: "monarch-henry-vii",
    bio: "The first Tudor monarch. He restored order after the civil wars and filled the royal treasury."
  },
  {
    name: "Henry VIII",
    title: "Defender of the Faith",
    era: "Tudor",
    years: "1509 - 1547",
    imageId: "monarch-henry-viii",
    bio: "Known for his six marriages and breaking with the Roman Catholic Church to establish the Church of England."
  },
  {
    name: "Elizabeth I",
    title: "The Virgin Queen",
    era: "Tudor",
    years: "1558 - 1603",
    imageId: "monarch-elizabeth-i",
    bio: "Her reign, the Elizabethan Age, saw the defeat of the Spanish Armada and a cultural renaissance led by Shakespeare."
  },
  {
    name: "Charles I",
    title: "The Martyr",
    era: "Stuart",
    years: "1625 - 1649",
    imageId: "monarch-charles-i",
    bio: "His conflicts with Parliament led to the English Civil War and his eventual execution for high treason."
  },
  {
    name: "Charles II",
    title: "The Merry Monarch",
    era: "Stuart",
    years: "1660 - 1685",
    imageId: "monarch-charles-ii",
    bio: "Invited back to the throne after the Interregnum, his reign saw the Restoration of the monarchy and theatre."
  },
  {
    name: "William III",
    title: "Prince of Orange",
    era: "Stuart",
    years: "1689 - 1702",
    imageId: "monarch-william-iii",
    bio: "Ascended the throne with Mary II after the Glorious Revolution, establishing a constitutional monarchy."
  },
  {
    name: "Victoria",
    title: "Empress of India",
    era: "Hanover",
    years: "1837 - 1901",
    imageId: "monarch-victoria",
    bio: "The era's namesake, her long reign saw unprecedented industrial expansion and the global height of the British Empire."
  },
  {
    name: "George VI",
    title: "The Wartime King",
    era: "Windsor",
    years: "1936 - 1952",
    imageId: "monarch-george-vi",
    bio: "Led the nation as a symbol of determination and calm during the dark days of World War II."
  },
  {
    name: "Elizabeth II",
    title: "The Longest Reign",
    era: "Windsor",
    years: "1952 - 2022",
    imageId: "monarch-elizabeth-ii",
    bio: "The longest-lived and longest-reigning British monarch, guiding the nation through decades of modern change."
  },
  {
    name: "Charles III",
    title: "The Modern King",
    era: "Windsor",
    years: "2022 - Present",
    imageId: "monarch-charles-iii",
    bio: "Acceded to the throne in 2022, continuing the tradition of service while focusing on modern global challenges."
  }
];

export default function RulersPage() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

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
              <span className="text-primary gold-glow italic">of the Crown</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl font-light">
              A comprehensive chronicle of the sovereigns who shaped the destiny of the British Isles, from the Norman Conquest to the House of Windsor.
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
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={cn(
                    "group relative bg-[#0d0d14] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-primary/40 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0",
                    isInView && "animate-in fade-in slide-in-from-bottom-10 fill-mode-both opacity-100"
                  )}
                >
                  {/* Image Container */}
                  <div className="relative h-[30rem] w-full">
                    <Image 
                      src={imageUrl}
                      alt={monarch.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                      data-ai-hint="monarch portrait"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 bg-primary/20 backdrop-blur-md rounded border border-primary/30 text-[10px] font-bold tracking-widest text-primary uppercase">
                      {monarch.era}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4 relative z-10 -mt-24">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary">
                        <Crown size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{monarch.title}</span>
                      </div>
                      <h3 className="text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                        {monarch.name}
                      </h3>
                      <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{monarch.years}</p>
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

      {/* Footer */}
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
