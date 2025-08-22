'use client';

import { Youtube, Twitch, MessageCircle, Users, TrendingUp, Star, ExternalLink } from 'lucide-react';

interface PartnerChannel {
  id: string;
  name: string;
  platform: 'youtube' | 'twitch' | 'telegram';
  subscribers: string;
  description: string;
  category: string;
  verified: boolean;
  earnings: string;
}

const partnerChannels: PartnerChannel[] = [
  {
    id: '1',
    name: 'ProGamer Studios',
    platform: 'youtube',
    subscribers: '2.4M',
    description: 'Геймплей, обзоры новинок и стримы популярных игр',
    category: 'Игровой контент',
    verified: true,
    earnings: '150,000-450,000₽/мес'
  },
  {
    id: '2',
    name: 'GameMaster Live',
    platform: 'twitch',
    subscribers: '890K',
    description: 'Ежедневные стримы киберспорта и онлайн-турниры',
    category: 'Киберспорт',
    verified: true,
    earnings: '90,000-300,000₽/мес'
  },
  {
    id: '3',
    name: 'Gaming News RU',
    platform: 'telegram',
    subscribers: '156K',
    description: 'Новости игровой индустрии и эксклюзивные материалы',
    category: 'Новости',
    verified: true,
    earnings: '45,000-150,000₽/мес'
  },
  {
    id: '4',
    name: 'RetroGaming Hub',
    platform: 'youtube',
    subscribers: '1.8M',
    description: 'Ретро-игры, история геймдева и классические обзоры',
    category: 'Ретро-игры',
    verified: true,
    earnings: '120,000-360,000₽/мес'
  },
  {
    id: '5',
    name: 'StreamKing',
    platform: 'twitch',
    subscribers: '1.2M',
    description: 'Популярные онлайн-игры и интерактивные стримы',
    category: 'Развлечения',
    verified: true,
    earnings: '180,000-540,000₽/мес'
  },
  {
    id: '6',
    name: 'Mobile Gaming Pro',
    platform: 'telegram',
    subscribers: '89K',
    description: 'Гайды по мобильным играм и промокоды',
    category: 'Мобильные игры',
    verified: true,
    earnings: '24,000-90,000₽/мес'
  }
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'youtube':
      return <Youtube className="h-5 w-5 text-red-400" />;
    case 'twitch':
      return <Twitch className="h-5 w-5 text-purple-400" />;
    case 'telegram':
      return <MessageCircle className="h-5 w-5 text-blue-400" />;
    default:
      return null;
  }
};

export default function PartnerShowcase() {
  return (
    <section className="container">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 text-foreground">
          Партнерские Каналы
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Присоединяйтесь и зарабатывайте с нами, занимаясь любимым делом
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-brand" />
            <span>Стабильный доход</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-brand" />
            <span>Активная аудитория</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-brand" />
            <span>Проверенные партнеры</span>
          </div>
        </div>
      </div>

      {/* Partner Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {partnerChannels.map((channel) => (
          <div 
            key={channel.id} 
            className="bg-card border border-stroke rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 brand-glow"
          >
            {/* Platform Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {getPlatformIcon(channel.platform)}
                <div>
                  <h3 className="font-semibold text-lg text-card-foreground">{channel.name}</h3>
                  <div className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full border border-stroke">
                    {channel.category}
                  </div>
                </div>
              </div>
              {channel.verified && (
                <div className="bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Проверен
                </div>
              )}
            </div>

            {/* Channel Info */}
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {channel.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{channel.subscribers} подписчиков</span>
                </div>
                <div className="text-brand font-medium">
                  {channel.earnings}
                </div>
              </div>
            </div>

            {/* Join Button */}
            <button className="w-full brand-gradient text-primary-foreground font-bold py-3 px-6 rounded-xl brand-glow hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Присоединиться
            </button>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-card border border-stroke rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-center mb-8 text-card-foreground">
          Преимущества Партнерства
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mx-auto border border-brand/30">
              <TrendingUp className="h-8 w-8 text-brand" />
            </div>
            <h4 className="font-semibold text-card-foreground text-lg">Высокий Доход</h4>
            <p className="text-sm text-muted-foreground">До 70% от рекламных доходов</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mx-auto border border-brand/30">
              <Users className="h-8 w-8 text-brand" />
            </div>
            <h4 className="font-semibold text-card-foreground text-lg">Поддержка Роста</h4>
            <p className="text-sm text-muted-foreground">Помощь в развитии канала</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mx-auto border border-brand/30">
              <Star className="h-8 w-8 text-brand" />
            </div>
            <h4 className="font-semibold text-card-foreground text-lg">Эксклюзивный Контент</h4>
            <p className="text-sm text-muted-foreground">Первый доступ к новинкам</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center mx-auto border border-brand/30">
              <ExternalLink className="h-8 w-8 text-brand" />
            </div>
            <h4 className="font-semibold text-card-foreground text-lg">Брендинг</h4>
            <p className="text-sm text-muted-foreground">Персональные материалы</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <button className="brand-gradient text-primary-foreground font-bold px-8 py-4 rounded-2xl brand-glow hover:scale-105 transition-transform text-lg flex items-center justify-center gap-2 mx-auto">
          <Star className="h-5 w-5" />
          Стать Партнером
        </button>
        <p className="text-sm text-muted-foreground mt-4">
          Начните зарабатывать уже сегодня • Минимальные требования • Быстрое одобрение
        </p>
      </div>
    </section>
  );
}