import Image from "next/image";

type GameCard = {
  icon: string;
  title: string;
  region: string;
  href: string;
};

const gameCards: GameCard[] = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/2704-28.jpg",
    title: "Path of Exile 2 CD Key",
    region: "Global",
    href: "https://www.seagm.com/ru/path-of-exile-2-cd-key?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/3164-29.jpg",
    title: "Xbox Live Gift Card (CZ)",
    region: "Czech Republic",
    href: "https://www.seagm.com/ru/xbox-live-gift-cards-czech-republic?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    title: "Amazon Prime Voucher (SA)",
    region: "Saudi Arabia",
    href: "https://www.seagm.com/ru/amazon-prime-voucher-saudi-arabia?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    title: "Hungerstation Gift Card (SA)",
    region: "Saudi Arabia",
    href: "https://www.seagm.com/ru/hungerstation-gift-card-saudi-arabia?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    title: "Mafia:The Old Country (Steam)",
    region: "Global",
    href: "https://www.seagm.com/ru/mafia-the-old-country-steam?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    title: "Paypal Gift Card GBP",
    region: "Global",
    href: "https://www.seagm.com/ru/paypal-gift-card-gbp?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    title: "TikTok Ads Gift Card GBP",
    region: "Global",
    href: "https://www.seagm.com/ru/tiktok-ads-gift-card-gbp?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    title: "Fansly Gift Card GBP",
    region: "Global",
    href: "https://www.seagm.com/ru/fansly-gift-card-gbp?ps=Home-New-Game-Card",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    title: "Fansly Gift Card EUR",
    region: "Global",
    href: "https://www.seagm.com/ru/fansly-gift-card-eur?ps=Home-New-Game-Card",
  },
];

const GameCardItem = ({ card }: { card: GameCard }) => (
  <li>
    <a
      href={card.href}
      title={card.title}
      className="flex items-center p-2 rounded-lg hover:bg-secondary transition-colors duration-200 ease-in-out"
    >
      <Image
        src={card.icon}
        alt={card.title}
        width={40}
        height={40}
        className="w-10 h-10 mr-3 rounded-md object-cover flex-shrink-0"
      />
      <div>
        <p className="text-sm font-medium text-foreground leading-tight">{card.title}</p>
        <p className="text-xs text-muted-foreground">{card.region}</p>
      </div>
    </a>
  </li>
);

const NewGameCards = () => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">НОВАЯ ИГРОВАЯ КАРТА</h3>
      <ul className="space-y-1">
        {gameCards.map((card) => (
          <GameCardItem key={card.title} card={card} />
        ))}
      </ul>
    </div>
  );
};

export default NewGameCards;