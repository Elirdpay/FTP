import { ChevronRight } from 'lucide-react';

const gameTopUps = [
  {
    name: "Genshin Impact",
    region: "Global",
    imageUrl: "/icons/GI.png",
    link: "https://www.seagm.com/ru/genshin-impact-top-up",
  },
  {
    name: "Honkai: Star Rail",
    region: "Global",
    imageUrl: "/icons/HSR.png",
    link: "https://www.seagm.com/ru/honkai-star-rail-oneiric-shard-top-up",
  },
  {
    name: "Zenless Zone Zero",
    region: "Global",
    imageUrl: "/icons/ZZZ.png",
    link: "https://www.seagm.com/ru/zenless-zone-zero-top-up",
  },
  // ...остальные игры, если нужно, можно добавить сюда
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