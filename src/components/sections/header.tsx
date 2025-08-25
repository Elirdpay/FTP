'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Globe, Menu, X } from 'lucide-react';
import AuthDialog from '@/components/ui/AuthDialog'
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [profile, setProfile] = useState<any>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(()=>{
    const update = async (e?: any)=>{
      try{
        const token = localStorage.getItem('access_token')
        if (token){
          // prefer server_cart_count if present
          const sc = localStorage.getItem('server_cart_count')
          if (sc !== null){ setCartCount(Number(sc)); return }
          // fallback: fetch server cart
          try{
            const r = await fetch('/api/me/cart', { headers: { Authorization: `Bearer ${token}` } })
            if (r.ok){ const j = await r.json(); setCartCount(Array.isArray(j)? j.reduce((s:any,i:any)=>s+(i.quantity||0),0) : 0); return }
          }catch(e){}
        }
        const g = JSON.parse(localStorage.getItem('guest_cart') || '[]')
        setCartCount(Array.isArray(g)? g.reduce((s:any,i:any)=>s+(i.quantity||1),0) : 0)
      }catch(e){ setCartCount(0) }
    }
    update()
    window.addEventListener('storage', update)
    return ()=> window.removeEventListener('storage', update)
  }, [])

  useEffect(()=>{
    const loadProfile = async ()=>{
      try{
        const token = localStorage.getItem('access_token')
        if(!token){ setIsLogged(false); setProfile(null); return }
        setIsLogged(true)
        const r = await fetch('/api/me/profile', { headers: { 'Authorization': `Bearer ${token}` } })
        if(!r.ok){ setIsLogged(false); setProfile(null); return }
        const j = await r.json()
        setProfile(j)
      }catch(e){ console.error('profile fetch failed', e); setIsLogged(false); setProfile(null) }
    }
    loadProfile()
  const onStorage = (_e:any)=>{ loadProfile() }
  window.addEventListener('storage', onStorage)
  return ()=> window.removeEventListener('storage', onStorage)
  },[])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
  <header className="bg-card border-b border-stroke sticky top-0 z-50">
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
          <div className="flex items-center gap-2">
            <ThemeToggle />
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
            <Link href="/cart" className="pill relative p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <div className="relative">
              <button onClick={()=>{ if(isLogged){ setMenuOpen(!menuOpen) } else { setIsAuthOpen(true) } }} className={`pill p-2 border rounded-xl transition-colors flex items-center gap-2 ${isLogged? 'brand-gradient brand-glow text-primary-foreground border-transparent':'bg-muted border border-stroke hover:border-brand-2'}`}>
                <User className="w-4 h-4" />
                <span className="hidden sm:block text-sm font-medium">{isLogged? 'Кабинет' : 'Войти'}</span>
              </button>

              {menuOpen && isLogged && (
                <div className="absolute right-0 mt-2 w-64 bg-card border border-stroke rounded-lg p-4 shadow-lg z-50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs text-muted-foreground">Токены</div>
                      <div className="font-semibold">{profile?.tokens ?? 0}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Баланс</div>
                      <div className="font-semibold">{profile?.balance ? Math.round(profile.balance) : 0} ₽</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href="/account" className="pill px-3 py-2 bg-muted border border-stroke rounded-md text-sm text-center">Перейти в личный кабинет</Link>
                    <button onClick={()=>{ localStorage.removeItem('access_token'); setIsLogged(false); setProfile(null); setMenuOpen(false); try{ location.reload() }catch(e){} }} className="pill px-3 py-2 bg-destructive text-destructive-foreground rounded-md">Выйти</button>
                  </div>
                </div>
              )}

              <AuthDialog open={isAuthOpen} onClose={()=>{ setIsAuthOpen(false); /* refresh profile after close */ setTimeout(()=>{ try{ window.dispatchEvent(new Event('storage')) }catch(e){} },200) }} />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
          <script dangerouslySetInnerHTML={{__html: ''}} />
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