import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface GameCardProps {
  title: string;
  region: string;
  imageUrl: string;
  href: string;
}

const gameCardsData: GameCardProps[] = [
  {
    title: "PlayStation Network Card (HK)",
    region: "Hong Kong",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/332-10.jpg",
    href: "https://www.seagm.com/ru/playstation-network-card-psn-hongkong?ps=Home-Popular-Game-Card",
  },
  {
    title: "Free Fire Diamonds Pins (Garena)",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/999-11.jpg",
    href: "https://www.seagm.com/ru/free-fire-diamonds-pin-garena?ps=Home-Popular-Game-Card",
  },
  {
    title: "PUBG Mobile UC Redeem Code (Global)",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/843-12.jpg",
    href: "https://www.seagm.com/ru/pubgm-uc-global-code?ps=Home-Popular-Game-Card",
  },
  {
    title: "Cherry Credits CC",
    region: "Global",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/70-13.jpg",
    href: "https://www.seagm.com/ru/cherry-credits-cc?ps=Home-Popular-Game-Card",
  },
  {
    title: "iTunes Gift Card (US)",
    region: "United States",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/191-14.jpg",
    href: "https://www.seagm.com/ru/itunes-gift-card-united-states?ps=Home-Popular-Game-Card",
  },
  {
    title: "iTunes Gift Card (CN)",
    region: "China",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/570-15.jpg",
    href: "https://www.seagm.com/ru/itunes-gift-card-china?ps=Home-Popular-Game-Card",
  },
  {
    title: "MyCard (TW)",
    region: "Taiwan",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/6-16.jpg",
    href: "https://www.seagm.com/ru/mycard-taiwan-hongkong?ps=Home-Popular-Game-Card",
  },
  {
    title: "iTunes Gift Card (JP)",
    region: "Japan",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/220-17.jpg",
    href: "https://www.seagm.com/ru/itunes-gift-card-japan?ps=Home-Popular-Game-Card",
  },
  {
    title: "PlayStation Network Card (US)",
    region: "United States",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/189-18.jpg",
    href: "https://www.seagm.com/ru/playstation-network-card-psn-united-states?ps=Home-Popular-Game-Card",
  },
];

const GameCard = ({ title, region, imageUrl, href }: GameCardProps) => (
  <a href={href} className="group flex items-center p-2 rounded-lg hover:bg-accent transition-colors">
    <Image
      src={imageUrl}
      alt={title}
      width={48}
      height={48}
      className="rounded-lg mr-3 flex-shrink-0"
    />
    <div>
      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">{title}</p>
      <p className="text-xs text-muted-foreground">{region}</p>
    </div>
  </a>
);

const PopularGameCards = () => {
    return (
        <div className="bg-card text-card-foreground rounded-lg p-4 md:p-6 border shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-semibold text-lg text-foreground">
                    Популярная игральная карта
                </h3>
                <a href="https://www.seagm.com/ru/card" className="flex items-center text-xs text-muted-foreground hover:text-primary transition-colors flex-shrink-0 whitespace-nowrap">
                    <span>Просмотреть больше</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                </a>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {gameCardsData.map((card, index) => (
                    <li key={index}>
                        <GameCard {...card} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularGameCards;