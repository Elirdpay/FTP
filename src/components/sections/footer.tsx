import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter, Send, MoreHorizontal, Headphones } from 'lucide-react';

const PayPalIcon = () => (
  <svg width="45" height="26" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
    <path d="M4.69363 25.1325L7.75663 5.43253L10.8876 5.37353L8.03063 23.3615C7.94763 23.9405 8.16963 24.3135 8.74863 24.3135H12.6076C13.0406 24.3135 13.3896 24.0185 13.5186 23.5755L17.2006 0.883534H21.8496L18.7306 19.6895L18.8926 19.7425C19.5396 17.7015 21.3656 16.2735 23.6336 16.2735H29.6276C36.6536 16.2735 41.5286 20.0995 40.1576 25.1325H4.69363Z" fill="#253B80"/>
    <path d="M24.7075 11.235C22.2505 11.235 20.3065 12.802 19.4975 14.896L16.2085 0.884033H20.7385L22.9955 14.829C23.0515 15.225 23.3715 15.52 23.7785 15.52H25.0715C28.4115 15.52 31.4245 14.008 32.5595 10.957C32.9665 9.94903 33.1975 8.91303 33.2255 7.89103C33.2535 6.78403 32.9945 5.86603 32.4155 5.07003C31.2805 3.19803 28.5995 2.11203 25.4685 2.11203H19.0435L19.4695 0.0000320708H25.9625C30.6385 0.0000320708 34.6195 1.51203 36.6035 4.67103C38.0305 6.91103 38.3095 9.38903 37.8185 11.629C36.7275 16.73 31.9565 18.022 26.5455 18.022H21.2825C20.6935 18.022 20.2035 18.493 20.1195 19.072L18.7305 19.69L18.8925 19.743L19.1415 21.263C19.4415 23.276 21.0655 24.596 23.1115 24.596H25.9905C30.0615 24.596 33.225 23.565 34.6935 20.25H39.2235C38.2155 23.192 34.8475 25.133 29.8665 25.133H23.5225C19.5415 25.133 16.8885 22.846 16.2995 19.017L13.5185 23.576C13.3895 24.019 13.0405 24.314 12.6075 24.314H8.74853C8.16953 24.314 7.94753 23.941 8.03053 23.362L9.42353 14.896C10.2515 12.774 12.2515 11.235 14.7355 11.235H24.7075Z" fill="#179BD7"/>
  </svg>
);

const FreeToPayLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full brand-gradient brand-glow flex items-center justify-center">
      <span className="text-primary-foreground font-bold text-lg">F</span>
    </div>
    <span className="font-bold text-2xl text-foreground tracking-wide">
      Free To Pay
    </span>
  </div>
);

interface FooterLink {
  href: string;
  text: string;
}

interface LinkColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
  <div>
    <h3 className="font-semibold text-foreground mb-4 text-base">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href} className="text-sm text-muted-foreground hover:text-brand transition-colors">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const socialLinks = [
    { Icon: Send, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.6-6.6-2.31-1.76-1.71-2.59-4.23-2.6-6.6.01-1.28.31-2.57.73-3.8.23-.65.54-1.28.89-1.88.09-.17.2-.34.3-.5.02-.02.03-.04.05-.06.78-1.24 1.99-2.22 3.31-2.91.13-.07.26-.13.4-.2.9-.47 1.84-.8 2.82-1.07.09-.03.18-.05.27-.08.1-.03.19-.07.29-.1v-3.9c-1.27.28-2.5.7-3.66 1.29-1.32.68-2.52 1.57-3.54 2.64-.11.12-.22.23-.33.35-.29.31-.57.63-.83.97-.24.32-.48.65-.69.99-.18.29-.34.59-.5.89-.13.25-.26.5-.38.75-.16.34-.32.69-.46 1.04-.13.31-.25.62-.37.94-.09.25-.18.49-.26.74-.08.26-.15.52-.22.78-.06.25-.12.51-.17.76-.04.24-.09.48-.12.72s-.05.49-.07.73c0 .11-.01.22-.01.33.01 4.51 2.21 8.41 5.86 10.45 3.64 2.03 8.01 1.55 11.22-1.19 3.21-2.74 4.14-7.14 3.21-11.14-.8-3.49-3.4-6.41-6.49-7.85-2.02-.95-4.2-1.37-6.33-1.36-1.31.01-2.62.01-3.93.01z"></path></svg>, href: '#' },
];

export default function Footer() {
  const aboutLinks: FooterLink[] = [
    { href: "#", text: "О нас" },
    { href: "#", text: "Новости" },
    { href: "#", text: "Поддержка" },
    { href: "#", text: "Свяжитесь с нами" },
  ];

  const gamesLinks: FooterLink[] = [
    { href: "#genshin", text: "Genshin Impact" },
    { href: "#hsr", text: "Honkai: Star Rail" },
    { href: "#zzz", text: "Zenless Zone Zero" },
  ];

  const legalLinks: FooterLink[] = [
    { href: "#", text: "Условия использования" },
    { href: "#", text: "Условия продажи" },
    { href: "#", text: "Политика конфиденциальности" },
    { href: "#", text: "Пользовательское соглашение" },
  ];

  const paymentMethods = [
    { Icon: PayPalIcon },
    { Icon: () => <div className="w-12 h-6 bg-muted border border-stroke rounded flex items-center justify-center text-xs text-muted-foreground">VISA</div> },
    { Icon: () => <div className="w-12 h-6 bg-muted border border-stroke rounded flex items-center justify-center text-xs text-muted-foreground">MC</div> },
    { Icon: () => <div className="w-12 h-6 bg-muted border border-stroke rounded flex items-center justify-center text-xs text-muted-foreground">₿</div> },
    { Icon: () => <div className="w-12 h-6 bg-muted border border-stroke rounded flex items-center justify-center text-xs text-muted-foreground">🍎</div> },
  ];

  return (
    <>
      <footer className="bg-card border-t border-stroke">
        <div className="bg-muted py-6 border-b border-stroke">
          <div className="container">
            <h3 className="text-center text-foreground font-semibold mb-4">Способы оплаты</h3>
            <div className="flex items-center justify-center flex-wrap gap-4">
              {paymentMethods.map(({ Icon }, index) => (
                <Icon key={index} />
              ))}
              <MoreHorizontal className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <FooterLinkColumn title="О Free To Pay" links={aboutLinks} />
              <FooterLinkColumn title="Игры" links={gamesLinks} />
              <FooterLinkColumn title="Правовая информация" links={legalLinks} />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-base">Следите за нами</h3>
                <div className="flex items-center space-x-3">
                   {socialLinks.map(({ Icon, href }, index) => (
                    <a key={index} href={href} className="text-muted-foreground hover:text-brand transition-colors bg-muted border border-stroke rounded-xl p-3 block hover:border-brand">
                      <Icon />
                    </a>
                   ))}
                </div>
              </div>

              <div className="brand-gradient rounded-2xl p-6 text-primary-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-tight">Free To Pay в вашем кармане</p>
                    <p className="text-sm mt-1 opacity-90">Скоро в App Store и Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-6 border-t border-stroke">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <div className="flex items-center gap-6">
              <FreeToPayLogo />
              <p className="text-xs text-muted-foreground">
                © 2024 Free To Pay. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <a href="#" className="fixed bottom-6 right-6 brand-gradient rounded-2xl p-4 text-primary-foreground shadow-lg flex items-center gap-3 hover:scale-105 transition-all z-50 brand-glow">
        <Headphones size={24} />
        <div className="hidden sm:block text-sm font-semibold leading-tight">
            Поддержка<br/>24/7
        </div>
      </a>
    </>
  );
}