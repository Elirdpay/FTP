"use client";

import { useEffect, useRef } from "react";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const img = new Image();
    img.src = "/primogem.png"; // положи твой файл primogem.png в public

    const primogems: Primogem[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 50 + 30,
      speedX: Math.random() * 2 + 1,
      speedY: Math.random() * 2 + 1,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.05,
    }));

    let animationId: number;

    function animate() {
      // фон черно-бирюзовый
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#000000");
      gradient.addColorStop(1, "#001f2f");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const p of primogems) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        // обновляем позицию
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // сброс при выходе за экран
        if (p.y > height + p.size || p.x > width + p.size) {
          p.y = -p.size - Math.random() * 50;
          p.x = Math.random() * width;
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    img.onload = () => animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
