
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ThreeTimeline } from '@/components/ThreeTimeline';
import { Exhibits } from '@/components/Exhibits';
import { WorldMap } from '@/components/WorldMap';
import { AISummarizer } from '@/components/AISummarizer';
import { Landmark, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navigation />
      
      <Hero />
      
      <ThreeTimeline />
      
      <Exhibits />
      
      <WorldMap />
      
      <AISummarizer />

      {/* Footer */}
      <footer className="bg-card py-20 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center gap-2">
                <Landmark className="text-primary" size={32} />
                <span className="font-headline text-2xl font-bold tracking-tight text-primary gold-glow">
                  BRITISH <span className="text-foreground">GREATNESS</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Preserving the legacy and narrating the complex history of the British Empire through immersive technology and data-driven storytelling.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-all"><Github size={18} /></a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary hover:text-white transition-all"><Mail size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-headline font-bold text-lg mb-6 text-foreground">Navigation</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Digital Archive</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Historical Pillars</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Timeline Odyssey</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Interactive Atlas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline font-bold text-lg mb-6 text-foreground">Resources</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Educational Portal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Museum Partners</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Image Licenses</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-headline font-bold text-lg mb-6 text-foreground">Newsletter</h4>
              <p className="text-sm text-muted-foreground">Join our monthly dispatch for updates on new exhibits and archival discoveries.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background border border-primary/20 rounded-lg px-4 py-2 text-sm w-full focus:border-primary outline-none"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all">JOIN</button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground tracking-wider uppercase">© 2024 BRITISH GREATNESS ARCHIVE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-xs text-muted-foreground tracking-wider uppercase">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
