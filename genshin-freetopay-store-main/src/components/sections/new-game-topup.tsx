import Image from 'next/image';

const newTopUpGames = [
  {
    name: 'HAIKYU!! FLY HIGH SEA Top Up',
    region: 'South East Asia',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/3161.jpg',
    link: '/ru/haikyu-fly-high-sea-top-up?ps=Home-New-Game-Top-Up',
  },
  {
    name: '劍客行 Top Up',
    region: 'Taiwan',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/3159.jpg',
    link: '/ru/jian-ke-xing-zhi-chong?ps=Home-New-Game-Top-Up',
  },
  {
    name: 'Samkok Fantasy (PH/TH/ID) Top Up',
    region: 'South East Asia',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg',
    link: '/ru/samkok-fantasy-top-up?ps=Home-New-Game-Top-Up',
  },
  {
    name: '東方幻想ECLIPSE Top Up',
    region: 'Taiwan',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg',
    link: '/ru/dong-fang-huan-xiang-eclipse-top-up?ps=Home-New-Game-Top-Up',
  },
  {
    name: 'Dream and Lethe Record SEA Top Up',
    region: 'South East Asia',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg',
    link: '/ru/dream-and-lethe-record-sea-top-up?ps=Home-New-Game-Top-Up',
  },
  {
    name: 'Wuthering Waves Top Up',
    region: 'Global',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg',
    link: '/ru/wuthering-waves-top-up?ps=Home-New-Game-Top-Up',
  },
  {
    name: 'Dragon Nest M: Classic SEA Top Up',
    region: '',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg',
    link: '/ru/dragon-nest-m-classic-sea-top-up?ps=Home-New-Game-Top-Up',
  },
  {
    name: 'Deadly Dudes Top Up',
    region: 'Global',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg',
    link: '/ru/deadly-dudes-top-up?ps=Home-New-Game-Top-Up',
  },
  {
    name: '花亦山心之月 (港澳台) 直充',
    region: 'Taiwan',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/svgs/iconpic-1d35e15e80-2.svg',
    link: '/ru/the-moon-in-the-heart-of-flowers-and-mountains-hkmotw-top-up?ps=Home-New-Game-Top-Up',
  },
];

const NewGameTopUp = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">
        Новая игра пополнение
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {newTopUpGames.map((game, index) => (
          <li key={index}>
            <a href={game.link} className="flex items-center gap-4 group">
              <Image
                src={game.imageUrl}
                alt={game.name}
                width={60}
                height={60}
                className="w-[60px] h-[60px] rounded-lg bg-muted flex-shrink-0 object-cover"
              />
              <div className="flex flex-col">
                <b className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                  {game.name}
                </b>
                {game.region && (
                  <span className="text-xs text-muted-foreground mt-1">
                    {game.region}
                  </span>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewGameTopUp;