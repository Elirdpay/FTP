'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const bannerData = [
  {
    id: 'genshin',
    title: 'Genshin Impact',
    subtitle: 'Кристаллы сотворения',
    description: 'Плати меньше — получай больше',
    discount: 'До 20% скидка',
    buttonText: 'Купить сейчас',
  background: undefined,
  image: '/banner-genshin-new.png',
    href: '#genshin'
  },
  {
    id: 'hsr',
    title: 'Honkai: Star Rail',
    subtitle: 'Онериковые осколки',
    description: 'Исследуй звездные пути',
    discount: 'До 15% скидка',
    buttonText: 'Пополнить',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    href: '#hsr'
  },
  {
    id: 'zzz',
    title: 'Zenless Zone Zero',
    subtitle: 'Моноскипы',
    description: 'Окунись в городские приключения',
    discount: 'До 18% скидка',
    buttonText: 'Получить',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    href: '#zzz'
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  return (
    <section className="w-full">
      <div className="container">
        <div className="relative group rounded-xl overflow-hidden h-80 md:h-96">
          {/* Banner Slides */}
          {bannerData.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
              style={banner.image ? {
                background: `url(${banner.image}) center/cover no-repeat`
              } : { background: banner.background }}
            >
              {/* dark overlay to improve text contrast */}
              <div className="absolute inset-0 bg-black/55 pointer-events-none"></div>
              <div className="relative h-full flex items-center justify-between p-8 md:p-12">
                {/* Content */}
                <div className="flex-1 text-white">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {banner.discount}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-2 hero-banner-heading">{banner.title}</h1>
                  <p className="text-lg md:text-xl text-white font-semibold mb-2 hero-banner-subtitle">{banner.subtitle}</p>
                  <p className="text-white font-medium mb-6 max-w-md hero-banner-desc">{banner.description}</p>
                  <a
                    href={banner.href}
                    className="inline-block px-6 py-3 brand-gradient text-primary-foreground font-semibold rounded-xl brand-glow hover:scale-105 transition-transform"
                  >
                    {banner.buttonText}
                  </a>
                </div>

                {/* Game Logo/Icon Area (hidden for genshin) */}
                {banner.id !== 'genshin' && (
                  <div className="hidden md:flex items-center justify-center w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {banner.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
            {bannerData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;