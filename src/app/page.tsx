import Header from '@/components/sections/header';
import HeroBanner from '@/components/sections/hero-banner';
import PopularItems from '@/components/sections/popular-items';
import GameSections from '@/components/sections/game-sections';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="space-y-16">
        <HeroBanner />
        
        {/* Free To Pay Section */}
        <section className="container text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Free To Pay</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Плати меньше — получай больше. Удобный сервис доната для популярных игр.
          </p>
        </section>
        
        <PopularItems />
        
        {/* Services Section */}
        <section className="container text-center py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Все услуги:</h2>
        </section>
        
        <GameSections />
      </main>
      
      <Footer />
    </div>
  );
}