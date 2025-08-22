import Image from 'next/image';

interface Feature {
  href: string;
  imgAlt: string;
  imageUrl: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    href: "https://www.seagm.com/ru/landing/steam-wallet-card-code",
    imgAlt: "steam-wallet-card-code",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/blank-fd6f49565f.svg",
    title: "Up To 33 Regions STEAM Wallet Codes",
    description: "Get access to thousands of games, DLC & in-game purchase with your Steam Wallet Code today. Instant delivery with 24/7 SEAGM live support, globally trusted."
  },
  {
    href: "https://www.seagm.com/ru/landing/playstation-network-card-code",
    imgAlt: "playstation-network-card-code",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/blank-fd6f49565f.svg",
    title: "Entertainment and adventures all in one place, the PlayStation Store.",
    description: "With the PlayStation Network Card you can shop for games from AAA titles to Indies plus movies and music. Buy PlayStation Network Card from SEAGM and start shopping now! Instant delivery with 24/7 live support, globally trusted."
  },
  {
    href: "https://www.seagm.com/ru/landing/itunes-gift-card",
    imgAlt: "itunes-gift-card",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/blank-fd6f49565f.svg",
    title: "Endless possibility. Instant delivery.",
    description: "Get new apps from the AppStore or reload game currency, you can do it all with the iTunes Gift Card. SEAGM offers multiple denominations for you to choose from. Instant delivery with 24/7 live support, globally trusted."
  },
  {
    href: "https://www.seagm.com/ru/landing/google-play-gift-card",
    imgAlt: "google-play-gift-card",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/blank-fd6f49565f.svg",
    title: "Turn your smartphone into a game, movie and book library!",
    description: "Top up your Google Play Balance with the Google Play Gift card and start growing your collection! Buy game booster packs, rent a movie or read an ebook - all from the convenience of your smartphone. SEAGM offers cards for up to 15 regions, check them out! Instant delivery with 24/7 live support, globally trusted."
  },
  {
    href: "https://www.seagm.com/ru/landing/razer-gold",
    imgAlt: "razer-gold",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/blank-fd6f49565f.svg",
    title: "The go-to for mobile gaming, Razer Gold.",
    description: "Reload currency for your favorite mobile game such as Mobile Legends with Razer Gold! SEAGM has a wide range of selection up to 8 regions. Instant delivery with 24/7 live support, globally trusted."
  },
  {
    href: "https://www.seagm.com/ru/landing/nintendo-eshop-prepaid-card",
    imgAlt: "nintendo-eshop-prepaid-card",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/blank-fd6f49565f.svg",
    title: "Nintendo eShop Prepaid Card",
    description: "With the Nintendo eShop Gift Card, you can now subscribe to Nintendo Switch Online! The service lets you save your game data to cloud plus enable online play. Take advantage of the special offers in the eShop as well with SEAGM’s Nintendo eShop Gift Card! Instant delivery with 24/7 live support, globally trusted."
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => (
  <a
    href={feature.href}
    title="Просмотреть больше"
    className="block bg-card p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-[88px] h-[88px] relative">
        <Image
          src={feature.imageUrl}
          alt={feature.imgAlt}
          width={88}
          height={88}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-display font-semibold text-base text-foreground mb-1">
          {feature.title}
        </h3>
        <p className="font-body text-sm text-text-secondary">
          {feature.description}
        </p>
      </div>
    </div>
  </a>
);

const PlatformFeatures = () => {
    return (
        <section className="py-6 bg-background">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformFeatures;