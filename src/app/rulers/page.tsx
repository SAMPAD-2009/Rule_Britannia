
"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Crown, ArrowLeft, Search, Filter, Calendar, History, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const monarchs = [
  {
    name: "William I",
    title: "The Conqueror",
    era: "Norman",
    years: "1066 - 1087",
    imageId: "monarch-william-i",
    bio: "The first Norman King of England. He led the Norman Conquest of 1066, fundamentally changing English society, administration, and the English language itself. He commissioned the Domesday Book, the first great census of England."
  },
  {
    name: "Henry II",
    title: "The Angevin",
    era: "Plantagenet",
    years: "1154 - 1189",
    imageId: "monarch-henry-ii",
    bio: "Greatly expanded the 'Angevin Empire' across France and England. He is credited with establishing the foundations of the English Common Law system, reformulating the relationship between the Crown and the Church."
  },
  {
    name: "Richard I",
    title: "The Lionheart",
    era: "Plantagenet",
    years: "1189 - 1199",
    imageId: "monarch-richard-i",
    bio: "A legendary military leader and a central figure in the Third Crusade. Despite his fame, he spent only about six months of his ten-year reign in England, focusing instead on his continental possessions and the Crusades."
  },
  {
    name: "John",
    title: "Lackland",
    era: "Plantagenet",
    years: "1199 - 1216",
    imageId: "monarch-john",
    bio: "His reign was marked by conflict with his barons, leading to the sealing of the Magna Carta in 1215, which limited royal power and established fundamental legal rights for subjects."
  },
  {
    name: "Edward I",
    title: "Hammer of the Scots",
    era: "Plantagenet",
    years: "1272 - 1307",
    imageId: "monarch-edward-i",
    bio: "A formidable ruler known for his legal reforms and extensive military campaigns that brought Wales under English control and attempted the same for Scotland. He was the first to formalize the role of Parliament."
  },
  {
    name: "Henry V",
    title: "The Victor",
    era: "Lancaster",
    years: "1413 - 1422",
    imageId: "monarch-henry-v",
    bio: "One of the great warrior kings of medieval England. He achieved a brilliant victory over the French at the Battle of Agincourt, nearly uniting the two crowns before his early death."
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
    bio: "The first Tudor monarch. He successfully ended the civil wars, centralized government power, and established a stable and wealthy throne through fiscal prudence and diplomacy."
  },
  {
    name: "Henry VIII",
    title: "Defender of the Faith",
    era: "Tudor",
    years: "1509 - 1547",
    imageId: "monarch-henry-viii",
    bio: "Famed for his six marriages and the English Reformation. He broke away from the authority of the Pope, establishing the monarch as the Supreme Head of the Church of England."
  },
  {
    name: "Elizabeth I",
    title: "The Virgin Queen",
    era: "Tudor",
    years: "1558 - 1603",
    imageId: "monarch-elizabeth-i",
    bio: "Her reign is known as the Elizabethan Era, a 'Golden Age' of English drama and exploration. She famously defeated the Spanish Armada in 1588, securing England's status as a maritime power."
  },
  {
    name: "Charles I",
    title: "The Martyr",
    era: "Stuart",
    years: "1625 - 1649",
    imageId: "monarch-charles-i",
    bio: "His belief in the Divine Right of Kings led to a bitter struggle with Parliament, culminating in the English Civil War and his public execution, which briefly ended the monarchy."
  },
  {
    name: "Charles II",
    title: "The Merry Monarch",
    era: "Stuart",
    years: "1660 - 1685",
    imageId: "monarch-charles-ii",
    bio: "Restored to the throne after the Puritan rule of Oliver Cromwell. His reign was characterized by a cultural revival, scientific advancement, and the expansion of trade and empire."
  },
  {
    name: "William III",
    title: "Prince of Orange",
    era: "Stuart",
    years: "1689 - 1702",
    imageId: "monarch-william-iii",
    bio: "Invited to take the throne during the Glorious Revolution. His joint reign with Mary II firmly established the principle of a constitutional monarchy and the Bill of Rights."
  },
  {
    name: "Victoria",
    title: "Empress of India",
    era: "Hanover",
    years: "1837 - 1901",
    imageId: "monarch-victoria",
    bio: "Her reign of over 63 years saw the height of the Industrial Revolution and the global expansion of the British Empire to its greatest extent, defining an entire era of culture and morality."
  },
  {
    name: "George VI",
    title: "The Wartime King",
    era: "Windsor",
    years: "1936 - 1952",
    imageId: "monarch-george-vi",
    bio: "A reluctant king who became a powerful symbol of British resistance and unity during the darkest years of the Second World War. He oversaw the beginning of the transition to the Commonwealth."
  },
  {
    name: "Elizabeth II",
    title: "The Longest Reign",
    era: "Windsor",
    years: "1952 - 2022",
    imageId: "monarch-elizabeth-ii",
    bio: "The longest-reigning monarch in British history. She oversaw the transition from the British Empire to the Commonwealth with remarkable grace, remaining a constant figure in a changing world."
  },
  {
    name: "Charles III",
    title: "The Modern King",
    era: "Windsor",
    years: "2022 - Present",
    imageId: "monarch-charles-iii",
    bio: "Acceded to the throne in 2022. He is known for his decades of environmental advocacy, his commitment to a modern, inclusive monarchy, and his efforts to champion sustainable development."
  }
];

interface MonarchCardProps {
  monarch: typeof monarchs[0];
  index: number;
}

const MonarchCard = React.memo(({ monarch, index }: MonarchCardProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const imageUrl = useMemo(() => PlaceHolderImages.find(img => img.id === monarch.imageId)?.imageUrl || '', [monarch.imageId]);

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
              src={imageUrl}
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
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3">
                    <div className="flex items-center gap-2 text-primary/80 border-b border-white/5 pb-2">
                      <Crown size={12} />
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{monarch.title}</span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-2">
                      <div className="space-y-0.5">
                        <h3 className="text-xl md:text-2xl font-headline font-black text-white leading-none tracking-tight">
                          {monarch.name}
                        </h3>
                        <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">
                          House of {monarch.era}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-[11px] md:text-xs font-black text-primary tracking-widest uppercase whitespace-nowrap">
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
          <div className="relative h-64 md:h-full min-h-[300px]">
             <Image 
                src={imageUrl}
                alt={monarch.name}
                fill
                className="object-cover"
                data-ai-hint="monarch portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0d0d14]/40" />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center space-y-6">
            <DialogHeader className="space-y-2">
              <div className="flex items-center gap-3 text-primary">
                <Crown size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">{monarch.title}</span>
              </div>
              <DialogTitle className="text-4xl font-headline font-black text-white leading-tight">
                {monarch.name}
              </DialogTitle>
              <div className="flex items-center gap-4 text-white/40">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{monarch.years}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-primary/40" />
                <div className="flex items-center gap-1.5">
                  <History size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">House of {monarch.era}</span>
                </div>
              </div>
            </DialogHeader>
            
            <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
            
            <p className="text-muted-foreground text-sm font-light leading-relaxed first-letter:text-4xl first-letter:font-headline first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              {monarch.bio}
            </p>
            
            <div className="pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse" />
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Historical Archive ID: {monarch.imageId}</span>
              </div>
            </div>
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
            {filteredMonarchs.map((monarch, index) => (
              <MonarchCard 
                key={monarch.name}
                monarch={monarch}
                index={index}
              />
            ))}
          </div>
          
          {filteredMonarchs.length === 0 && (
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
