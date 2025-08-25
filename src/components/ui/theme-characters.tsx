"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export function ThemeCharacters() {
  const { resolvedTheme } = useTheme();

  // Mount guard to avoid SSR/theme flicker
  const [mounted, setMounted] = useState(false);
  const [leftLoaded, setLeftLoaded] = useState(false);
  const [rightLoaded, setRightLoaded] = useState(false);
  const [leftSrc, setLeftSrc] = useState<string | null>(null);
  const [rightSrc, setRightSrc] = useState<string | null>(null);
  const [leftFallbackFilter, setLeftFallbackFilter] = useState<string | undefined>(undefined);
  const [rightFallbackFilter, setRightFallbackFilter] = useState<string | undefined>(undefined);
  const [visualDark, setVisualDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    const detect = () => {
      const isVisualDark = document.documentElement.classList.contains("dark");
      setVisualDark(isVisualDark);
      return isVisualDark;
    };

    const initial = detect();
  console.debug('[ThemeCharacters] initial visualDark=', initial);

    // preload images depending on visual theme. If light-theme images exist, use them; otherwise fallback to dark images.
    // generic preload helper
    const preload = (src: string) =>
      new Promise<void>((res, rej) => {
        const i = new Image();
        i.src = src;
        i.onload = () => res();
        i.onerror = () => rej();
      });

    // Preload both dark and light character images to avoid lag on theme switch
    const allPreloads = [
      '/image/dark/character-left-dark.png',
      '/image/dark/character-right-dark.png',
      '/image/light/character-left-light.png',
      '/image/light/character-right-light.png',
    ].map(p => preload(p).catch(() => {}));
    Promise.all(allPreloads).then(() => console.debug('[ThemeCharacters] all character assets preloaded'));

    if (initial) {
      // visual dark: try to load dark images; set src only on success
      const darkL = "/image/dark/character-left-dark.png";
      const darkR = "/image/dark/character-right-dark.png";
      setLeftLoaded(false); setRightLoaded(false);
      preload(darkL)
        .then(() => { setLeftSrc(darkL); setLeftLoaded(true); })
        .catch(() => { setLeftSrc(null); setLeftLoaded(false); });
      preload(darkR)
        .then(() => { setRightSrc(darkR); setRightLoaded(true); })
        .catch(() => { setRightSrc(null); setRightLoaded(false); });
    } else {
      // visual light: try to load light images; set src only on success
      const lightL = "/image/light/character-left-light.png";
      const lightR = "/image/light/character-right-light.png";
      setLeftLoaded(false); setRightLoaded(false);
      preload(lightL)
        .then(() => { setLeftSrc(lightL); setLeftLoaded(true); })
        .catch(() => { setLeftSrc(null); setLeftLoaded(false); });
      preload(lightR)
        .then(() => { setRightSrc(lightR); setRightLoaded(true); })
        .catch(() => { setRightSrc(null); setRightLoaded(false); });
    }

    const mo = new MutationObserver(() => {
      const now = detect();
      console.debug('[ThemeCharacters] theme mutation observed, visualDark=', now);
      // reload appropriate images when theme changes — always attempt to load
      if (now) {
        const darkL = "/image/dark/character-left-dark.png";
        const darkR = "/image/dark/character-right-dark.png";
        console.debug('[ThemeCharacters] loading dark characters', darkL, darkR);
        setLeftLoaded(false); setRightLoaded(false);
        preload(darkL).then(() => { setLeftSrc(darkL); setLeftLoaded(true); }).catch(() => { setLeftSrc(null); setLeftLoaded(false); });
        preload(darkR).then(() => { setRightSrc(darkR); setRightLoaded(true); }).catch(() => { setRightSrc(null); setRightLoaded(false); });
      } else {
        const lightL = "/image/light/character-left-light.png";
        const lightR = "/image/light/character-right-light.png";
        console.debug('[ThemeCharacters] loading light characters', lightL, lightR);
        setLeftLoaded(false); setRightLoaded(false);
        preload(lightL).then(() => { setLeftSrc(lightL); setLeftLoaded(true); }).catch(() => { setLeftSrc(null); setLeftLoaded(false); });
        preload(lightR).then(() => { setRightSrc(lightR); setRightLoaded(true); }).catch(() => { setRightSrc(null); setRightLoaded(false); });
      }
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => mo.disconnect();
  }, [resolvedTheme]);

  if (!mounted) return null; // don't render on server

  // Render characters when corresponding theme images are available.
  // Previously we returned early for non-dark themes which made
  // characters only ever appear in the dark theme. Instead, show
  // left/right if their src has been successfully loaded.

  return (
    <>
      <style>{`

        /* Characters should sit behind the UI and not intercept clicks */
        .theme-character {
          position: fixed;
          width: auto;
          height: 100vh; /* full viewport height to match screenshot */
          max-width: 520px;
          object-fit: cover;
          pointer-events: none;
          user-select: none;
          opacity: 1;
          z-index: 12; /* above background canvas (0), below primogem canvas (15) and UI (main z-20) */
          will-change: transform;
          overflow: visible;
        }

        /*
  Positions for characters differ per theme.
   - Default (light theme): rules below apply.
   - Dark theme: overridden by the .dark selector beneath.

   To tweak coordinates for the light theme, edit the values in
   .theme-character.left and .theme-character.right.
   To tweak coordinates for the dark theme, edit the values in
   .dark .theme-character.left and .dark .theme-character.right.
        */

        /*
          Separate positions for light and dark themes.
          Edit the .theme-character.* blocks to change positions for the LIGHT theme.
          Edit the .dark .theme-character.* blocks to change positions for the DARK theme.
        */

        /* LEFT character — LIGHT theme (default).
           Now set to match the DARK theme positions so light and dark
           visually align while keeping separate rules for future tweaks. */
        .theme-character.left {
          left: 0; /* keep at screen edge */
          top: 0;
          bottom: 0;
          transform: translateX(-4%); /* slight overlap like on screenshot but not clipped */
        }

        /* RIGHT character — LIGHT theme (default).
           Now set to match the DARK theme positions so light and dark
           visually align while keeping separate rules for future tweaks. */
        .theme-character.right {
          right: -12vw; /* keep almost fully visible: small negative to peek out but not clipped */
          top: 50px;
          bottom: 0;
          transform: translateX(2%);
        }

        /* LEFT character — DARK theme overrides. Edit these values to move left character in dark theme */
        .dark .theme-character.left {
          left: 0; /* keep at screen edge */
          top: 0;
          bottom: 0;
          transform: translateX(-4%); /* slight overlap like on screenshot but not clipped */
        }

        /* RIGHT character — DARK theme overrides. Edit these values to move right character in dark theme */
        .dark .theme-character.right {
          right: -10vw; /* keep almost fully visible: small negative to peek out but not clipped */
          top: 120px;
          bottom: 0;
          transform: translateX(2%);
        }

        /* Hide on small screens */
        @media (max-width: 900px) {
          .theme-character { display: none; }
        }
      `}</style>

  {leftSrc && (
          <img
            key={leftSrc}
            src={leftSrc}
            alt="Character Left"
            data-debug-src={leftSrc}
            data-debug-loaded={leftLoaded}
            className={`theme-character left ${leftLoaded ? 'loaded' : 'loading'}`}
            style={{ opacity: leftLoaded ? 1 : 0, background: 'transparent', display: 'block', zIndex: 12, transition: 'opacity 300ms ease' }}
          />
        )}

  {rightSrc && (
          <img
            key={rightSrc}
            src={rightSrc}
            alt="Character Right"
            data-debug-src={rightSrc}
            data-debug-loaded={rightLoaded}
            className={`theme-character right ${rightLoaded ? 'loaded' : 'loading'}`}
            style={{ opacity: rightLoaded ? 1 : 0, background: 'transparent', display: 'block', zIndex: 12, transition: 'opacity 300ms ease' }}
          />
        )}
    </>
  );
}
