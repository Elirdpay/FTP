"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        background: "var(--card)",
        color: "var(--foreground)",
        border: "1px solid var(--stroke)",
        borderRadius: 8,
        padding: "8px 16px",
        cursor: "pointer",
        fontWeight: 600,
      }}
      aria-label="Переключить тему"
    >
      {currentTheme === "dark" ? "Тёмная тема" : "Светлая тема"}
    </button>
  );
}
