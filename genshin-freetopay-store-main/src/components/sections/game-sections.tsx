'use client';

import { useState } from 'react';
import { ShoppingCart, Coins, Calendar, Award } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  amount: number;
  price: number;
  currency: string;
  type: 'crystal' | 'subscription' | 'battlepass';
  image?: string;
}

interface Game {
  id: string;
  name: string;
  shortName: string;
  brandColor: string;
  gradientFrom: string;
  gradientTo: string;
  crystalName: string;
  subscriptionName: string;
  logo: string;
}

const games: Game[] = [
  {
    id: 'genshin',
    name: 'Genshin Impact',
    shortName: 'GI',
    brandColor: '#4A90E2',
    gradientFrom: '#4A90E2',
    gradientTo: '#7B68EE',
    crystalName: 'Кристаллы сотворения',
    subscriptionName: 'Благословение полой луны',
    logo: '🌟'
  },
  {
    id: 'hsr',
    name: 'Honkai: Star Rail',
    shortName: 'HSR',
    brandColor: '#F39C12',
    gradientFrom: '#F39C12',
    gradientTo: '#E67E22',
    crystalName: 'Онериковые осколки',
    subscriptionName: 'Пропуск экспресса',
    logo: '🚂'
  },
  {
    id: 'zzz',
    name: 'Zenless Zone Zero',
    shortName: 'ZZZ',
    brandColor: '#E74C3C',
    gradientFrom: '#E74C3C',
    gradientTo: '#C0392B',
    crystalName: 'Моноскипы',
    subscriptionName: 'Месячный пропуск',
    logo: '⚡'
  }
];

const generateProducts = (game: Game): Product[] => [
  // Crystals
  { id: `${game.id}-crystal-6480`, name: `6480 ${game.crystalName}`, amount: 6480, price: 6400, currency: '₽', type: 'crystal' },
  { id: `${game.id}-crystal-3280`, name: `3280 ${game.crystalName}`, amount: 3280, price: 3280, currency: '₽', type: 'crystal' },
  { id: `${game.id}-crystal-1980`, name: `1980 ${game.crystalName}`, amount: 1980, price: 1980, currency: '₽', type: 'crystal' },
  { id: `${game.id}-crystal-980`, name: `980 ${game.crystalName}`, amount: 980, price: 980, currency: '₽', type: 'crystal' },
  { id: `${game.id}-crystal-300`, name: `300 ${game.crystalName}`, amount: 300, price: 300, currency: '₽', type: 'crystal' },
  { id: `${game.id}-crystal-60`, name: `60 ${game.crystalName}`, amount: 60, price: 60, currency: '₽', type: 'crystal' },
  
  // Subscriptions
  { id: `${game.id}-subscription`, name: game.subscriptionName, amount: 1, price: 300, currency: '₽', type: 'subscription' },
  
  // Battle Pass
  { id: `${game.id}-bp-basic`, name: 'Жемчужный гимн', amount: 1, price: 635, currency: '₽', type: 'battlepass' },
  { id: `${game.id}-bp-premium`, name: 'Жемчужный хор', amount: 1, price: 1250, currency: '₽', type: 'battlepass' }
];

const getProductIcon = (type: string) => {
  switch (type) {
    case 'crystal':
      return <Coins className="w-4 h-4" />;
    case 'subscription':
      return <Calendar className="w-4 h-4" />;
    case 'battlepass':
      return <Award className="w-4 h-4" />;
    default:
      return <Coins className="w-4 h-4" />;
  }
};

export default function GameSections() {
  const [selectedTab, setSelectedTab] = useState<{[key: string]: string}>({});

  const handleAddToCart = (product: Product, game: Game) => {
    console.log(`Adding to cart: ${product.name} for ${game.name}`);
  };

  const getTabKey = (gameId: string) => selectedTab[gameId] || 'crystals';

  return (
    <div className="container space-y-16">
      {games.map((game) => (
        <section key={game.id} id={game.id} className="space-y-8">
          <div className="flex items-center space-x-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl brand-glow"
              style={{ 
                background: `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})`,
                color: 'white'
              }}
            >
              {game.logo}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">{game.name}</h2>
              <p className="text-muted-foreground">Каталог донатов</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-3 flex-wrap">
            {[
              { key: 'crystals', label: 'Кристаллы', icon: <Coins className="w-4 h-4" /> },
              { key: 'subscriptions', label: 'Подписки', icon: <Calendar className="w-4 h-4" /> },
              { key: 'battlepass', label: 'Боевой пропуск', icon: <Award className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setSelectedTab(prev => ({ ...prev, [game.id]: tab.key }))}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                  getTabKey(game.id) === tab.key
                    ? 'brand-gradient text-primary-foreground brand-glow'
                    : 'bg-muted border border-stroke text-muted-foreground hover:border-brand-2'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generateProducts(game)
              .filter(p => {
                const activeTab = getTabKey(game.id);
                if (activeTab === 'crystals') return p.type === 'crystal';
                if (activeTab === 'subscriptions') return p.type === 'subscription';
                if (activeTab === 'battlepass') return p.type === 'battlepass';
                return true;
              })
              .map((product) => (
                <div 
                  key={product.id} 
                  className="bg-card border border-stroke rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${game.gradientFrom}20, ${game.gradientTo}20)`,
                        border: `1px solid ${game.brandColor}30`
                      }}
                    >
                      {getProductIcon(product.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground text-lg mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{game.shortName}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-brand mb-1">
                      {product.price.toLocaleString()} {product.currency}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(product, game)}
                    className="w-full brand-gradient text-primary-foreground font-bold py-3 px-6 rounded-xl brand-glow hover:scale-105 transition-transform flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    В корзину
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}