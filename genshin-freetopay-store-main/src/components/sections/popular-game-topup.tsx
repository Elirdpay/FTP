import { ChevronRight } from 'lucide-react';

const gameTopUps = [
  {
    name: "PUBG Mobile UC (Global)",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/930-19.jpg",
    link: "https://www.seagm.com/ru/pubg-mobile-uc-top-up-global?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "Mobile Legends Diamonds",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/758-20.jpg",
    link: "https://www.seagm.com/ru/mobile-legends-diamonds-top-up?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "Age of Empires Mobile Top Up",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/2569-21.jpg",
    link: "https://www.seagm.com/ru/age-of-empires-mobile-top-up?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "Honor of Kings Tokens & Packages Global",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1515-22.jpg",
    link: "https://www.seagm.com/ru/honor-of-kings-token-top-up?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "TikTok China Diamonds (Douyin)",
    region: "China",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/949-23.jpg",
    link: "https://www.seagm.com/ru/tik-tok-credit-instant-top-up?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "Marvel Rivals Top Up",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/2705-24.jpg",
    link: "https://www.seagm.com/ru/marvel-rivals-top-up?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "Identity V Echoes(Global) Top up",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/776-25.jpg",
    link: "https://www.seagm.com/ru/identity-v-idv-global-top-up?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "BIGO Live Diamonds",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/839-26.jpg",
    link: "https://www.seagm.com/ru/bigo-live-diamonds?ps=Home-Popular-Game-Top-Up",
  },
  {
    name: "Honkai: Star Rail",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg",
    link: "https://www.seagm.com/ru/honkai-star-rail-oneiric-shard-top-up?ps=Home-Popular-Game-Top-Up",
  },
];

const PopularGameTopup = () => {
  return (
    <div className="bg-card text-foreground p-4 rounded-lg shadow-md h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold font-display text-foreground">
          Популярная игра пополнение
        </h2>
        <a href="https://www.seagm.com/ru/direct-topup" className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors">
          <span>Просмотреть больше</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gameTopUps.map((game, index) => (
          <a key={index} href={game.link} className="flex items-center p-1.5 rounded-lg hover:bg-accent transition-colors group">
            <img
              src={game.imageUrl}
              alt={game.name}
              width={56}
              height={56}
              className="w-14 h-14 rounded-lg mr-3 flex-shrink-0"
              loading="lazy"
            />
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                {game.name}
              </p>
              <p className="text-xs text-muted-foreground">{game.region}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularGameTopup;