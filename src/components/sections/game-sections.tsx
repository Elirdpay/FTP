'use client';

import { useState } from 'react';
import { ShoppingCart, Coins, Calendar, Award } from 'lucide-react';

interface Product {
  id: number;
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
    logo: '/icons/GI.png'
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
    logo: '/icons/HSR.png'
  },
  {
    id: 'zzz',
    name: 'Zenless Zone Zero',
    shortName: 'ZZZ',
    brandColor: '#E74C3C',
    gradientFrom: '#E74C3C',
    gradientTo: '#C0392B',
  crystalName: 'Монохромы',
    subscriptionName: 'Месячный пропуск',
    logo: '/icons/ZZZ.png'
  }
];

const generateProducts = (game: Game): Product[] => {
  // Соответствие id из базы для каждого товара
  if (game.id === 'genshin') {
    return [
      { id: 10, name: '6480 Кристаллов сотворения', amount: 6480, price: 6400, currency: '₽', type: 'crystal' },
      { id: 11, name: '3280 Кристаллов сотворения', amount: 3280, price: 3280, currency: '₽', type: 'crystal' },
      { id: 12, name: '1980 Кристаллов сотворения', amount: 1980, price: 1980, currency: '₽', type: 'crystal' },
      { id: 13, name: '980 Кристаллов сотворения', amount: 980, price: 980, currency: '₽', type: 'crystal' },
      { id: 14, name: '300 Кристаллов сотворения', amount: 300, price: 300, currency: '₽', type: 'crystal' },
      { id: 15, name: '60 Кристаллов сотворения', amount: 60, price: 60, currency: '₽', type: 'crystal' },
      { id: 16, name: 'Благословение полой луны', amount: 1, price: 300, currency: '₽', type: 'subscription' },
      { id: 17, name: 'Жемчужный гимн', amount: 1, price: 635, currency: '₽', type: 'battlepass' },
      { id: 18, name: 'Жемчужный хор', amount: 1, price: 1250, currency: '₽', type: 'battlepass' }
    ];
  }
  if (game.id === 'hsr') {
    return [
      { id: 20, name: '6480 Сущности древних снов', amount: 6480, price: 6400, currency: '₽', type: 'crystal' },
      { id: 21, name: '3280 Сущности древних снов', amount: 3280, price: 3280, currency: '₽', type: 'crystal' },
      { id: 22, name: '1980 Сущности древних снов', amount: 1980, price: 1980, currency: '₽', type: 'crystal' },
      { id: 23, name: '980 Сущности древних снов', amount: 980, price: 980, currency: '₽', type: 'crystal' },
      { id: 24, name: '300 Сущности древних снов', amount: 300, price: 300, currency: '₽', type: 'crystal' },
      { id: 25, name: '60 Сущности древних снов', amount: 60, price: 60, currency: '₽', type: 'crystal' },
      { id: 26, name: 'Пропуск снабжения экспресса', amount: 1, price: 300, currency: '₽', type: 'subscription' },
      { id: 27, name: 'Слава Безымянных', amount: 1, price: 635, currency: '₽', type: 'battlepass' },
      { id: 28, name: 'Медаль Безымянных', amount: 1, price: 1250, currency: '₽', type: 'battlepass' }
    ];
  }
  if (game.id === 'zzz') {
    return [
  { id: 30, name: '6480 Монохромов', amount: 6480, price: 6400, currency: '₽', type: 'crystal' },
  { id: 31, name: '3280 Монохромов', amount: 3280, price: 3280, currency: '₽', type: 'crystal' },
  { id: 32, name: '1980 Монохромов', amount: 1980, price: 1980, currency: '₽', type: 'crystal' },
  { id: 33, name: '980 Монохромов', amount: 980, price: 980, currency: '₽', type: 'crystal' },
  { id: 34, name: '300 Монохромов', amount: 300, price: 300, currency: '₽', type: 'crystal' },
  { id: 35, name: '60 Монохромов', amount: 60, price: 60, currency: '₽', type: 'crystal' },
      { id: 36, name: 'Интернот-подписка', amount: 1, price: 300, currency: '₽', type: 'subscription' },
      { id: 37, name: 'Фонд Риду: Продвинутый план', amount: 1, price: 635, currency: '₽', type: 'battlepass' },
      { id: 38, name: 'Фонд Риду: Премиальный план', amount: 1, price: 1250, currency: '₽', type: 'battlepass' }
    ];
  }
  return [];
};

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

  const handleAddToCart = async (product: Product, game: Game) => {
    try{
      // use helper if available
      // dynamic import to avoid circular
      const api = await import('@/lib/api')
      const toast = (await import('@/lib/toast')).toast
  const r:any = await api.addToCart(product.id, 1, product.name, product.price)
      if (r.ok === false || (r.status && r.status >= 400)) {
        toast('Ошибка при добавлении в корзину')
        return
      }
      toast('Добавлено в корзину')
      try{
        const token = localStorage.getItem('access_token')
        if (token){
          const rc = await fetch('/api/me/cart', { headers: { Authorization: `Bearer ${token}` } })
          if (rc.ok){ const j = await rc.json(); const cnt = Array.isArray(j)? j.reduce((s:any,i:any)=>s + (i.quantity||0),0) : 0; try{ localStorage.setItem('server_cart_count', String(cnt)) }catch(e){}; try{ window.dispatchEvent(new Event('storage')) }catch(e){} }
        }
      }catch(e){}
    } catch (e) {
      console.error(e);
      const toast = (await import('@/lib/toast')).toast;
      toast('Ошибка при добавлении');
    }
  };

  const getTabKey = (gameId: string) => selectedTab[gameId] || 'crystals';

  return (
    <div className="container space-y-16">
      {games.map((game) => (
        <section key={game.id} id={game.id} className="space-y-8">
          <div className="flex items-center space-x-4">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center brand-glow bg-white overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})`
              }}
            >
              <img src={game.logo} alt={game.name} className="w-full h-full object-cover rounded-2xl" />
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
                      {new Intl.NumberFormat('ru-RU').format(product.price)} {product.currency}
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