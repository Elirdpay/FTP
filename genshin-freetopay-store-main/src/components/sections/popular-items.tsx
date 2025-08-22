'use client';

import { Star, TrendingUp, ShoppingCart } from 'lucide-react';

interface PopularItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  game: string;
  gameIcon: string;
  isMostPopular?: boolean;
  category: 'crystal' | 'subscription' | 'battlepass';
}

const popularItems: PopularItem[] = [
  {
    id: '1',
    name: '980 Кристаллов сотворения',
    price: 980,
    originalPrice: 1080,
    discount: '10%',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
    game: 'Genshin Impact',
    gameIcon: '🌟',
    isMostPopular: true,
    category: 'crystal'
  },
  {
    id: '2',
    name: 'Благословение полой луны',
    price: 300,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
    game: 'Genshin Impact',
    gameIcon: '🌟',
    isMostPopular: true,
    category: 'subscription'
  },
  {
    id: '3',
    name: '980 Онериковых осколков',
    price: 980,
    originalPrice: 1080,
    discount: '10%',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
    game: 'Honkai: Star Rail',
    gameIcon: '🚂',
    isMostPopular: true,
    category: 'crystal'
  },
  {
    id: '4',
    name: 'Жемчужный гимн',
    price: 635,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
    game: 'Genshin Impact',
    gameIcon: '🌟',
    category: 'battlepass'
  },
  {
    id: '5',
    name: '980 Моноскипов',
    price: 980,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/2705-24.jpg',
    game: 'Zenless Zone Zero',
    gameIcon: '⚡',
    category: 'crystal'
  },
  {
    id: '6',
    name: 'Пропуск экспресса',
    price: 300,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
    game: 'Honkai: Star Rail',
    gameIcon: '🚂',
    category: 'subscription'
  }
];

export default function PopularItems() {
  return (
    <section className="container">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl brand-gradient brand-glow">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Самые популярные товары
            </h2>
            <p className="text-muted-foreground mt-1">
              Топовые предложения из всех игр
            </p>
          </div>
        </div>
        <button className="text-brand hover:text-brand-2 font-medium transition-colors duration-200">
          Просмотреть больше →
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {popularItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-card border border-stroke rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Most Popular Badge */}
            {item.isMostPopular && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Хит продаж
                </div>
              </div>
            )}

            {/* Discount Badge */}
            {item.discount && (
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
                  -{item.discount}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {/* Product Image */}
              <div className="w-full h-32 bg-muted rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Game Badge */}
              <div className="flex items-center gap-2">
                <div className="text-lg">{item.gameIcon}</div>
                <span className="text-sm text-muted-foreground font-medium">
                  {item.game}
                </span>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  item.category === 'crystal'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : item.category === 'subscription'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {item.category === 'crystal'
                    ? 'Кристаллы'
                    : item.category === 'subscription'
                    ? 'Подписка'
                    : 'Батл Пасс'}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-card-foreground text-lg leading-tight group-hover:text-brand transition-colors duration-200">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-brand">
                    {item.price.toLocaleString()} ₽
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {item.originalPrice.toLocaleString()} ₽
                    </span>
                  )}
                </div>
              </div>

              {/* Purchase Button */}
              <button className="w-full brand-gradient text-primary-foreground font-bold py-3 px-6 rounded-xl brand-glow hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-muted border border-stroke rounded-2xl">
          <TrendingUp className="w-5 h-5 text-brand" />
          <span className="text-muted-foreground">
            Более 1000 популярных товаров доступны в нашем каталоге
          </span>
        </div>
      </div>
    </section>
  );
}