import Image from 'next/image';

const offersData = [
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1139.jpg",
    imageAlt: "WeSing Kcoin",
    subtitle: "5597 Kcoin",
    title: "WeSing Kcoin",
    discount: "-9.0%",
    link: "https://www.seagm.com/ru/we-sing-kcoin?ps=Home-Special-Deals&item_id=19690",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1934-9.jpg",
    imageAlt: "Starfield (Global)",
    subtitle: "Starfield Standard Edition (Steam)",
    title: "Starfield (Global)",
    discount: "-5.0%",
    link: "https://www.seagm.com/ru/starfield-global?ps=Home-Special-Deals&item_id=14121",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/2527.jpg",
    imageAlt: "Once Human Top Up",
    subtitle: "8075 Crystgin",
    title: "Once Human Top Up",
    discount: "-10.0%",
    link: "https://www.seagm.com/ru/once-human-top-up?ps=Home-Special-Deals&item_id=19409",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1906.jpg",
    imageAlt: "MICO Live Coins (MENA)",
    subtitle: "108000 Coins",
    title: "MICO Live Coins (MENA)",
    discount: "-2.0%",
    link: "https://www.seagm.com/ru/mico-coins-mena-top-up?ps=Home-Special-Deals&item_id=17299",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/706-3.jpg",
    imageAlt: "Battle.net Balance Card (CA)",
    subtitle: "Battle.net Balance - C$100",
    title: "Battle.net Balance Card (CA)",
    discount: "-2.0%",
    link: "https://www.seagm.com/ru/battlenet-balance-card-canada?ps=Home-Special-Deals&item_id=12570",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/869.jpg",
    imageAlt: "Free Fire Diamonds",
    subtitle: "1080 Diamonds",
    title: "Free Fire Diamonds",
    discount: "-5.0%",
    link: "https://www.seagm.com/ru/free-fire-diamonds-top-up?ps=Home-Special-Deals&item_id=6340",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/470.jpg",
    imageAlt: "iTunes Gift Card (NL)",
    subtitle: "iTunes Gift Card 4 EURO NL",
    title: "iTunes Gift Card (NL)",
    discount: "-3.0%",
    link: "https://www.seagm.com/ru/itunes-gift-card-netherlands?ps=Home-Special-Deals&item_id=12041",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/2029.jpg",
    imageAlt: "Poppo Live Coins",
    subtitle: "28,000,000 Coins",
    title: "Poppo Live Coins",
    discount: "-24.0%",
    link: "https://www.seagm.com/ru/poppo-live-coins?ps=Home-Special-Deals&item_id=21178",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    imageAlt: "Dunk City Dynasty Top Up",
    subtitle: "3,280 Tokens 600 free",
    title: "Dunk City Dynasty Top Up",
    discount: "-22.0%",
    link: "https://www.seagm.com/ru/dunk-city-dynasty-top-up?ps=Home-Special-Deals&item_id=12535",
  },
  {
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg",
    imageAlt: "Ragnarok M Classic Top up",
    subtitle: "32.8 Million + 2.7 Million Zeny",
    title: "Ragnarok M Classic Top up",
    discount: "-13.0%",
    link: "https://www.seagm.com/ru/ro-m-classic-top-up?ps=Home-Special-Deals&item_id=21229",
  },
];

export default function ExclusiveOffers() {
  return (
    <div className="bg-background">
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-start justify-between sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              ЭКСКЛЮЗИВНЫЕ ПРЕДЛОЖЕНИЯ
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Не пропустите наши ограниченные предложения! Обнаружите текущие сделки сегодня!
            </p>
          </div>
          <a
            href="https://www.seagm.com/ru/special_deals"
            className="hidden shrink-0 sm:inline-block rounded-full bg-[#212529] px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/90"
          >
            Просмотреть больше
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {offersData.map((offer, index) => (
            <a
              key={index}
              href={offer.link}
              className="group block overflow-hidden rounded-lg border border-border bg-secondary text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center p-4">
                <Image
                  src={offer.imageUrl}
                  alt={offer.imageAlt}
                  width={54}
                  height={54}
                  className="mr-4 h-14 w-14 flex-shrink-0 rounded-md object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs text-muted-foreground">{offer.subtitle}</p>
                  <p className="mt-1 truncate text-sm font-semibold">{offer.title}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border bg-background px-4 py-2">
                <span className="rounded-full bg-success px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                  Промо
                </span>
                <span className="text-sm font-bold text-foreground">{offer.discount}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <a
            href="https://www.seagm.com/ru/special_deals"
            className="inline-block rounded-full bg-[#212529] px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/90"
          >
            Просмотреть больше
          </a>
        </div>
      </section>
    </div>
  );
}