import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const newsItems = [
  {
    href: "https://news.seagm.com/identity-v-x-frieren-beyond-journeys-end-lucky-draw/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "Identity V x Frieren: Beyond Journey’s End Lucky Draw",
  },
  {
    href: "https://news.seagm.com/enjoy-30-off-diamonds-with-mlbbs-metro-zero-update/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "Enjoy 30% off Diamonds with MLBB’s Metro Zero Update!",
  },
  {
    href: "https://news.seagm.com/seagm-is-gauging-interest-in-doing-a-nintendo-switch-2-giveaway/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "SEAGM is Gauging Interest in Doing a Nintendo Switch 2 Giveaway",
  },
  {
    href: "https://news.seagm.com/nintendo-super-mario-party-jamboree-is-out-on-switch-2/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "Nintendo Super Mario Party Jamboree is Out on Switch 2!",
  },
  {
    href: "https://news.seagm.com/silver-and-blood-the-gothic-vampire-real-time-strategy-rpg/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "Silver and Blood – The Gothic Vampire Real-Time Strategy RPG",
  },
  {
    href: "https://news.seagm.com/rememento-white-shadow/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "Rememento: White Shadow – an open-world strategy RPG",
  },
  {
    href: "https://news.seagm.com/the-best-nintendo-switch-2-games-that-run-at-60fps/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "The Best Nintendo Switch 2 Games that Run at 60fps",
  },
  {
    href: "https://news.seagm.com/crystal-of-atlan-giveaway-is-coming-your-way/",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/newscover-45f2fe4849-3.svg",
    title: "Crystal of Atlan Giveaway is Coming your Way!",
  },
];


const NewsCard = ({ href, imageSrc, title }: { href: string; imageSrc: string; title: string; }) => (
  <a href={href} className="group block" title={title}>
    <div className="overflow-hidden rounded-lg mb-3">
      <Image
        src={imageSrc}
        alt={title}
        width={285}
        height={160}
        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-200 ease-in-out"
      />
    </div>
    <p className="font-semibold text-sm leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
      {title}
    </p>
  </a>
);

const NewsPromotion = () => {
  const cardsToShow = newsItems.slice(0, 6); // Following instruction to show 6 cards

  return (
    <section className="py-6 bg-background">
      <div className="container">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl font-semibold font-display text-foreground">
            Новости &amp; Продвижение
          </h2>
          <a
            href="https://news.seagm.com/"
            title="SEAGM Новости"
            className="flex items-center text-sm text-text-secondary group whitespace-nowrap"
          >
            <span className="hidden sm:inline">Больше новостей и промо-акций по играм на&nbsp;</span>
            <span className="text-foreground group-hover:text-primary transition-colors font-semibold">SEAGM Новости</span>
            <span className="ml-1 bg-destructive text-destructive-foreground rounded-sm p-[2px] flex items-center justify-center">
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {cardsToShow.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPromotion;