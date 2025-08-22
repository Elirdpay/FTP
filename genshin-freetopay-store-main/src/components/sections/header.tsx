'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingCart, User, Globe, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-card/90 backdrop-blur-sm border-b border-stroke sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Brand */}
          <Link href="/" className="brand flex items-center gap-3 font-display font-bold text-xl letter-spacing-wide">
            <div className="logo w-10 h-10 rounded-full bg-gradient-to-r from-brand to-brand-2 brand-glow flex items-center justify-center">
              <span className="text-primary-foreground font-bold">F</span>
            </div>
            <span className="text-foreground">Free To Pay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('genshin')}
              className="pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors"
            >
              Genshin Impact
            </button>
            <button 
              onClick={() => scrollToSection('hsr')}
              className="pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors"
            >
              Honkai: Star Rail
            </button>
            <button 
              onClick={() => scrollToSection('zzz')}
              className="pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors"
            >
              Zenless Zone Zero
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <button className="pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors hidden sm:flex items-center gap-1">
              <Globe className="w-4 h-4" />
              RU
            </button>

            {/* Search */}
            <button className="pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors hidden sm:block">
              <Search className="w-4 h-4" />
            </button>

            {/* Cart */}
            <button className="pill relative p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account */}
            <button className="pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors">
              <User className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-stroke mt-4 pt-4">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('genshin')}
                className="pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left"
              >
                Genshin Impact
              </button>
              <button 
                onClick={() => scrollToSection('hsr')}
                className="pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left"
              >
                Honkai: Star Rail
              </button>
              <button 
                onClick={() => scrollToSection('zzz')}
                className="pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left"
              >
                Zenless Zone Zero
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}