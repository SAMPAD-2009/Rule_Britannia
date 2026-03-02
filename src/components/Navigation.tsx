
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Landmark, Compass, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '/', icon: Landmark },
  { name: 'Colonies', href: '/colonies', icon: Compass },
  { name: 'Rulers', href: '/rulers', icon: Users },
  { name: 'Timeline', href: '/#timeline', icon: Clock },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg rotate-45 border-2 border-primary-foreground/20">
                <Landmark className="text-white -rotate-45" size={20} />
              </div>
              <span className="font-headline text-2xl font-bold tracking-tight text-primary gold-glow">
                BRITISH <span className="text-foreground">GREATNESS</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
              >
                <item.icon size={16} className="text-primary/50 group-hover:text-primary transition-colors" />
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
              EXPLORE ARCHIVE
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-morphism border-b border-primary/20 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-3 py-4 text-lg font-medium text-foreground hover:text-primary transition-colors w-full justify-center border-b border-primary/5 last:border-0"
              >
                <item.icon size={20} className="text-primary" />
                {item.name}
              </Link>
            ))}
            <div className="pt-4 w-full px-4">
              <Button className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-6">
                EXPLORE ARCHIVE
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
