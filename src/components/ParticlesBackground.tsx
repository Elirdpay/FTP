"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Primogem {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
}

export default function PrimogemsBackground() {
  const bgRef = useRef<HTMLCanvasElement>(null);
  const fgRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const bg = bgRef.current;
    const fg = fgRef.current;
    if (!bg || !fg) return;

    const bgCtx = bg.getContext("2d") as CanvasRenderingContext2D;
    const fgCtx = fg.getContext("2d") as CanvasRenderingContext2D;

    let width = (bg.width = fg.width = window.innerWidth);
    let height = (bg.height = fg.height = window.innerHeight);

    const onResize = () => {
      width = bg.width = fg.width = window.innerWidth;
      height = bg.height = fg.height = window.innerHeight;
      // redraw background on resize
      drawBackground(currentDark);
    };
    window.addEventListener("resize", onResize);

    let currentDark = typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : resolvedTheme === "dark";

    const primogemImg = new Image();
    primogemImg.crossOrigin = "anonymous";
    const chooseSrc = (isDark: boolean) => (isDark ? "/image/dark/primogem-dark.png" : "/image/light/primogem.png");
    primogemImg.src = chooseSrc(currentDark);

    function drawBackground(isDark: boolean) {
      if (!bgCtx) return;
      if (isDark) {
        bgCtx.fillStyle = "#000";
        bgCtx.fillRect(0, 0, width, height);
      } else {
        const gradient = bgCtx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#efe7f5");
        gradient.addColorStop(1, "#f6f3fa");
        bgCtx.fillStyle = gradient;
        bgCtx.fillRect(0, 0, width, height);
      }
    }

    // create primogems
    const primogems: Primogem[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 50 + 30,
      speedX: Math.random() * 2 + 1,
      speedY: Math.random() * 2 + 1,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.05,
    }));

    let animationId: number | null = null;

    function animate() {
      if (!fgCtx) return;
      // clear only foreground canvas so background stays visible
      fgCtx.clearRect(0, 0, width, height);

      for (const p of primogems) {
        fgCtx.save();
        fgCtx.translate(p.x, p.y);
        fgCtx.rotate(p.rotation);
        fgCtx.drawImage(primogemImg, -p.size / 2, -p.size / 2, p.size, p.size);
        fgCtx.restore();

        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        if (p.y > height + p.size || p.x > width + p.size) {
          p.y = -p.size - Math.random() * 50;
          p.x = Math.random() * width;
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    primogemImg.onload = () => {
      // start animation once image loaded
      if (animationId) cancelAnimationFrame(animationId);
      animate();
    };

    // initial draw
    drawBackground(currentDark);

    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      if (isDarkNow !== currentDark) {
        currentDark = isDarkNow;
        // redraw background (fills bg canvas)
        drawBackground(currentDark);
        // switch primogem image
        primogemImg.src = chooseSrc(currentDark);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [resolvedTheme]);

  return (
    <>
      <canvas
        ref={bgRef}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
      />
      <canvas
        ref={fgRef}
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 15, pointerEvents: "none" }}
      />
    </>
  );
}
