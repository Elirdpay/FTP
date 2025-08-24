"use client";
import { Star, TrendingUp, ShoppingCart } from 'lucide-react';

interface PopularItem {
  id: number;
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
    id: 13,
    name: '980 Кристаллов сотворения',
    price: 980,
    originalPrice: 1080,
    discount: '10%',
    image: '/icons/GI.png',
    game: 'Genshin Impact',
    gameIcon: '/icons/GI.png',
    isMostPopular: true,
    category: 'crystal'
  },
  {
    id: 16,
    name: 'Благословение полой луны',
    price: 300,
    image: '/icons/GI.png',
    game: 'Genshin Impact',
    gameIcon: '/icons/GI.png',
    isMostPopular: true,
    category: 'subscription'
  },
  {
    id: 23,
    name: '980 Сущности древних снов',
    price: 980,
    originalPrice: 1080,
    image: '/icons/HSR.png',
    game: 'Honkai: Star Rail',
    gameIcon: '/icons/HSR.png',
    isMostPopular: true,
    category: 'crystal'
  },
  {
    id: 17,
    name: 'Жемчужный гимн',
    price: 635,
    image: '/icons/GI.png',
    game: 'Genshin Impact',
    gameIcon: '/icons/GI.png',
    category: 'battlepass'
  },
  {
    id: 33,
    name: '980 Монохромов',
    price: 980,
    image: '/icons/ZZZ.png',
    game: 'Zenless Zone Zero',
    gameIcon: '/icons/ZZZ.png',
    category: 'crystal'
  },
  {
    id: 26,
    name: 'Пропуск снабжения экспресса',
    price: 300,
    image: '/icons/HSR.png',
    game: 'Honkai: Star Rail',
    gameIcon: '/icons/HSR.png',
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
                <img src={item.gameIcon} alt={item.game} className="w-6 h-6 rounded" />
                <span className="text-sm text-muted-foreground font-medium">
                  {item.game}
                </span>
                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-brand">
                    {new Intl.NumberFormat('ru-RU').format(item.price)} ₽
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {new Intl.NumberFormat('ru-RU').format(item.originalPrice)} ₽
                    </span>
                  )}
                </div>
              </div>

              {/* Purchase Button */}
              <button onClick={async ()=>{
                const api = await import('@/lib/api')
                const r:any = await api.addToCart(item.id, 1, item.name, item.price)
                const toast = (await import('@/lib/toast')).toast
                if (r.ok === false || (r.status && r.status >= 400)) {
                  toast('Ошибка')
                } else toast('Добавлено в корзину')
              }} className="w-full brand-gradient text-primary-foreground font-bold py-3 px-6 rounded-xl brand-glow hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}