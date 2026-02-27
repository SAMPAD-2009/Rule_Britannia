"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Crown, ArrowLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const monarchs = [
  {
    name: "William I",
    title: "The Conqueror",
    era: "Norman",
    years: "1066 - 1087",
    imageId: "monarch-william-i",
    bio: "The first Norman King of England. He led the Norman Conquest of 1066, fundamentally changing English society, administration, and the English language itself."
  },
  {
    name: "Henry II",
    title: "The Angevin",
    era: "Plantagenet",
    years: "1154 - 1189",
    imageId: "monarch-henry-ii",
    bio: "Greatly expanded the 'Angevin Empire' across France and England. He is credited with establishing the foundations of the English Common Law system."
  },
  {
    name: "Richard I",
    title: "The Lionheart",
    era: "Plantagenet",
    years: "1189 - 1199",
    imageId: "monarch-richard-i",
    bio: "A legendary military leader and a central figure in the Third Crusade. Despite his fame, he spent only about six months of his ten-year reign in England."
  },
  {
    name: "John",
    title: "Lackland",
    era: "Plantagenet",
    years: "1199 - 1216",
    imageId: "monarch-john",
    bio: "His reign was marked by conflict with his barons, leading to the sealing of the Magna Carta in 1215, which limited royal power and established legal rights."
  },
  {
    name: "Edward I",
    title: "Hammer of the Scots",
    era: "Plantagenet",
    years: "1272 - 1307",
    imageId: "monarch-edward-i",
    bio: "A formidable ruler known for his legal reforms and extensive military campaigns that brought Wales under English control and attempted the same for Scotland."
  },
  {
    name: "Henry V",
    title: "The Victor",
    era: "Lancaster",
    years: "1413 - 1422",
    imageId: "monarch-henry-v",
    bio: "One of the great warrior kings of medieval England. He achieved a brilliant victory over the French at the Battle of Agincourt, nearly uniting the two crowns."
  },
  {
    name: "Richard III",
    title: "Last Yorkist",
    era: "York",
    years: "1483 - 1485",
    imageId: "monarch-richard-iii",
    bio: "The last English king to die in battle. His death at Bosworth Field marked the end of the Middle Ages in England and the conclusion of the Wars of the Roses."
  },
  {
    name: "Henry VII",
    title: "The Founder",
    era: "Tudor",
    years: "1485 - 1509",
    imageId: "monarch-henry-vii",
    bio: "The first Tudor monarch. He successfully ended the civil wars, centralized government power, and established a stable and wealthy throne for his successors."
  },
  {
    name: "Henry VIII",
    title: "Defender of the Faith",
    era: "Tudor",
    years: "1509 - 1547",
    imageId: "monarch-henry-viii",
    bio: "Famed for his six marriages and the English Reformation. He broke away from the authority of the Pope, establishing the monarch as the head of the Church of England."
  },
  {
    name: "Elizabeth I",
    title: "The Virgin Queen",
    era: "Tudor",
    years: "1558 - 1603",
    imageId: "monarch-elizabeth-i",
    bio: "Her reign is known as the Elizabethan Era, a 'Golden Age' of English drama and exploration. She famously defeated the Spanish Armada in 1588."
  },
  {
    name: "Charles I",
    title: "The Martyr",
    era: "Stuart",
    years: "1625 - 1649",
    imageId: "monarch-charles-i",
    bio: "His belief in the Divine Right of Kings led to a bitter struggle with Parliament, culminating in the English Civil War and his public execution."
  },
  {
    name: "Charles II",
    title: "The Merry Monarch",
    era: "Stuart",
    years: "1660 - 1685",
    imageId: "monarch-charles-ii",
    bio: "Restored to the throne after the Puritan rule of Oliver Cromwell. His reign was characterized by a cultural revival and the expansion of trade and empire."
  },
  {
    name: "William III",
    title: "Prince of Orange",
    era: "Stuart",
    years: "1689 - 1702",
    imageId: "monarch-william-iii",
    bio: "Invited to take the throne during the Glorious Revolution. His joint reign with Mary II firmly established the principle of a constitutional monarchy."
  },
  {
    name: "Victoria",
    title: "Empress of India",
    era: "Hanover",
    years: "1837 - 1901",
    imageId: "monarch-victoria",
    bio: "Her reign of over 63 years saw the height of the Industrial Revolution and the global expansion of the British Empire to its greatest extent."
  },
  {
    name: "George VI",
    title: "The Wartime King",
    era: "Windsor",
    years: "1936 - 1952",
    imageId: "monarch-george-vi",
    bio: "A reluctant king who became a powerful symbol of British resistance and unity during the darkest years of the Second World War."
  },
  {
    name: "Elizabeth II",
    title: "The Longest Reign",
    era: "Windsor",
    years: "1952 - 2022",
    imageId: "monarch-elizabeth-ii",
    bio: "The longest-reigning monarch in British history. She oversaw the transition from the British Empire to the Commonwealth with remarkable grace."
  },
  {
    name: "Charles III",
    title: "The Modern King",
    era: "Windsor",
    years: "2022 - Present",
    imageId: "monarch-charles-iii",
    bio: "Acceded to the throne in 2022. He is known for his decades of environmental advocacy and his commitment to a modern, inclusive monarchy."
  }
];

export default function RulersPage() {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
            <h1 className="text-6xl md:text-8xl font-headline font-black text-white leading-tight tracking-tighter">
              The Sovereign <br />
              <span className="text-primary gold-glow italic">Lineage</span>
            </h1>
            <div className="h-px w-24 bg-primary/40" />
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              A comprehensive archive of the monarchs who shaped the destiny of the British Isles through ten centuries of history.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section ref={ref} className="pb-32 px-4 md:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {monarchs.map((monarch, index) => {
              const imageUrl = PlaceHolderImages.find(img => img.id === monarch.imageId)?.imageUrl || '';
              const isExpanded = expandedId === monarch.name;
              
              return (
                <div 
                  key={monarch.name}
                  onClick={() => toggleExpand(monarch.name)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={cn(
                    "group relative bg-[#0d0d14] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 cursor-pointer opacity-0 transform-gpu",
                    "hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]",
                    isInView && "animate-in fade-in slide-in-from-bottom-8 fill-mode-both opacity-100",
                    isExpanded ? "ring-2 ring-primary/40 z-20" : "z-10"
                  )}
                >
                  {/* Portrait Container */}
                  <div className={cn(
                    "relative overflow-hidden transition-all duration-500 transform-gpu",
                    isExpanded ? "h-64" : "h-[26rem]"
                  )}>
                    <Image 
                      src={imageUrl}
                      alt={monarch.name}
                      fill
                      className={cn(
                        "object-cover transition-all duration-700 transform-gpu",
                        !isExpanded && "grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110",
                        isExpanded && "grayscale-0"
                      )}
                      data-ai-hint="monarch portrait"
                    />
                    
                    {/* Dark Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
                    
                    {/* Information Overlay on Image */}
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 ease-out transform-gpu",
                      isExpanded ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    )}>
                      <div className="relative overflow-hidden rounded-2xl p-4 border border-white/10 bg-black/40 backdrop-blur-md">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-primary/80">
                            <Crown size={10} />
                            <span className="text-[8px] font-bold uppercase tracking-[0.2em]">{monarch.title}</span>
                          </div>
                          <h3 className="text-2xl font-headline font-black text-white leading-none">
                            {monarch.name}
                          </h3>
                          <p className="text-[9px] font-bold text-primary/60 tracking-[0.1em] uppercase">
                            {monarch.years}
                          </p>
                        </div>
                        <div className="absolute top-4 right-4 text-white/20">
                          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Era Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 text-[8px] font-bold tracking-[0.1em] text-white/80 uppercase">
                        {monarch.era}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Biography Section */}
                  <div className={cn(
                    "bg-[#0d0d14] overflow-hidden transition-all duration-500 transform-gpu",
                    isExpanded ? "max-h-[500px] p-8 border-t border-white/10" : "max-h-0 p-0"
                  )}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <h4 className="text-xl font-headline font-bold text-white">{monarch.name}</h4>
                          <p className="text-[9px] font-bold text-primary tracking-widest uppercase">{monarch.years}</p>
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
                          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                          <X size={14} className="text-muted-foreground" />
                        </button>
                      </div>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
                        {monarch.bio}
                      </p>
                      <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Historical Archive ID: {index + 1001}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Hover visual accent */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />
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
          <p className="text-muted-foreground text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">
            © 2024 Historical Archives Project
          </p>
        </div>
      </footer>
    </main>
  );
}
