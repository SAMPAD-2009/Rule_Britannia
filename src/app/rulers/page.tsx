
"use client";

import React from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Crown, ArrowLeft, History, ChevronRight } from 'lucide-react';
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
    <main className="min-h-screen bg-[#050508] selection:bg-primary/30 selection:text-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="container max-w-7xl mx-auto relative z-10">
          <Link href="/" className="group inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Chronicles
          </Link>
          
          <div className="max-w-4xl space-y-8">
            <h1 className="text-7xl md:text-9xl font-headline font-black text-white leading-tight tracking-tighter">
              Sovereigns <br />
              <span className="text-primary gold-glow italic">of the Realm</span>
            </h1>
            <div className="h-px w-24 bg-primary/40" />
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              From the Norman Conquest to the modern era, explore the lives of the monarchs who defined the British legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section ref={ref} className="pb-32 px-4 md:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {monarchs.map((monarch, index) => {
              const imageUrl = PlaceHolderImages.find(img => img.id === monarch.imageId)?.imageUrl || '';
              
              return (
                <div 
                  key={monarch.name}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className={cn(
                    "group relative bg-[#0d0d14] rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-primary/40 hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)] opacity-0",
                    isInView && "animate-in fade-in slide-in-from-bottom-12 fill-mode-both opacity-100"
                  )}
                >
                  {/* Portrait Container */}
                  <div className="relative h-[32rem] w-full overflow-hidden">
                    <Image 
                      src={imageUrl}
                      alt={monarch.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                      data-ai-hint="monarch portrait"
                    />
                    
                    {/* Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-black/20" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-1000" />
                    
                    {/* Floating Era Badge */}
                    <div className="absolute top-8 left-8">
                      <div className="px-4 py-1.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">
                        {monarch.era}
                      </div>
                    </div>
                  </div>

                  {/* Information Overlay */}
                  <div className="p-10 space-y-6 relative z-10 -mt-32">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary/80 group-hover:text-primary transition-colors">
                        <Crown size={12} />
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">{monarch.title}</span>
                      </div>
                      <h3 className="text-4xl font-headline font-black text-white leading-none group-hover:text-primary transition-colors duration-500">
                        {monarch.name}
                      </h3>
                      <p className="text-[10px] font-bold text-primary/60 tracking-[0.2em] uppercase">
                        {monarch.years}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-[13px] font-light leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-700">
                      {monarch.bio}
                    </p>

                    <div className="pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">View Archive</span>
                      <ChevronRight size={16} className="text-primary" />
                    </div>
                  </div>

                  {/* Golden subtle glow on hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-primary/40" />
            <Crown className="text-primary" size={24} />
            <div className="w-10 h-px bg-primary/40" />
          </div>
          <span className="font-headline text-2xl font-bold tracking-tight text-white uppercase">
            British Greatness
          </span>
          <p className="text-muted-foreground text-xs font-light tracking-widest uppercase opacity-60">
            © 2024 Historical Archives Project
          </p>
        </div>
      </footer>
    </main>
  );
}
